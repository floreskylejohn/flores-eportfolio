import { useState } from 'react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy text-white shadow">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <a href="#home" className="font-display font-bold">{profile.name.split(' ')[0]} {profile.name.split(' ').slice(-1)}</a>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}
          className="rounded p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden">
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="py-1 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">{n}</a>)}
        </nav>
      </div>
      <nav className={`grid overflow-hidden bg-navy px-5 transition-all duration-300 md:hidden ${open ? 'max-h-80 pb-4' : 'max-h-0'}`}>
        {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="border-t border-white/10 py-3">{n}</a>)}
      </nav>
    </header>
  )
}
