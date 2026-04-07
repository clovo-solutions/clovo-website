"use client";

import { useRouter, usePathname } from "next/navigation";

interface ContactCtaProps {
  children: React.ReactNode;
  className?: string;
}

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "/#contact");
    return true;
  }
  return false;
}

export default function ContactCta({
  children,
  className = "",
}: ContactCtaProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      scrollToContact();
      return;
    }

    // Navigate home first
    router.push("/");

    // Wait for page to render, then poll for #contact
    setTimeout(() => {
      let attempts = 0;
      const maxAttempts = 100;
      const interval = setInterval(() => {
        attempts++;
        if (scrollToContact() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 50);
    }, 100);
  };

  return (
    <a href="/#contact" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
