export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-14">
      <h2 className="mb-6 border-l-4 border-gold pl-3 text-2xl font-extrabold text-navy md:text-3xl">{title}</h2>
      {children}
    </section>
  )
}
