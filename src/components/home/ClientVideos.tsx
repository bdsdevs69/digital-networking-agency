"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { focal } from "@/lib/focal";
import s from "./home.module.css";

export type ClientVideo = {
  slug: string;
  first: string;
  name: string;
  image: string;
  roleLine: string;
  outlet: string;
  url: string;
  clip: { headline: string; date: string };
  /** [number, text] pairs, e.g. ["4", "years in Apple's President's Club"] */
  facts: [string, string][];
  video: {
    src: string;
    poster: string;
    /** WebVTT file; null when the captions are burned into the video */
    captions: string | null;
    /** running time shown on the card, e.g. "0:39" */
    length: string;
    portrait?: boolean;
    /** object-position for the poster crop on the card */
    focus?: string;
  };
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Play = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
);

/** One card per client video, all visible at once. Hover plays a silent
 *  preview; clicking opens the full video with the story beside it. */
export function ClientVideosView({ clients }: { clients: ClientVideo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  const track = useRef<HTMLDivElement>(null);

  // arrows only matter once there are more cards than fit
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const scrolls = !(edges.start && edges.end);

  return (
    <section className={`v-sec v-paper v-panel ${s.ks}`} id="clients" aria-labelledby="clients-title">
      <div className="v-wrap">
        <div className={s.cvHead}>
          <div className={s.ksHead}>
            <span className="v-label v-label--lime">In their words · Case studies</span>
            <h2 id="clients-title" className={s.ksTitle}>
              Hear it from <span className="v-hl">our clients.</span>
            </h2>
          </div>
          {scrolls && (
            <div className={s.cvNav}>
              <button type="button" onClick={() => nudge(-1)} disabled={edges.start} aria-label="Previous videos">
                <Arrow />
              </button>
              <button type="button" onClick={() => nudge(1)} disabled={edges.end} aria-label="More videos">
                <Arrow />
              </button>
            </div>
          )}
        </div>

        <div className={s.cvTrack} ref={track}>
          {clients.map((c, n) => (
            <VideoCard key={c.slug} c={c} onOpen={() => setOpen(n)} />
          ))}
        </div>
      </div>

      {open !== null && clients[open] && (
        <VideoModal c={clients[open]} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}

function VideoCard({ c, onOpen }: { c: ClientVideo; onOpen: () => void }) {
  const preview = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  // silent preview on hover, desktop only; nothing downloads until then
  const start = () => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const v = preview.current;
    if (!v) return;
    if (!v.src) v.src = c.video.src;
    v.currentTime = 0;
    v.play().then(() => setPreviewing(true)).catch(() => {});
  };
  const stop = () => {
    preview.current?.pause();
    setPreviewing(false);
  };

  return (
    <article className={s.cvCard} onMouseEnter={start} onMouseLeave={stop}>
      <button type="button" className={s.cvShot} onClick={onOpen} aria-label={`Play ${c.name}'s video review`}>
        <img src={c.video.poster} alt="" loading="lazy" style={{ objectPosition: c.video.focus ?? "50% 30%" }} />
        <video
          ref={preview}
          className={previewing ? s.cvPreviewOn : ""}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          style={{ objectPosition: c.video.focus ?? "50% 30%" }}
        />
        <span className={s.cvShade} aria-hidden="true" />
        <span className={s.cvLen}>
          <Play /> {c.video.length}
        </span>
        <span className={s.cvPlay} aria-hidden="true">
          <Play />
        </span>
        <span className={s.cvMeta}>
          <span className={s.cvOutlet}><i>Featured in</i><b>{c.outlet}</b></span>
          <strong>{c.name}</strong>
          <span>{c.roleLine}</span>
        </span>
      </button>
      <Link href={`/case-studies/${c.slug}`} className={s.cvCase}>
        <img src={c.image} alt="" loading="lazy" style={{ objectPosition: focal(c.image) }} />
        Read {c.first}&rsquo;s case study <Arrow />
      </Link>
    </article>
  );
}

function VideoModal({ c, onClose }: { c: ClientVideo; onClose: () => void }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const vid = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    d.showModal();
    vid.current?.play().catch(() => {});
    const onCancel = (e: Event) => { e.preventDefault(); onClose(); };
    d.addEventListener("cancel", onCancel);
    return () => d.removeEventListener("cancel", onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={dlg}
      className={s.cvModal}
      aria-label={`${c.name} on working with DNA`}
      onClick={(e) => { if (e.target === dlg.current) onClose(); }}
    >
      <div className={s.cvModalBox}>
        <button type="button" className={s.cvClose} onClick={onClose} aria-label="Close video">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>

        <div className={`${s.cvModalStage} ${c.video.portrait ? s.cvModalTall : ""}`}>
          <img className={s.cvBackdrop} src={c.video.poster} alt="" aria-hidden="true" />
          <video ref={vid} src={c.video.src} poster={c.video.poster} controls playsInline>
            {c.video.captions && (
              <track default kind="subtitles" srcLang="en" label="English" src={c.video.captions} />
            )}
          </video>
        </div>

        <article className={`${s.ksCard} ${s.cvModalCard}`}>
          <div className={s.ksWho}>
            <img src={c.image} alt={c.name} loading="lazy" style={{ objectPosition: focal(c.image) }} />
            <span>
              <strong>{c.name}</strong>
              {c.roleLine}
            </span>
          </div>

          {(() => {
            const inner = (
              <>
                <span className={s.ksClipTop}>
                  <span className={s.ksMast}>{c.outlet}</span>
                  <span>{c.clip.date}</span>
                </span>
                <span className={s.ksClipHead}>{c.clip.headline}</span>
                {c.url && (
                  <span className={s.ksClipGo}>
                    Read it live <i aria-hidden="true">↗</i>
                  </span>
                )}
              </>
            );
            return c.url ? (
              <a className={s.ksClip} href={c.url} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <div className={`${s.ksClip} ${s.ksClipStatic}`}>{inner}</div>
            );
          })()}

          <ul className={s.ksFacts}>
            {c.facts.map(([b, t]) => (
              <li key={t}><b>{b}</b> {t}</li>
            ))}
          </ul>

          <Link href={`/case-studies/${c.slug}`} className={s.ksMore}>
            Read {c.first}&rsquo;s case study <Arrow />
          </Link>
        </article>
      </div>
    </dialog>
  );
}
