import {
  Mail,
  Github,
  ExternalLink,
  FileText,
  GraduationCap,
  Phone,
} from "lucide-react"
import { CvNav } from "@/components/cv-nav"
import Image from "next/image"

export default function AcademicCV() {
  return (
    <>
      <CvNav />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          {/* Profile Header — 3.2 : 4 ratio */}
          <header
            id="profile"
            className="mb-12 grid grid-cols-1 items-center gap-8 scroll-mt-20 md:grid-cols-[3.2fr_4fr]"
          >
            <div className="aspect-square w-full overflow-hidden rounded-2xl border-2 border-border bg-muted">
              <Image
                src="/images/profile.png"   // public/images/profile.png 경로
                alt="Seokwon Choi"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
                unoptimized  // next export 시 필요
              />

            {/* <div className="aspect-square w-full overflow-hidden rounded-2xl border-2 border-border bg-muted">
              <img
                src="/seokwon_choi_profile/public/images/profile.png"
                alt="Seokwon Choi"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              /> */}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
                Seokwon Choi
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                Undergraduate, Yonsei University
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Quantum Computing &middot; Physics &middot; Quantum Algorithms
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
                <a
                  href="mailto:seokwon0106@yonsei.ac.kr"
                  className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="https://github.com/CS-Won"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://scholar.google.com/citations?user=yxBVdjkAAAAJ&hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GraduationCap className="h-4 w-4" />
                  Google Scholar
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  CV PDF
                </a>
              </div>
            </div>
          </header>

          <hr className="mb-12 border-border" />

          {/* 1. About Me */}
          <section id="about" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About Me
            </h2>
            <div className="space-y-4 leading-relaxed text-foreground">
              <p>
                I am an undergraduate student at Yonsei University pursuing a
                double major in Physics and Integrated Technology. My research
                interests lie in Quantum Computations, Quantum Error Mitigation,
                Quantum Error Correction, and Quantum Algorithms.
              </p>
              <p>
                I have hands-on experience building and benchmarking
                hardware-efficient ansatze on superconducting quantum processors,
                and I am passionate about bridging theoretical quantum physics
                with practical quantum computing applications.
              </p>
            </div>
          </section>

          <hr className="mb-12 border-border" />

          {/* 2. Education */}
          <section id="education" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Education
            </h2>
            <div className="relative border-l-2 border-border pl-6">
              <TimelineItem
                title="B.S. in Physics, B.S. in Integrated Technology"
                subtitle="Yonsei University"
                period="Feb 2021 — Present"
                description="GPA: 3.8/4.3 | Expected graduation: mid 2027"
                clubs={[
                  {
                    name: "Quantum Information at Yonsei Academy (QIYA)",
                    period: "2024 — Present",
                  },
                  {
                    name: "EUPHONIA Yonsei Amateur Orchestra (Viola)",
                    period: "2024 — Present",
                  },
                ]}
              />
              <TimelineItem
                title="EAP Exchange Student"
                subtitle="UC Santa Barbara"
                period="Fall 2025 — Present"
              />
            </div>
          </section>

          <hr className="mb-12 border-border" />

          {/* 3. Publications */}
          <section id="publications" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Publications
            </h2>
            <ol className="list-decimal space-y-5 pl-5 text-foreground marker:text-muted-foreground">
              <PublicationItem
                authors="S. Choi et al."
                title="Quantum utility-scale error mitigation for quantum quench dynamics in Heisenberg spin chains"
                venue="Physica Scripta"
                year="2026"
                note="1st Author"
                link="https://iopscience.iop.org/article/10.1088/1402-4896/ae37a8"
              />
            </ol>

            {/* <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Poster
            </h3>
            <ol className="list-decimal space-y-5 pl-5 text-foreground marker:text-muted-foreground">
              <PublicationItem
                authors="S. Choi"
                title="SSVQE: Quantum Eigensolver to Find k Excited States"
                venue="QISK"
                year="June 2025"
                link="#"
              />
            </ol> */}
          </section>

          <hr className="mb-12 border-border" />

          {/* 4. Research Experience */}
          <section id="experience" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Research Experience
            </h2>
            <div className="relative border-l-2 border-border pl-6">
              <TimelineItem
                title="Quantum Sensing and Imaging Lab — Prof. Ania Bleszynski Jayich"
                subtitle="UC Santa Barbara"
                period="Feb 2026 — Present"
                description="Hamiltonian simulation of NV dipole XXZ and other complex systems numerically."
              />
              <TimelineItem
                title="Quantum Computer Lab Intern — Prof. Chaeyon Park"
                subtitle="Yonsei University"
                period="Jan 2025 — Oct 2025"
                description="Built and benchmarked hardware-efficient ansatze for N-body Hamiltonian simulation on the IBM-Yonsei superconducting quantum processor, focusing on circuit optimization and fidelity performance."
              />
              <TimelineItem
                title="Institute of Quantum Technology Intern"
                subtitle="Yonsei University"
                period="Sep 2024 — Dec 2024"
                description="Quantum computing education assisting and simulation of quantum gate fidelity and qubit coherence times."
              />
              <TimelineItem
                title="KIAS Intern — Prof. Jaewan Kim"
                subtitle="Korea Institute for Advanced Study"
                period="Jul 2024 — Aug 2024"
                description="Theoretical and experimental research on quantum entanglement and quantum state tomography, trotterization."
              />
              <TimelineItem
                title="Solid State Spectroscopy Lab Intern — Prof. Jaehoon Kim"
                subtitle="Yonsei University"
                period="Dec 2021 — Feb 2022"
                description="Optical response of Quantum Topological Materials."
              />
            </div>
          </section>

          <hr className="mb-12 border-border" />

          {/* 5. Featured Projects */}
          <section id="projects" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Projects
            </h2>
            <div className="space-y-6">
              <ProjectItem
                title="Superconductor Tc Approximation through Quantum Neural Network"
                description="Project while visiting Brookhaven National Lab as student researcher."
                technologies={["Qiskit", "Python", "QNN"]}
                period="Jan 2025"
              />
              <ProjectItem
                title="SSVQE: Quantum Eigensolver to Find k Excited States"
                description="Implemented the SSVQE on IBM hardware and analyzed failure mechanisms caused by noise-induced breakdown of subspace orthogonality."
                technologies={["IBM Quantum", "Qiskit", "Python"]}
                period="Jun 2025"
              />
              <ProjectItem
                title="RL-Based Variational Ansatz Optimization"
                description="Developed reinforcement-learning-based variational ansatz optimization for the NTU-IBM Quantum 2025 Hackathon (2nd Prize)."
                technologies={["Python", "PyTorch", "Qiskit"]}
                period="Aug 2025"
              />
            </div>

            <h3 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Teaching Experience
            </h3>
            <div className="relative border-l-2 border-border pl-6">
              <TimelineItem
                title="Undergraduate Tutor — Quantum Mechanics I"
                subtitle="Yonsei University"
                period="Spring 2025"
                description="Led weekly problem-solving sessions using Griffiths."
              />
              <TimelineItem
                title="Instructor — Introduction to Quantum Computing (10-week)"
                subtitle="Online Curriculum"
                period="Winter 2024"
                description="Designed and taught undergraduate-level QC curriculum (qubits, gates, Shor's Algorithm, QML)."
              />
              <TimelineItem
                title="Qiskit Fall Festival 2024 in Yonsei — Organizer"
                subtitle="IBM Sponsored Event"
                period="Oct 2024"
                description="Delivered undergraduate-level quantum computing lectures."
              />
            </div>
          </section>

          <hr className="mb-12 border-border" />

          {/* 6. Technical Skills (Relevant Coursework) */}
          <section id="skills" className="mb-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Technical Skills
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <SkillGroup
                title="Physics"
                skills={[
                  "Mechanics I, II",
                  "Quantum Mechanics I, II",
                  "Electricity and Magnetism I, II",
                  "Quantum Informatics",
                  "Quantum Computations",
                  "Optical Lab",
                  "Physics Lab A-1, B-1",
                  "Intro to Quantum Computing (Grad)",
                  "Adv. Quantum Machine Learning (Grad)",
                ]}
              />
              <SkillGroup
                title="ML / AI"
                skills={[
                  "Machine Learning",
                  "Natural Lang. Processing and ChatGPT",
                  "Intro to Financial Eng.",
                  "Intro to Deep Learning and Application",
                  "Statistics",
                  "Linear Algebra",
                  "Advanced Calculus I, II",
                ]}
              />
              <SkillGroup
                title="Electrical Engineering"
                skills={[
                  "Electronic Circuits",
                  "Basic Circuit Theory",
                  "Digital Logic Circuits",
                  "Introductory Digital Labs",
                ]}
              />
            </div>
            <div className="mt-6 rounded-lg border border-border p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Software & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "C",
                  "Qiskit",
                  "VS Code",
                  "GitHub",
                  "Vim",
                  "LaTeX / Overleaf",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <hr className="mb-12 border-border" />

          {/* 7. Certifications & Badges */}
          <section id="certifications" className="mb-12 scroll-mt-20">
            <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Certifications & Badges
            </h2>
            <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-4">
              <CertificationCard
                title="Semiconductor Scholarship"
                issuer="Yonsei University"
                date="2024 — 2025"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="Honor"
                issuer="Yonsei Physics"
                date="2022"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="Tutoring Program — Quantum Dynamics Tutor"
                issuer="Yonsei University"
                date="Spring 2025"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="Online Tutoring — Quantum Computation Tutor"
                issuer="Yonsei University"
                date="Fall 2024"
                bgColor="rgb(16, 48, 110)"
              />
              <CertificationCard
                title="2024 Qiskit Fall Fest Mentor"
                issuer="IBM"
                date=""
                bgColor="rgb(20, 47, 165)"
              />
              <CertificationCard
                title="Qiskit Global Summer School 2024 — Quantum Excellence"
                issuer="IBM"
                date=""
                bgColor="rgb(20, 47, 165)"
              />
              <CertificationCard
                title="NTU-IBM QC Hackathon 2nd Prize"
                issuer="NTU-IBM Quantum"
                date="Aug 2025"
                bgColor="rgb(20, 47, 165)"
              />
              <CertificationCard
                title="ROK Army Signal Sergeant"
                issuer="1st Division, Paju"
                date="2022 — 2024"
                bgColor="rgb(88, 99, 77)"
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <div className="mb-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                +82-10-7311-2830 (KOR)
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                +1 (805) 259-0776 (US)
              </span>
            </div>
            <p>© 2026 Seokwon Choi. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  )
}

/* ── Sub-components ─────────────────────────────────────────────── */

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  clubs,
}: {
  title: string
  subtitle: string
  period: string
  description?: string
  clubs?: { name: string; period: string }[]
}) {
  return (
    <div className="relative mb-8 last:mb-0">
      <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">{period}</span>
      </div>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {clubs && clubs.length > 0 && (
        <div className="mt-3 space-y-2">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="flex items-center justify-between gap-3 rounded border border-border bg-secondary/50 px-3 py-2"
            >
              <span className="text-sm text-foreground">{club.name}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {club.period}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function PublicationItem({
  authors,
  title,
  venue,
  year,
  note,
  link,
}: {
  authors: string
  title: string
  venue: string
  year: string
  note?: string
  link: string
}) {
  return (
    <li className="leading-relaxed">
      <span className="text-muted-foreground">{authors}</span>{" "}
      <a
        href={link}
        className="font-medium text-foreground transition-colors hover:text-accent"
      >
        &ldquo;{title}&rdquo;
        <ExternalLink className="ml-1 inline-block h-3 w-3 opacity-40" />
      </a>{" "}
      <span className="text-sm italic text-muted-foreground">{venue}</span>,{" "}
      <span className="text-sm text-muted-foreground">{year}.</span>
      {note && (
        <span className="ml-1 rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground">
          {note}
        </span>
      )}
    </li>
  )
}

function ProjectItem({
  title,
  description,
  technologies,
  period,
}: {
  title: string
  description: string
  technologies: string[]
  period: string
}) {
  return (
    <div className="group">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="font-medium text-foreground">{title}</h3>
        <span className="shrink-0 text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

function CertificationCard({
  title,
  issuer,
  date,
  bgColor,
}: {
  title: string
  issuer: string
  date: string
  bgColor: string
}) {
  return (
    <div className="flex w-full max-w-[160px] flex-col items-center text-center">
      <div
        className="mb-3 flex h-24 w-full items-center justify-center rounded-lg px-2"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-[11px] font-medium leading-tight text-white text-center">
          {title}
        </span>
      </div>
      <p className="text-xs font-medium leading-tight text-foreground">
        {issuer}
      </p>
      {date && <p className="mt-0.5 text-[11px] text-muted-foreground">{date}</p>}
    </div>
  )
}
