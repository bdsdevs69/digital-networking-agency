"use client";

import { usePathname } from "next/navigation";
import { FunkyCta } from "./FunkyCta";

/** One floating button, bottom-right on every page: straight to the form. */
export function FloatingContact() {
  const path = usePathname();
  return <FunkyCta href={path === "/contact" ? "/contact#request" : "/contact"} label="Get featured" className="v-cta--float" />;
}
