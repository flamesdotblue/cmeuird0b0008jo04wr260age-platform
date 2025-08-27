import { BrainCircuit, Mic, Waveform, Shield } from 'lucide-react'

const items = [
  {
    icon: Mic,
    title: 'Voice-first journaling',
    desc: 'Capture thoughts in the moment. Echo transcribes with care and nuance.'
  },
  {
    icon: BrainCircuit,
    title: 'Gentle insights',
    desc: 'Spot emotional patterns over time—without judgment or noisy dashboards.'
  },
  {
    icon: Waveform,
    title: 'Daily rhythm',
    desc: 'Light prompts help you reflect and return, one small note at a time.'
  },
  {
    icon: Shield,
    title: 'Private by design',
    desc: 'Your entries stay yours. Secure, encrypted, and exportable anytime.'
  }
]

export default function Features() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -bottom-24 left-1/2 h-96 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-200 via-emerald-200 to-sky-200 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl">A journal that meets you where you are</h2>
        <p className="mt-3 text-slate-600">Designed to feel calm and effortless—so it’s easy to return, day after day.</p>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur-md transition hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-emerald-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
