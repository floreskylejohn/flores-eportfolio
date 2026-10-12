import { useState } from 'react'
import { profile } from '../data'

export default function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const change = (e) => { setF({ ...f, [e.target.name]: e.target.value }); setSent(false) }

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!f.name.trim()) err.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Enter a valid email address.'
    if (f.message.trim().length < 10) err.message = 'Write at least 10 characters.'
    setErrors(err)
    if (Object.keys(err).length) return
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${body}`
    setSent(true)
    setF({ name: '', email: '', message: '' })
  }

  const field = 'w-full rounded border bg-white p-3 focus:outline-none focus:ring-2 focus:ring-gold'
  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-lg border border-navy/15 bg-white p-5">
      {[['name', 'Name'], ['email', 'Email']].map(([k, l]) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1 block font-semibold">{l}</label>
          <input id={k} name={k} value={f[k]} onChange={change} className={`${field} ${errors[k] ? 'border-red-600' : 'border-navy/20'}`} />
          {errors[k] && <p className="mt-1 text-sm text-red-700">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-1 block font-semibold">Message</label>
        <textarea id="message" name="message" rows="4" value={f.message} onChange={change} className={`${field} ${errors.message ? 'border-red-600' : 'border-navy/20'}`} />
        {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
      </div>
      <button className="rounded bg-berry px-5 py-3 font-semibold text-white transition hover:bg-berry/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry">Send message</button>
      {sent && <p className="text-green-800">Message ready. Your email app should open to send it.</p>}
    </form>
  )
}
