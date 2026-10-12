import Navbar from './components/Navbar'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import SkillChecklist from './components/SkillChecklist'
import ContactForm from './components/ContactForm'
import { profile, skills, strengths, projects, education, experience } from './data'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* HOME */}
        <section id="home" className="bg-navy text-white">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-14 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-gold">Welcome to my e-portfolio</p>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl">Hi, I'm {profile.name}.</h1>
              <p className="mt-4 max-w-prose text-lg text-white/85">
                I'm a {profile.role} at {profile.school}. I'm motivated and responsible, and I want to apply my skills in web development, database management, system design, and research while gaining practical experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="rounded bg-gold px-5 py-3 font-semibold text-navy hover:brightness-110">See my projects</a>
                <a href="/Flores_Resume.jpg" download className="rounded border border-white/60 px-5 py-3 font-semibold hover:bg-white/10">Download CV</a>
              </div>
            </div>
            <img src="/kyle.jpg" alt="Kyle John B. Flores in a suit" className="mx-auto h-56 w-56 rounded-lg border-4 border-gold object-cover object-top md:h-72 md:w-72" />
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About me">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p>
                I'm a 3rd year BSIT student at Cavite State University – Tanza Campus, from Kawit, Cavite. I like building simple web pages, planning systems, and learning how databases keep information organized.
              </p>
              <h3 className="text-lg font-bold text-navy">Interests</h3>
              <p>Web development, database management, system design, UI/UX, and research.</p>
              <h3 className="text-lg font-bold text-navy">Strengths</h3>
              <ul className="flex flex-wrap gap-2">
                {strengths.map((s) => <li key={s} className="rounded-full border border-berry/40 px-3 py-1 text-sm">{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-navy">Skills checklist</h3>
              <SkillChecklist items={skills} />
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <div className="bg-white/60">
          <Section id="projects" title="Projects and work samples">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
            </div>
          </Section>
        </div>

        {/* RESUME */}
        <Section id="resume" title="Resume">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-bold text-navy">Education</h3>
              {education.map((e) => (
                <div key={e.school} className="mb-4"><p className="font-semibold">{e.school}</p><p className="text-sm">{e.detail}</p></div>
              ))}
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-navy">Experience</h3>
              {experience.map((e) => (
                <div key={e.title} className="mb-4"><p className="font-semibold">{e.title}</p><p className="text-sm">{e.detail}</p></div>
              ))}
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-navy">Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <a href="/Flores_Resume.jpg" download className="mt-8 inline-block rounded bg-navy px-5 py-3 font-semibold text-white hover:bg-navy/90">Download CV</a>
        </Section>

        {/* CONTACT */}
        <div className="bg-white/60">
          <Section id="contact" title="Contact">
            <div className="grid gap-8 md:grid-cols-2">
              <ul className="space-y-3">
                <li><span className="font-semibold">Email: </span><a className="text-berry underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li><span className="font-semibold">Phone: </span><a className="text-berry underline" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
                <li><span className="font-semibold">Address: </span>{profile.address}</li>
              </ul>
              <ContactForm />
            </div>
          </Section>
        </div>
      </main>
      <footer className="bg-navy py-6 text-center text-sm text-white/80">© 2026 {profile.name}</footer>
    </>
  )
}
