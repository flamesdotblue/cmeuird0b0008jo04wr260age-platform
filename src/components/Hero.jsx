import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-32 left-1/2 h-96 w-[140vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-200 via-sky-200 to-violet-200 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/90 shadow-sm shadow-emerald-500/40 ring-2 ring-white/70 backdrop-blur" />
            <span className="text-3xl font-semibold tracking-tight" style={{ fontFamily: 'Caveat, ui-rounded, system-ui, sans-serif' }}>Echo</span>
          </div>
          <a href="#start" className="hidden sm:inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">Start Journaling</a>
        </div>

        <div className="mt-14 grid items-center gap-10 sm:mt-20 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl leading-tight sm:text-6xl sm:leading-[1.05]"
            >
              A calm place to hear yourself think.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg text-slate-600"
            >
              Echo is an AI journaling tool that turns your voice notes into clear reflections and gentle insights—so you can track emotional patterns without breaking your flow.
            </motion.p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a id="start" href="#" className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">Start Journaling</a>
              <span className="text-sm text-slate-500">No sign-up required to begin a voice entry.</span>
            </div>
          </div>

          <div className="sm:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md rounded-3xl border border-white/60 bg-white/60 p-6 shadow-xl backdrop-blur-md"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-50 via-sky-50 to-rose-50" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">Today’s Reflection</p>
                  <p className="mt-1 text-xs text-slate-500">Tap to record a voice note</p>
                </div>
                <button className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">Record</button>
              </div>
              <div className="mt-5 h-24 w-full rounded-xl bg-gradient-to-r from-emerald-100 via-rose-100 to-sky-100" />
              <p className="mt-4 text-sm text-slate-600">“Felt anxious in the morning, but clearer after a walk. Noticed a pattern with sleep.”</p>
              <p className="mt-1 text-xs text-slate-500">Echo highlights emotional shifts for you.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}
