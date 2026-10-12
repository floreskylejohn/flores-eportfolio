import { useState } from 'react'

export default function SkillChecklist({ items }) {
  const [done, setDone] = useState([])
  const toggle = (s) => setDone((d) => (d.includes(s) ? d.filter((x) => x !== s) : [...d, s]))
  return (
    <div className="rounded-lg border border-navy/15 bg-white p-5">
      <p className="mb-3 text-sm text-ink/70">Tap a skill to check it off. {done.length} of {items.length} checked.</p>
      <ul className="space-y-2">
        {items.map((s) => (
          <li key={s}>
            <label className="flex cursor-pointer items-center gap-3">
              <input type="checkbox" checked={done.includes(s)} onChange={() => toggle(s)} className="h-5 w-5 accent-berry" />
              <span className={done.includes(s) ? 'text-ink/50 line-through' : ''}>{s}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
