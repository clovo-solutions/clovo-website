"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import locale from "@/locales/en.json";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consentCommunications: boolean;
  consentProcessing: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consentProcessing?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  className?: string;
}

const t = locale.contact.form;

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consentCommunications: false,
    consentProcessing: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
      return;
    }

    if (document.querySelector(`script[src*="recaptcha"]`)) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);
  }, []);

  const getRecaptchaToken = useCallback(async (): Promise<string | null> => {
    if (!RECAPTCHA_SITE_KEY || !recaptchaLoaded) return null;

    try {
      const token = await (
        window as unknown as {
          grecaptcha: {
            ready: (cb: () => void) => void;
            execute: (key: string, opts: { action: string }) => Promise<string>;
          };
        }
      ).grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "contact_submit",
      });
      return token;
    } catch (err) {
      console.error("reCAPTCHA error:", err);
      return null;
    }
  }, [recaptchaLoaded]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.validation.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.validation.messageRequired;
    }

    if (!formData.consentProcessing) {
      newErrors.consentProcessing =
        "You must consent to data processing to submit this form.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");

    try {
      // Get reCAPTCHA token before submitting
      const recaptchaToken = await getRecaptchaToken();

      if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
        throw new Error("reCAPTCHA verification failed. Please try again.");
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || t.error);
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consentCommunications: false,
        consentProcessing: false,
      });
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : t.error);
    }
  };

  return (
    <div ref={formRef} className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-full min-h-[480px] flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-accent/10 bg-accent/[0.02]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01D957"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <h3 className="font-display text-xl font-semibold text-white mb-3">
              Message Sent
            </h3>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed mb-8">
              {t.success}
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-accent/50 hover:text-accent transition-colors underline underline-offset-2"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/[0.06] bg-dark-800/60 backdrop-blur-sm overflow-hidden"
          >
            {/* Form header */}
            <div className="p-6 border-b border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#01D957"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 4l6 4.5L14 4" />
                    <rect x="1" y="3" width="14" height="10" rx="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">
                    Get in Touch
                  </p>
                  <p className="text-xs text-white/25">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Form body */}
            <div className="p-6 space-y-5">
              {/* Error banner */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 rounded-xl bg-red-500/[0.06] border border-red-500/10"
                  >
                    <p className="text-xs text-red-400/80">
                      {serverError || t.error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2"
                  >
                    {t.name} <span className="text-accent/40">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    autoComplete="name"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-white/15 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.name
                        ? "border-red-500/30 focus:border-red-500/50 focus:ring-red-500/10"
                        : "border-white/[0.06] focus:border-accent/30 focus:ring-accent/10"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400/70 mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2"
                  >
                    {t.email} <span className="text-accent/40">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    autoComplete="email"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-white/15 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.email
                        ? "border-red-500/30 focus:border-red-500/50 focus:ring-red-500/10"
                        : "border-white/[0.06] focus:border-accent/30 focus:ring-accent/10"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400/70 mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2"
                >
                  {t.phone}{" "}
                  <span className="text-white/15 normal-case tracking-normal">
                    ({t.phoneHint})
                  </span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-white/30 tracking-wider uppercase mb-2"
                >
                  {t.message} <span className="text-accent/40">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-white/15 focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-500/30 focus:border-red-500/50 focus:ring-red-500/10"
                      : "border-white/[0.06] focus:border-accent/30 focus:ring-accent/10"
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400/70 mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* GDPR / Consent Section */}
              <div className="space-y-4 pt-2">
                <p className="text-xs text-white/25 leading-relaxed">
                  Clovo Solutions is committed to protecting and respecting your
                  privacy, and we&apos;ll only use your personal information to
                  administer your account and to provide the products and
                  services you requested from us. From time to time, we would
                  like to contact you about our products and services, as well
                  as other content that may be of interest to you. If you
                  consent to us contacting you for this purpose, please tick
                  below:
                </p>

                {/* Opt-in: marketing communications */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      name="consentCommunications"
                      checked={formData.consentCommunications}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-4 h-4 rounded border border-white/10 bg-white/[0.03] peer-checked:bg-accent/20 peer-checked:border-accent/40 transition-all duration-200 flex items-center justify-center group-hover:border-white/20">
                      {formData.consentCommunications && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M2 5l2.5 2.5L8 3"
                            stroke="#01D957"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-white/35 leading-relaxed">
                    I agree to receive other communications from Clovo
                    Solutions.
                  </span>
                </label>

                {/* Required: consent to processing */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      name="consentProcessing"
                      checked={formData.consentProcessing}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div
                      className={`w-4 h-4 rounded border bg-white/[0.03] peer-checked:bg-accent/20 peer-checked:border-accent/40 transition-all duration-200 flex items-center justify-center group-hover:border-white/20 ${
                        errors.consentProcessing
                          ? "border-red-500/40"
                          : "border-white/10"
                      }`}
                    >
                      {formData.consentProcessing && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M2 5l2.5 2.5L8 3"
                            stroke="#01D957"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-white/35 leading-relaxed">
                    By clicking submit, I consent to allow Clovo Solutions to
                    store and process my personal information to provide the
                    content requested. <span className="text-accent/40">*</span>
                  </span>
                </label>
                {errors.consentProcessing && (
                  <p className="text-[11px] text-red-400/70 ml-7">
                    {errors.consentProcessing}
                  </p>
                )}

                <p className="text-[11px] text-white/15 leading-relaxed">
                  You can unsubscribe from these communications at any time. For
                  more information on our privacy practices, please review our{" "}
                  <a
                    href="/privacy"
                    className="text-white/25 hover:text-white/40 underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: status === "submitting" ? 1 : 1.01 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.99 }}
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 ${
                  status === "submitting"
                    ? "bg-accent/60 text-dark-900/60 cursor-wait"
                    : "bg-accent text-dark-900 hover:shadow-[0_0_40px_rgba(1,217,87,0.3)]"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="opacity-20"
                      />
                      <path
                        d="M12 2a10 10 0 019.95 9"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    {t.submit}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10m0 0L9 4m4 4L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </motion.button>

              {/* reCAPTCHA notice */}
              <p className="text-center text-[10px] text-white/10 leading-relaxed">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white/20 transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white/20 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
