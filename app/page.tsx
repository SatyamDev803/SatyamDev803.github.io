"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  education,
  experience,
  hackathons,
  highlights,
  links,
  profile,
  projects,
  skillGroups,
} from "@/lib/content";

const SECTIONS = ["intro", "work", "projects", "hackathons", "education", "connect"] as const;

const chip =
  "px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300";

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    sectionsRef.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const register = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block" aria-label="Sections">
        <div className="flex flex-col gap-4">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Intro */}
        <header
          id="intro"
          ref={register(0)}
          className="min-h-screen flex items-start sm:items-center pt-28 pb-16 sm:py-0 opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                {profile.firstName}
                <br />
                <span className="text-muted-foreground">{profile.lastName}</span>
              </h1>
              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-foreground">{profile.title}.</span> {profile.tagline}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                    {profile.availability}
                  </div>
                  <div>{profile.location}</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-end gap-4 mt-4 lg:mt-0">
              {highlights.map((h) => (
                <div key={h.label} className="p-4 border border-border rounded-lg">
                  <div className="text-2xl sm:text-3xl font-light">{h.value}</div>
                  <div className="text-sm text-muted-foreground">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Experience */}
        <section id="work" ref={register(1)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
            {experience.map((role) => (
              <div key={role.company} className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium">{role.title}</h3>
                    <div className="text-muted-foreground">{role.company}</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono sm:text-right">
                    <div>{role.period}</div>
                    <div>{role.location}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{role.summary}</p>
                {role.clients.map((c) => (
                  <div key={c.client} className="space-y-4">
                    <div className="text-sm font-mono text-muted-foreground">Client: {c.client}</div>
                    <ul className="space-y-3">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-2.5 w-1 h-1 shrink-0 rounded-full bg-muted-foreground" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" ref={register(2)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">{p.title}</h3>
                      <div className="text-sm text-muted-foreground">{p.tagline}</div>
                    </div>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-1"
                      aria-label={`${p.title} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs border border-border rounded-full bg-muted/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hackathons */}
        <section id="hackathons" ref={register(3)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl font-light">Hackathons</h2>
            <ul className="divide-y divide-border border-y border-border">
              {hackathons.map((h) => (
                <li key={h.event} className="py-5 grid sm:grid-cols-3 gap-1 sm:gap-6">
                  <div className="font-medium">{h.event}</div>
                  <div className="text-muted-foreground">
                    {h.url ? (
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        {h.project}
                      </a>
                    ) : (
                      h.project
                    )}
                  </div>
                  <div className="text-muted-foreground">{h.result}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education and skills */}
        <section id="education" ref={register(4)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light">Education</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">{education.degree}</h3>
                <div className="text-muted-foreground">{education.school}</div>
                <div className="text-sm text-muted-foreground font-mono">{education.period}</div>
                <div className="text-sm text-muted-foreground">{education.grade}</div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">Coursework</div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <span key={c} className={chip}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light">Skills</h2>
              {skillGroups.map((g) => (
                <div key={g.name} className="space-y-3">
                  <div className="text-sm text-muted-foreground font-mono">{g.name}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span key={s} className={chip}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="connect" ref={register(5)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s talk</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{profile.availability}.</p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-block text-base sm:text-lg break-all hover:text-muted-foreground transition-colors duration-300"
              >
                {profile.email}
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  <div>{l.name}</div>
                  <div className="text-sm text-muted-foreground">{l.handle}</div>
                </a>
              ))}
              <Link
                href="/blog/"
                className="p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div>Writing</div>
                <div className="text-sm text-muted-foreground">Notes on what I build</div>
              </Link>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Satyam Sharma</div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors duration-300"
              aria-label="Toggle light and dark theme"
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
