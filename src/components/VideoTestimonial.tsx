"use client";

import { useRef, useState } from "react";
import styles from "./VideoTestimonial.module.css";

// Playback is capped so only the first 28 seconds play (up to "the global
// stage"), without needing to re-encode the source file.
const MAX_SECONDS = 28;

const VIDEO_SRC = "/client-testimonial.mp4";
const POSTER_SRC = "/testimonial-poster.webp";
const CAPTIONS_SRC = "/client-testimonial.vtt";

export function VideoTestimonial() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  }

  function onTimeUpdate() {
    const v = videoRef.current;
    if (v && v.currentTime >= MAX_SECONDS) {
      v.pause();
      v.currentTime = MAX_SECONDS;
      setPlaying(false);
    }
  }

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

        <div className={`${styles.player} ${playing ? styles.isPlaying : ""}`}>
          <video
            ref={videoRef}
            className={styles.video}
            poster={POSTER_SRC}
            playsInline
            controls={playing}
            onTimeUpdate={onTimeUpdate}
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            <track
              default
              kind="subtitles"
              srcLang="en"
              label="English"
              src={CAPTIONS_SRC}
            />
          </video>

          {!playing && (
            <button
              type="button"
              className={styles.playBtn}
              onClick={play}
              aria-label="Play client testimonial"
            >
              <span className={styles.playRing} aria-hidden="true" />
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
