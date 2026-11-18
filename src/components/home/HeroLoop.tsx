"use client";

import { useEffect, useRef } from "react";

/** A silent looping clip. React doesn't put `muted` in the server HTML, so
 *  browsers refuse to autoplay it; set it here and start playback ourselves,
 *  and only while the clip is on screen. */
export function HeroLoop({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-hidden="true" />;
}
