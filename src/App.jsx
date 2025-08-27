import { useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import VoicePreview from './components/VoicePreview'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const id = 'echo-font-caveat'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap'
      document.head.appendChild(link)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-800 selection:bg-emerald-200/60">
      <Hero />
      <main>
        <VoicePreview />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
