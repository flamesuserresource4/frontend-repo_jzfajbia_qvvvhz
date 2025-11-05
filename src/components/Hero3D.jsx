import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero3D({ onPrimary, onSecondary }) {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="relative h-[420px] sm:h-[520px]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Soft gradient edges to improve contrast for text */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-4xl px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live communities happening now
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
                Build and join modern communities
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/80">
                Host events, run meetings, and unlock members-only perks — all in one playful and powerful hub.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onPrimary}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-white shadow hover:bg-indigo-600"
                >
                  <Rocket className="h-4 w-4" /> Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onSecondary}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white backdrop-blur hover:bg-white/20"
                >
                  <Play className="h-4 w-4" /> Explore events
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
