"use client";

import { useRef, useState } from "react";
import styles from "./VideoTestimonial.module.css";


const VIDEO_SRC = "/client-testimonial.mp4";
const POSTER_SRC = "/testimonial-poster.webp";
const CAPTIONS_SRC = "/client-testimonial.vtt";

type PlayerProps = {
  className?: string;
  src?: string;
  poster?: string;
  /** WebVTT file; omit when the captions are burned into the video. */
  captions?: string | null;
  /** stop playback here; 0 (default) = play the whole file */
  maxSeconds?: number;
  label?: string;
};

/** The capped video player on its own, so other sections can place it. */
export function VideoPlayer({
  className = "",
  src = VIDEO_SRC,
  poster = POSTER_SRC,
  captions = CAPTIONS_SRC,
  maxSeconds = 0,
  label = "Play client testimonial",
}: PlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Native controls stay once playback has started. Hiding them on every
  // `pause` broke scrubbing: Safari pauses while you drag the timeline, the
  // controls vanished mid-drag, and the video stayed paused.
  const [started, setStarted] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
    setStarted(true);
  }

  function onTimeUpdate() {
    const v = videoRef.current;
    if (v && maxSeconds > 0 && v.currentTime >= maxSeconds) {
      v.pause();
      v.currentTime = maxSeconds;
      setPlaying(false);
    }
  }

  return (
    <div className={`${styles.player} ${playing ? styles.isPlaying : ""} ${className}`}>
      <video
        ref={videoRef}
        className={styles.video}
        poster={poster}
        playsInline
        controls={started}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => { setPlaying(true); setStarted(true); }}
      >
        <source src={src} type="video/mp4" />
        {captions && (
          <track
            default
            kind="subtitles"
            srcLang="en"
            label="English"
            src={captions}
          />
        )}
      </video>

      {!playing && (
        <button
          type="button"
          className={styles.playBtn}
          onClick={play}
          aria-label={label}
        >
          <span className={styles.playRing} aria-hidden="true" />
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function VideoTestimonial() {
  return (
    <section className={styles.wrap} aria-label="Client video testimonial">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>In their words</span>
          <h2 className={styles.title}>
            See what our <em>clients</em> have to say
          </h2>
          <p className={styles.lede}>
            Don&rsquo;t take our word for it. Hear it straight from a founder
            we&rsquo;ve worked with about what it&rsquo;s like to get featured
            with DNA.
          </p>
          <p className={styles.attrib}>&mdash; Krishan Thakker</p>
        </div>

        <VideoPlayer />
      </div>
    </section>
  );
}
