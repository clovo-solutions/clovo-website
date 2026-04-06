import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consentCommunications: boolean;
  consentProcessing: boolean;
  recaptchaToken?: string;
}

// ── Step 1: Verify reCAPTCHA token with Google ──
async function verifyRecaptcha(
  token: string
): Promise<{ success: boolean; score: number }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("Missing RECAPTCHA_SECRET_KEY env var");
    return { success: false, score: 0 };
  }

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    const data = await res.json();
    console.log("reCAPTCHA verification:", {
      success: data.success,
      score: data.score,
      action: data.action,
    });

    return {
      success: data.success && data.score >= 0.5,
      score: data.score || 0,
    };
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return { success: false, score: 0 };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // ── Validation ──
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!body.consentProcessing) {
      return NextResponse.json(
        { error: "You must consent to data processing." },
        { status: 400 }
      );
    }

    // ── Step 2: Verify reCAPTCHA ──
    if (body.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(body.recaptchaToken);

      if (!recaptchaResult.success) {
        console.warn("reCAPTCHA failed — score:", recaptchaResult.score);
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 403 }
        );
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY) {
      // reCAPTCHA is configured but no token was sent — reject
      return NextResponse.json(
        { error: "reCAPTCHA token missing. Please try again." },
        { status: 400 }
      );
    }

    // ── Step 3: Submit to HubSpot ──
    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      console.error("Missing HUBSPOT_PORTAL_ID or HUBSPOT_FORM_ID");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // EU portal → eu1 endpoint
    const hubspotUrl = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const hubspotPayload = {
      fields: [
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: body.name.split(" ")[0],
        },
        {
          objectTypeId: "0-1",
          name: "lastname",
          value: body.name.split(" ").slice(1).join(" ") || "",
        },
        { objectTypeId: "0-1", name: "email", value: body.email },
        { objectTypeId: "0-1", name: "phone", value: body.phone || "" },
        { objectTypeId: "0-1", name: "message", value: body.message },
      ],
      context: {
        pageUri: "https://clovo-solutions.com/contact",
        pageName: "Contact — Clovo Solutions",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "By clicking submit below, you consent to allow Clovo Solutions to store and process the personal information submitted above to provide you the content requested.",
          communications: [
            {
              value: body.consentCommunications,
              // TODO: Replace with your actual subscription type ID.
              // Go to HubSpot → Settings → Marketing → Email → Subscription Types
              // Click "Marketing Information" → grab the ID from the URL.
              subscriptionTypeId: 999,
              text: "I agree to receive other communications from Clovo Solutions.",
            },
          ],
        },
      },
    };

    console.log("Submitting to HubSpot:", hubspotUrl);

    const hubspotRes = await fetch(hubspotUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotPayload),
    });

    const responseText = await hubspotRes.text();
    console.log("HubSpot response:", hubspotRes.status, responseText);

    if (!hubspotRes.ok) {
      console.error("HubSpot error:", hubspotRes.status, responseText);
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
