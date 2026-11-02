
"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <p className="eyebrow">
            <span className="status-dot" />
            PROJECT ARCHIVE / SELECTED WORKS
          </p>

          <h2>
            Engineering the
            <br />
            <span className="gradient-text">digital frontier.</span>
          </h2>

          <p className="intro">
            AI engineering, computer vision, web development, and digital
            experiences — a collection of projects built through curiosity
            and code.
          </p>

          <p className="project-count">
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            PROJECTS IN THE ARCHIVE
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              <div className={`project-visual visual-${project.visual}`}>
                <div className="visual-grid" />
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />

                <span className="visual-number">
                  PROJECT_{project.number}
                </span>

                <div className="visual-center">
                  <span className="visual-symbol">
                    {{
                      edith: "E",
                      flowops: "F/",
                      lab: "LAB_",
                      fashion: "AK",
                      temple: "☸",
                      netflix: "N",
                      kaufa: "K",
                      airbook: "AB",
                      vision: "CV",
                    }[project.visual] ?? "AK"}
                  </span>

                  <span className="visual-label">
                    {project.category}
                  </span>

                  <div className="signal-bars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <span className="visual-footer">AK / DIGITAL FRONTIER</span>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span className="technology-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <span className="project-status">
                    <span className="status-dot" />
                    {project.github ? "SOURCE AVAILABLE" : "PROJECT"}
                  </span>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub <span>↗</span>
                    </a>
                  ) : (
                    <span className="link-pending">Link coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="projects-footer">
          <span>DESIGNED WITH CURIOSITY.</span>
          <a
            href="https://github.com/TechAkii"
            target="_blank"
            rel="noopener noreferrer"
          >
            EXPLORE ALL REPOSITORIES ↗
          </a>
        </footer>
      </div>

      <style jsx>{`
        .projects-section {
          position: relative;
          overflow: hidden;
          padding: 100px 24px 60px;
          background: #070910;
          color: #f3f5fb;
        }

        .projects-container {
          max-width: 1180px;
          margin: auto;
        }

        .projects-heading {
          max-width: 760px;
          margin-bottom: 48px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #a1acc0;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .status-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #57e9c1;
          box-shadow: 0 0 12px #57e9c177;
        }

        h2 {
          margin: 24px 0;
          font-size: clamp(42px, 7vw, 76px);
          line-height: 1.04;
          letter-spacing: -3px;
        }

        .gradient-text {
          color: #72e7ff;
          background: linear-gradient(100deg, #72e7ff, #a6a0ff, #ed9dff);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .intro {
          max-width: 570px;
          color: #9ca5b8;
          font-size: 15px;
          line-height: 1.9;
        }

        .project-count {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
          color: #9ca5b8;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .project-count strong {
          color: #72e7ff;
          font-size: 22px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .project-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #ffffff15;
          border-radius: 18px;
          background: #0c101a;
          transition:
            transform 250ms ease,
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 18px 50px #0005;
        }

        .project-visual {
          position: relative;
          display: grid;
          min-height: 225px;
          overflow: hidden;
          place-items: center;
          isolation: isolate;
          background: #101a2b;
        }

        .visual-grid {
          position: absolute;
          z-index: -1;
          inset: 0;
          background-image:
            linear-gradient(#ffffff0a 1px, transparent 1px),
            linear-gradient(90deg, #ffffff0a 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .visual-number,
        .visual-footer {
          position: absolute;
          color: #ffffff85;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .visual-number {
          top: 16px;
          left: 16px;
        }

        .visual-footer {
          right: 14px;
          bottom: 12px;
          font-size: 8px;
        }

        .orbit {
          position: absolute;
          z-index: -1;
          width: 190px;
          height: 190px;
          border: 1px solid var(--accent);
          border-radius: 50%;
          opacity: 0.25;
          animation: orbit 18s linear infinite;
        }

        .orbit-two {
          width: 260px;
          height: 260px;
          animation-direction: reverse;
          animation-duration: 26s;
        }

        .visual-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .visual-symbol {
          color: var(--accent);
          font-size: 76px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: -4px;
          text-shadow: 0 0 30px var(--accent);
          animation: glow 4s ease-in-out infinite;
        }

        .visual-label {
          max-width: 90%;
          color: #d6deedc0;
          font-size: 9px;
          letter-spacing: 2px;
          text-align: center;
        }

        .signal-bars {
          display: flex;
          height: 20px;
          align-items: end;
          gap: 5px;
        }

        .signal-bars span {
          width: 4px;
          height: 50%;
          border-radius: 3px;
          background: var(--accent);
          animation: signal 900ms ease-in-out infinite alternate;
        }

        .signal-bars span:nth-child(2) {
          height: 100%;
          animation-delay: 150ms;
        }

        .signal-bars span:nth-child(3) {
          height: 65%;
          animation-delay: 300ms;
        }

        .signal-bars span:nth-child(4) {
          height: 85%;
          animation-delay: 100ms;
        }

        .signal-bars span:nth-child(5) {
          height: 40%;
          animation-delay: 250ms;
        }

        .visual-edith {
          background: radial-gradient(ellipse, #07577755, transparent 70%), #07121e;
        }

        .visual-flowops {
          background: radial-gradient(ellipse, #51418b55, transparent 70%), #100d20;
        }

        .visual-lab {
          background: radial-gradient(ellipse, #07577755, transparent 70%), #07121e;
        }

        .visual-fashion {
          background: radial-gradient(ellipse, #762b6040, transparent 65%), #160c1c;
        }

        .visual-temple {
          background: radial-gradient(ellipse, #77512245, transparent 65%), #17110a;
        }

        .visual-netflix {
          background: radial-gradient(ellipse, #71152170, transparent 65%), #10090d;
        }

        .visual-kaufa {
          background: radial-gradient(ellipse, #1e4c8455, transparent 70%), #081323;
        }

        .visual-airbook {
          background: radial-gradient(ellipse, #145d5055, transparent 70%), #081815;
        }

        .visual-vision {
          background: radial-gradient(ellipse, #633f8055, transparent 70%), #150c20;
        }

        .project-content {
          padding: 23px;
        }

        .project-meta,
        .project-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .project-meta {
          color: var(--accent);
          font-size: 9px;
          letter-spacing: 1px;
        }

        .project-meta span:last-child {
          color: #778094;
        }

        .project-content h3 {
          margin: 18px 0 12px;
          font-size: clamp(19px, 2.5vw, 25px);
          letter-spacing: -0.6px;
        }

        .project-description {
          min-height: 94px;
          margin: 0;
          color: #9ca5b8;
          font-size: 13px;
          line-height: 1.8;
        }

        .technology-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin: 20px 0 24px;
        }

        .technology-tag {
          padding: 7px 9px;
          border: 1px solid #ffffff12;
          border-radius: 5px;
          color: #c1c9d8;
          background: #ffffff04;
          font-size: 10px;
        }

        .project-actions {
          flex-wrap: wrap;
          padding-top: 17px;
          border-top: 1px solid #ffffff12;
        }

        .project-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #9ca5b8;
          font-size: 9px;
        }

        .project-link,
        .link-pending {
          font-size: 11px;
          text-decoration: none;
        }

        .project-link {
          color: #f3f5fb;
        }

        .project-link:hover {
          color: var(--accent);
        }

        .project-link span {
          display: inline-block;
          transition: transform 180ms ease;
        }

        .project-link:hover span {
          transform: translate(3px, -3px);
        }

        .link-pending {
          color: #778094;
        }

        .projects-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
          margin-top: 48px;
          padding-top: 22px;
          border-top: 1px solid #ffffff15;
          color: #778094;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .projects-footer a {
          color: #72e7ff;
          text-decoration: none;
        }

        @keyframes orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        @keyframes signal {
          from {
            transform: scaleY(0.45);
          }
          to {
            transform: scaleY(1);
          }
        }

        @media (max-width: 700px) {
          .projects-section {
            padding: 70px 16px 40px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-description {
            min-height: 0;
          }

          h2 {
            letter-spacing: -2px;
          }

          .project-visual {
            min-height: 210px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .orbit,
          .visual-symbol,
          .signal-bars span {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
