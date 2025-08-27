export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-emerald-500/90 ring-2 ring-white/70" />
          <span className="text-2xl" style={{ fontFamily: 'Caveat, ui-rounded, system-ui, sans-serif' }}>Echo</span>
        </div>
        <p className="text-sm text-slate-500">Made with care for your quiet moments. © {new Date().getFullYear()} Echo</p>
      </div>
    </footer>
  )
}
