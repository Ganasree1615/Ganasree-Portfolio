#!/usr/bin/env python3
"""Builds the intro-reel voiceover from src/data/introReel.json (macOS only).

Edit the "lines" in that file, then run:  python3 scripts/generate-intro-voice.py
It writes public/intro/ganasree-intro.m4a and fills in each line's start/end
(in seconds) so the on-screen captions stay in sync with the voice.

To use a real recording instead, drop your own file at the "audio" path and
set each line's start/end by hand.
"""
import json
import subprocess
import tempfile
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "src" / "data" / "introReel.json"
LEAD_IN = 0.8   # silence before the first line (seconds)
GAP = 0.5       # silence between lines
TAIL = 0.6      # silence after the last line

cfg = json.loads(CONFIG.read_text())
out_audio = ROOT / "public" / cfg["audio"].lstrip("/")
out_audio.parent.mkdir(parents=True, exist_ok=True)

with tempfile.TemporaryDirectory() as tmp:
    tmp = Path(tmp)
    clips = []
    for i, line in enumerate(cfg["lines"]):
        aiff, wav = tmp / f"{i}.aiff", tmp / f"{i}.wav"
        subprocess.run(["say", "-v", cfg["voice"], "-r", str(cfg["rate"]), "-o", str(aiff), line["text"]], check=True)
        subprocess.run(["afconvert", "-f", "WAVE", "-d", "LEI16@24000", "-c", "1", str(aiff), str(wav)], check=True)
        clips.append(wav)

    joined = tmp / "all.wav"
    t = 0.0
    with wave.open(str(joined), "wb") as out:
        out.setnchannels(1)
        out.setsampwidth(2)
        out.setframerate(24000)

        def silence(seconds):
            out.writeframes(b"\x00\x00" * int(24000 * seconds))

        silence(LEAD_IN)
        t = LEAD_IN
        for line, clip in zip(cfg["lines"], clips):
            with wave.open(str(clip), "rb") as w:
                frames = w.readframes(w.getnframes())
                dur = w.getnframes() / w.getframerate()
            out.writeframes(frames)
            line["start"], line["end"] = round(t, 2), round(t + dur, 2)
            t += dur
            silence(GAP)
            t += GAP
        silence(TAIL - GAP)

    subprocess.run(["afconvert", "-f", "m4af", "-d", "aac", str(joined), str(out_audio)], check=True)

CONFIG.write_text(json.dumps(cfg, indent=2, ensure_ascii=False) + "\n")
print(f"Wrote {out_audio} ({cfg['lines'][-1]['end']}s of speech)")
