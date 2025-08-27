import { motion } from 'framer-motion'

function WaveBar({ delay, height }) {
  return (
    <motion.div
      initial={{ scaleY: 0.4 }}
      animate={{ scaleY: [0.4, 1, 0.5, 0.9, 0.4] }}
      transition={{ repeat: Infinity, duration: 2.2, delay, ease: 'easeInOut' }}
      className="w-[6px] origin-bottom rounded-full bg-gradient-to-b from-emerald-400 via-sky-400 to-violet-400"
      style={{ height }}
    />
  )
}

export default function VoicePreview() {
  const bars = Array.from({ length: 24 }).map((_, i) => ({ i, h: 16 + Math.floor(Math.random() * 60) }))

  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-50 via-rose-50 to-sky-50" />
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-700">Voice note preview</p>
            <p className="mt-1 max-w-xl text-sm text-slate-600">Press and speak. Echo listens and reflects back themes, shifts, and what might matter most.</p>
          </div>
          <button className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">Start Journaling</button>
        </div>
        <div className="mt-6 flex h-28 items-center justify-center gap-1">
          {bars.map(({ i, h }) => (
            <WaveBar key={i} delay={i * 0.05} height={h} />
          ))}
        </div>
      </div>
    </section>
  )
}
