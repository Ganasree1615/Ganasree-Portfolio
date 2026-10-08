import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photo from '../assets/about/Ganasree.jpeg';
import reel from '../data/introReel.json';
import { personalInfo, heroContent } from '../data/portfolioData';

const lines = reel.lines;
const speechEnd = lines[lines.length - 1].end;

// Split a caption into words and work out when each one is spoken,
// weighting by word length so the highlight follows the voice.
const wordTimings = (line) => {
  const words = line.text.split(' ');
  const total = words.reduce((n, w) => n + w.length + 1, 0);
  let acc = 0;
  return words.map((word) => {
    const from = line.start + ((line.end - line.start) * acc) / total;
    acc += word.length + 1;
    return { word, from };
  });
};

const Icon = ({ d }) => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} />
  </svg>
);
const PLAY = 'M8 5v14l11-7z';
const PAUSE = 'M6 5h4v14H6zm8 0h4v14h-4z';
const REPLAY = 'M12 5V1L7 6l5 5V7a6 6 0 11-6 6H4a8 8 0 108-8z';
const VOLUME = 'M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.5 4.5 0 0016.5 12z';
const MUTED = 'M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0a6.9 6.9 0 01-.57 2.77l1.5 1.5A8.9 8.9 0 0021 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z';

const IntroReel = ({ onClose }) => {
  const audioRef = useRef(null);
  const closeRef = useRef(null);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [run, setRun] = useState(0);

  const duration = speechEnd + 0.6;

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.ended) audio.currentTime = 0;
    setEnded(false);
    audio.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  // Start as soon as the reel opens (the click that opened it allows audio).
  useEffect(() => {
    play();
    closeRef.current?.focus();
    const audio = audioRef.current;
    return () => audio?.pause();
  }, [play]);

  // Smooth clock driven by the audio, so captions stay in sync with the voice.
  useEffect(() => {
    if (!playing) return;
    let raf;
    const tick = () => {
      if (audioRef.current) setTime(audioRef.current.currentTime);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  // Esc closes, and the page behind stops scrolling while the reel is open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const activeIndex = lines.findIndex((l) => time >= l.start - 0.05 && time < l.end + 0.5);
  const active = activeIndex >= 0 ? lines[activeIndex] : null;
  const speaking = playing && active && time <= active.end;
  const progress = Math.min(time / duration, 1);

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const t = ((e.clientX - rect.left) / rect.width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(t, audioRef.current.duration || t);
      setTime(audioRef.current.currentTime);
      setEnded(false);
    }
  };

  const goTo = () => onClose();

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${personalInfo.name} — introduction video`}
      className="fixed inset-0 z-[100001] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <audio
        ref={audioRef}
        src={reel.audio}
        preload="auto"
        muted={muted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setEnded(true);
          setTime(duration);
        }}
      />

      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 10 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[88vh] md:h-auto md:aspect-video bg-[#0b0b0b] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(165,216,255,0.25)]"
      >
        {/* Light-blue glow behind her */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(165,216,255,0.55),transparent_55%)]" />
        <motion.div
          className="absolute right-[6%] top-[12%] w-[44%] aspect-square rounded-full border border-[#a5d8ff]/60 hidden md:block"
          animate={speaking ? { scale: [1, 1.18], opacity: [0.7, 0] } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.6, repeat: speaking ? Infinity : 0, ease: 'easeOut' }}
        />

        {/* Her photo: slow cinematic push-in plus a gentle "breathing" float */}
        <div
          className="absolute inset-0 md:left-auto md:right-0 md:w-[56%] overflow-hidden"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 28%)', maskImage: 'linear-gradient(to right, transparent 0%, #000 28%)' }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.img
              key={run}
              src={photo}
              alt={`${personalInfo.name}, ${personalInfo.title}`}
              className="w-full h-full object-cover object-[center_15%]"
              initial={{ scale: 1.02, x: 0 }}
              animate={{ scale: 1.14, x: -14 }}
              transition={{ duration: duration + 4, ease: 'linear' }}
            />
          </motion.div>
        </div>
        {/* Readability gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-gradient-to-r md:from-black md:via-black/30 md:to-transparent pointer-events-none" />

        {/* Channel-style tag, top left */}
        <div className="absolute top-4 left-4 md:top-6 md:left-8 flex items-center gap-2 pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-[#a5d8ff] animate-pulse" />
          <span className="text-[10px] md:text-xs font-black tracking-[0.25em] uppercase text-white/80">
            {personalInfo.brandName} · Intro
          </span>
        </div>

        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close introduction video"
          className="absolute top-3 right-3 md:top-5 md:right-5 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/30 text-white flex items-center justify-center hover:bg-[#a5d8ff] hover:border-[#a5d8ff] hover:text-slate-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Lower-third name card */}
        <AnimatePresence>
          {time > 0.4 && time < 7 && (
            <motion.div
              key="lower-third"
              className="absolute left-4 md:left-8 top-16 md:top-1/4 flex items-stretch"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-1.5 bg-[#a5d8ff] rounded-full mr-4" />
              <div>
                <p className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">{personalInfo.name}</p>
                <p className="mt-2 text-sm md:text-lg font-bold text-[#a5d8ff] uppercase tracking-[0.2em]">{personalInfo.title}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chips, voice bars and live captions share one column so they never overlap */}
        <div className="absolute left-4 right-4 md:left-8 md:right-auto md:w-[52%] bottom-16 md:bottom-[4.5rem] flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 min-h-[28px]">
            {speaking && (
              <div className="flex items-end gap-1 h-6 mr-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 bg-[#a5d8ff] rounded-full origin-bottom h-full"
                    animate={{ scaleY: [0.25, 1, 0.4, 0.85, 0.3] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            )}
            {active && time > 6 &&
              active.tags?.map((tag, i) => (
                <motion.span
                  key={`${activeIndex}-${tag}`}
                  initial={{ opacity: 0, y: 14, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.18, duration: 0.4 }}
                  className="px-3 py-1 rounded-full bg-[#a5d8ff] text-slate-900 text-[11px] md:text-xs font-black uppercase tracking-wider shadow-lg"
                >
                  {tag}
                </motion.span>
              ))}
          </div>
          <p className="text-lg md:text-[22px] font-extrabold leading-snug text-white min-h-[4.5rem] md:min-h-[5.5rem]">
            {active &&
              wordTimings(active).map(({ word, from }, i) => (
                <span
                  key={`${activeIndex}-${i}`}
                  className={`inline-block mr-[0.28em] transition-colors duration-200 ${time >= from ? 'text-white' : 'text-white/30'}`}
                >
                  {word}
                </span>
              ))}
          </p>
        </div>

        {/* End card */}
        <AnimatePresence>
          {ended && (
            <motion.div
              className="absolute inset-0 z-10 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center text-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-3xl md:text-5xl font-black text-white">Thanks for watching!</p>
              <p className="mt-2 text-white/70 font-semibold">Let's build something great together.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={heroContent.ctaPrimary.href} onClick={goTo} className="px-6 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition">
                  {heroContent.ctaPrimary.text}
                </a>
                <a href="#contact" onClick={goTo} className="px-6 py-2 rounded-full bg-[#a5d8ff] text-slate-900 font-bold hover:bg-sky-300 transition">
                  Contact Me
                </a>
                <button onClick={() => { setRun((r) => r + 1); play(); }} className="px-6 py-2 rounded-full border border-white/60 text-white font-bold hover:bg-white hover:text-black transition inline-flex items-center gap-2">
                  <Icon d={REPLAY} /> Replay
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-8 pb-3 md:pb-4 pt-6 bg-gradient-to-t from-black/90 to-transparent">
          <div
            className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer group"
            onClick={seek}
            role="progressbar"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div className="h-full bg-[#a5d8ff] rounded-full relative" style={{ width: `${progress * 100}%` }}>
              <span className="absolute -right-1.5 -top-1 w-3.5 h-3.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-3 text-white">
            <button onClick={playing ? pause : play} aria-label={playing ? 'Pause' : 'Play'} className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center transition">
              <Icon d={playing ? PAUSE : PLAY} />
            </button>
            <button onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'} className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center transition">
              <Icon d={muted ? MUTED : VOLUME} />
            </button>
            <span className="text-xs font-bold tabular-nums text-white/70">
              {Math.floor(time / 60)}:{String(Math.floor(time % 60)).padStart(2, '0')} / {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroReel;
