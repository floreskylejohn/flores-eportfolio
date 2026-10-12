import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [show, setShow] = useState(false)
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-navy/15 bg-white">
      <div className="flex h-32 items-end bg-navy p-4 text-gold">
        <span className="font-display text-sm font-semibold">{project.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-navy">{project.title}</h3>
        <p className="mt-1 text-sm text-ink/80">{project.short}</p>
        {show && <p className="mt-3 rounded bg-paper p-3 text-sm">{project.detail}</p>}
        <button onClick={() => setShow(!show)} aria-expanded={show}
          className="mt-auto self-start pt-4 font-semibold text-berry underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-berry">
          {show ? 'Hide details' : 'View details'}
        </button>
      </div>
    </article>
  )
}
