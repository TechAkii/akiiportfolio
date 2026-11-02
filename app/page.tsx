"use client";

import dynamic from "next/dynamic";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Command,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Send,
  Terminal,
  X
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Projects from "@/components/Projects";

const EnergyCore = dynamic(() => import("@/components/three/energy-core"), {
  ssr: false,
  loading: () => (
    <div className="scene-fallback" aria-label="Loading 3D visual">
      <div className="fallback-orbit"><div className="fallback-core" /></div>
    </div>
  )
});

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Journey", "#journey"],
  ["Contact", "#contact"]
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "AKILA OS [Version 1.0.0]",
    "Type 'help' to explore the interface."
  ]);
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactError, setContactError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "journey", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const commandOutput = useMemo<Record<string, string>>(
    () => ({
      help: "Available commands: about, projects, skills, github, contact, clear",
      about: `${profile.name} — ${profile.title}; ${profile.education} at ${profile.mainuniversity}.`,
      projects: projects.map((project) => `${project.name} — ${project.category}`).join(" | "),
      skills: skills.map((group) => `${group.category}: ${group.items.join(", ")}`).join(" | "),
      github: `GitHub profile: ${profile.github}`,
      contact: "Scroll to the contact section to prepare a message.",
      whoami: "visitor@akila — curious by nature, engineered to build.",
      clear: ""
    }),
    []
  );

  function runCommand(raw: string) {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setTerminalLines([]);
      setTerminalInput("");
      return;
    }
    const output = commandOutput[command];
    setTerminalLines((old) => [
      ...old,
      `visitor@akila:~$ ${raw}`,
      output ?? `Command not found: ${command}. Type 'help'.`
    ]);
    setTerminalInput("");
    if (command === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    if (command === "github") {
      window.open(profile.github, "_blank", "noopener,noreferrer");
    }
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactError("");
    if (!contact.name.trim() || !contact.email.includes("@") || !contact.message.trim()) {
      setContactError("Enter your name, a valid email address, and a message.");
      return;
    }
    const subject = encodeURIComponent(contact.subject.trim() || `Portfolio enquiry from ${contact.name}`);
    const body = encodeURIComponent(
      `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Akila home">
          <span className="brand-mark">A</span>
          <span className="brand-name">AKILA<span className="brand-slash">/</span>DIGITAL FRONTIER</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              className={activeSection === href.slice(1) ? "nav-link active" : "nav-link"}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">LET&apos;S TALK <ArrowUpRight size={14} /></a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <div id="main-content">
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> DIGITAL FRONTIER <span className="eyebrow-divider">/</span> PORTFOLIO 001</div>
            <h1 className="hero-title">AKI<span className="title-outline">LA</span><span className="title-period">.</span></h1>
            <div className="role-list">
              {profile.roles.map((role) => <span key={role}>{role}</span>)}
            </div>
            <p className="hero-statement">{profile.statement}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">EXPLORE PROJECTS <ArrowDownRight size={16} /></a>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> VIEW GITHUB <MoveUpRight size={14} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN {profile.location.toUpperCase()}</span><span>{profile.availability.toUpperCase()}</span></div>
          </div>
          
<div className="hero-visual hero-portrait-visual">
  <div className="portrait-glow" />
  <img
  className="akila-portrait"
  src="/akila-portrait.png"
  alt="Akila — software developer"
  onError={(event) => {
    console.error("Portrait failed to load:", event.currentTarget.src);
  }}
  onLoad={() => {
    console.log("Portrait loaded successfully");
  }}
/>
  <div className="visual-label visual-label-top">
    <span>FIG. 001</span>
    <span>AKILA / PORTRAIT</span>
  </div>
  <div className="visual-label visual-label-bottom">
    <span>PERSONAL PROFILE</span>
    <span>SOFTWARE / AI</span>
  </div>
</div>

          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
          <div className="hero-index"><span>01</span><span className="index-line" /><span>06</span></div>
        </section>

        <section className="section-shell about-section section" id="about">
          <div className="section-kicker"><span>01</span><span>IDENTITY / ABOUT</span></div>
          <div className="about-grid">
            <div className="section-heading">
              <p className="eyebrow">THE ENGINEERING MIND</p>
              <h2>Curious by nature.<br /><span>Engineered to build.</span></h2>
            </div>
            <div className="about-copy">
              <p className="lead">I&apos;m Akila Thikshana— an Applied Sciences undergraduate who enjoys turning analytical thinking into useful software.</p>
              <p>My interests span full-stack development, software architecture, AI systems, data, mathematics, and automation. I like understanding how systems work, then building practical tools that make them more useful.</p>
              <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.education}</strong><span>{profile.mainuniversity}</span><small>{profile.studyAreas.join(" · ")}</small></div>
                </div>

              <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.university2education}</strong><span>{profile.university2}</span></div>
                </div>
              <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.awsschooleducation}</strong><span>{profile.awsschool}</span></div>
                </div>
                <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.university1education}</strong><span>{profile.university1}</span></div>
                </div>
              <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.university3education}</strong><span>{profile.university3}</span></div>
                </div>
                <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.codingschooleducation}</strong><span>{profile.codingschool}</span></div>
                </div>
                
              <div className="education-card">
                  <div className="education-icon"><Command size={19} /></div>
                  <div><span className="micro-label">ACADEMIC FOUNDATION</span><strong>{profile.schooleducation}</strong><span>{profile.school}</span></div>
                </div>
            </div>
          </div>
          <div className="principles-grid">
            {[
              ["01", "SYSTEMS THINKING", "Understand the whole system, not just the visible interface."],
              ["02", "BUILD WITH PURPOSE", "Turn ideas into practical, maintainable software."],
              ["03", "ALWAYS EXPLORING", "Keep learning across engineering, AI, and security."]
            ].map(([number, title, text]) => (
              <article className="principle-card" key={number}>
                <span className="principle-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={17} />
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section projects-section" id="projects">
          <div className="section-kicker"><span>02</span><span>SELECTED WORK / PROJECTS</span></div>
          <div className="section-title-row">
            <div><p className="eyebrow">IDEAS INTO SYSTEMS</p><h2>Selected <span>projects.</span></h2></div>
            <p className="section-intro">A growing collection of experiments, applications, and systems in progress.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card theme-${project.theme}`} key={project.slug}>
                <div className="project-card-top"><span>{String(index + 1).padStart(2, "0")} / 05</span><span className="project-status"><span className="status-dot" />{project.status}</span></div>
                <div className="project-art" aria-hidden="true">
                  <div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core">{project.name.slice(0, 1)}</div>
                </div>
                <div className="project-content">
                  <p className="micro-label">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-footer"><span>{project.slug.toUpperCase()}</span>{project.github ? <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>VIEW REPOSITORY <ArrowUpRight size={15} /></a> : <span className="project-private">CASE STUDY IN PROGRESS</span>}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section skills-section" id="skills">
          <div className="section-kicker"><span>03</span><span>CAPABILITIES / SKILLS</span></div>
          <div className="section-title-row">
            <div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Built to <span>adapt.</span></h2></div>
            <p className="section-intro">A flexible toolkit for exploring problems, building products, and learning new systems.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-intro"><Terminal size={23} /><p className="micro-label">TECHNICAL INDEX / 001—004</p><p>Technology is a toolkit. The goal is choosing the right tool for the problem.</p><span className="skills-decoration">A<span>.</span></span></div>
            <div className="skill-groups">
              {skills.map((group, index) => (
                <div className="skill-group" key={group.category}>
                  <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.category}</h3></div>
                  <div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section journey-section" id="journey">
          <div className="section-kicker"><span>04</span><span>PROCESS / JOURNEY</span></div>
          <div className="journey-grid">
            <div><p className="eyebrow">THE WORK IN PROGRESS</p><h2>Learn deeply.<br /><span>Build deliberately.</span></h2></div>
            <div className="journey-list">
              {[
                ["NOW", "Applied Sciences", "Building foundations across computing, mathematics, and statistics."],
                ["ALWAYS", "Research & Experimentation", "Testing ideas through small projects and hands-on learning."],
                ["NEXT", "Engineering with impact", "Growing into a software engineer who can design, build, and maintain useful systems."]
              ].map(([period, title, description]) => (
                <article className="journey-item" key={period}><span className="journey-period">{period}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={17} /></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section terminal-section">
          <div className="section-kicker"><span>05</span><span>INTERACTIVE / TERMINAL</span></div>
          <div className="terminal-window">
            <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>AKILA_OS — TERMINAL</span><Terminal size={16} /></div>
            <div className="terminal-body" aria-live="polite">
              {terminalLines.map((line, index) => <p className={line.startsWith("visitor@") ? "terminal-command" : "terminal-output"} key={`${index}-${line}`}>{line}</p>)}
              <form className="terminal-prompt" onSubmit={(event) => { event.preventDefault(); runCommand(terminalInput); }}>
                <label htmlFor="terminal-input">visitor@akila:~$</label><input id="terminal-input" value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} autoComplete="off" spellCheck={false} aria-label="Terminal command" /><button type="submit" aria-label="Run command"><ArrowUpRight size={16} /></button>
              </form>
            </div>
          </div>
          <p className="terminal-hint">TRY: <button onClick={() => runCommand("help")}>help</button><button onClick={() => runCommand("projects")}>projects</button><button onClick={() => runCommand("skills")}>skills</button><button onClick={() => runCommand("whoami")}>whoami</button></p>
        </section>

        <section className="section-shell section contact-section" id="contact">
          <div className="section-kicker"><span>06</span><span>CONTACT / COLLABORATE</span></div>
          <div className="contact-grid">
            <div className="contact-copy"><p className="eyebrow"><span className="live-dot" /> OPEN TO GOOD IDEAS</p><h2>Have a signal?<br /><span>Let&apos;s connect.</span></h2><p>Have a project, a question, or an interesting problem to solve? Send a message and let&apos;s start a conversation.</p>
              <button className="email-copy" type="button" onClick={copyEmail}><Mail size={17} /><span>{profile.email}</span>{copied ? <Check size={15} /> : <ArrowUpRight size={15} />}</button>
              <div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GITHUB <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={13} /></a></div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-heading"><span>TRANSMISSION FORM</span><span className="form-ready"><span className="status-dot" /> READY</span></div>
              <div className="form-row"><label>Name<input required value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} placeholder="you@example.com" /></label></div>
              <label>Subject <span className="optional">(optional)</span><input value={contact.subject} onChange={(event) => setContact({ ...contact, subject: event.target.value })} placeholder="What is this about?" /></label>
              <label>Message<textarea required rows={5} value={contact.message} onChange={(event) => setContact({ ...contact, message: event.target.value })} placeholder="Tell me a little about your idea..." /></label>
              {contactError && <p className="form-error" role="alert">{contactError}</p>}
              <p className="form-note">This opens your email application with the message prepared. It does not send automatically.</p>
              <button className="button button-primary form-submit" type="submit">PREPARE MESSAGE <Send size={15} /></button>
            </form>
          </div>
        </section>
      </div>

      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">A</span><span className="brand-name">AKILA<span className="brand-slash">/</span>DIGITAL FRONTIER</span></a><span>DESIGNED TO EXPLORE. BUILT TO WORK.</span><span>© {new Date().getFullYear()} AKILA THIKSHANA</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
