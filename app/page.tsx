"use client"

import React, { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "education", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              aria-label={`Maps to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section 1: Intro */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-start sm:items-center pt-32 pb-16 sm:py-0 opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Satyam
                  <br />
                  <span className="text-muted-foreground">Sharma</span>
                </h1>
              </div>
              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software Engineer (AI & Backend) building intelligent, data-driven application through
                  <span className="text-foreground"> AI</span>,<span className="text-foreground"> ML</span>,
                  and
                  <span className="text-foreground"> scalable backend systems</span>.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Mumbai, India</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "TypeScript", "Java", "SQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground font-mono">ML and AI</div>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "Keras", "scikit-learn", "LangChain", "RAG", "LLM", "Optuna", "Pandas", "Plotly"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground font-mono">Backend</div>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "Django", "SQLAlchemy", "Alembic", "WebSockets", "JWT"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground font-mono">Database</div>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "SQLite", "Redis"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground font-mono">DevOps</div>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Nginx", "Gunicorn", "AWS (EC2, S3)", "GitHub Actions (CI/CD)", "Linux"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground font-mono">Frontend</div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section 2: Experience */}
        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="py-20 sm-py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              {/* <div className="text-sm text-muted-foreground font-mono">2024 — 2025</div> */}
            </div>
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "Dec 24 - May 25",
                  role: "ML Engineer",
                  company: "Kredit (Startup)",
                  description: [
                    "Designed an AI-driven credit scoring system for gig economy workers, improving loan accessibility through automated, data-driven assessment.",
                    "Improved the core credit model's predictive accuracy by 40% (R2) by leveraging feature engineering and data preprocessing pipelines.",
                  ],
                  tech: ["TensorFlow", "Keras", "Python", "scikit-learn", "Neural Networks"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>
                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <div className="space-y-2">
                      {job.description.map((line, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed max-w-lg">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Education */}
        <section
          id="education"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Education</h2>
              {/* <div className="text-sm text-muted-foreground font-mono">2021 — 2024</div> */}
            </div>
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  degree: "Bachelor of Science in Computer Science",
                  college: "University of Mumbai",
                  duration: "Jun 2021 – May 2024",
                  location: "Mumbai, India",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground">
                      {edu.duration}
                    </div>
                  </div>
                  <div className="lg:col-span-10 space-y-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{edu.degree}</h3>
                      <div className="text-muted-foreground">{edu.college}</div>
                      <div className="text-sm text-muted-foreground">{edu.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Projects */}
        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
            <div className="grid gap-8 sm:gap-10">
              {[
                {
                  title: "Nexa — DeFi Yield Aggregator",
                  description: [
                    "Nexa is a full-stack decentralized application that aggregates yield across multiple blockchains.",
                    "I built a scalable backend using Node.js and Express.js, integrated financial APIs (DefiLlama, 1Click Intents), and designed a responsive frontend with Next.js and TailwindCSS.",
                    "The platform dynamically ranks yield strategies and supports real-time cross-chain transactions via the NEAR Wallet Selector.",
                  ],
                  tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "NEAR Protocol", "TailwindCSS"],
                  liveUrl: "https://nexa-three-eta.vercel.app/",
                  githubUrl: "https://github.com/SatyamDev803/Nexa",
                },
                {
                  title: "CogniCart — AI E-Commerce Analytics Platform",
                  description: [
                    "CogniCart transforms e-commerce data into actionable insights using AI.",
                    "I developed a high-performance FastAPI backend, containerized with Docker, and built a responsive analytics dashboard with Next.js.",
                    "The platform features an AI sales assistant powered by a Retrieval-Augmented Generation (RAG) pipeline, enabling natural-language queries over sales data for real-time business intelligence.",
                  ],
                  tech: ["FastAPI", "Next.js", "SQLAlchemy", "Pydantic", "Docker", "RAG", "LLMs"],
                  liveUrl: null,
                  githubUrl: "https://github.com/SatyamDev803/cognicart",
                },
                {
                  title: "CryptexAI — Cryptocurrency Price Prediction Platform",
                  description: [
                    "CryptexAI predicts cryptocurrency price trends using deep learning models like LSTM, GRU, and Transformers.",
                    "I architected both the backend (FastAPI serving ML inferences) and a live React dashboard visualizing data streams via WebSockets.",
                    "Automated hyperparameter tuning with Optuna improved model performance, and the entire system was deployed as a scalable, containerized service.",
                  ],
                  tech: ["FastAPI", "React", "TensorFlow", "Optuna", "Docker", "WebSockets"],
                  liveUrl: null,
                  githubUrl: "https://github.com/SatyamDev803/CryptexAI",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="lg:col-span-12 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <h3 className="text-lg sm:text-xl font-medium text-foreground">{project.title}</h3>
                      <div className="flex items-center gap-4 mt-2 sm:mt-0 flex-shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Live Website"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="hidden sm:inline">Live</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="GitHub Repository"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                            <span className="hidden sm:inline">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {project.description.map((line, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs border border-border rounded-full bg-muted/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Connect */}
        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s Connect</h2>
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and AI.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:sharmasatyam1603@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">sharmasatyam1603@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@SatyamDev803", url: "https://github.com/SatyamDev803" },
                  { name: "LinkedIn", handle: "satyam sharma", url: "https://www.linkedin.com/in/satyam-sharma-6296781b2/" },
                  { name: "X.com", handle: "@Satyam_S1603", url: "https://x.com/Satyam_S1603" },
                  { name: "WhatsApp", handle: "+91 99679 37003", url: "https://wa.me/qr/EIWX2YEPRLNTK1" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Satyam Sharma. All rights reserved.</div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}

