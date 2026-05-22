"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Cybersecurity Enthusiast",
  "Ethical Hacker (in training)",
  "Network Security Learner",
  "Linux & AD Explorer",
  "IT Intern @ Marjorie Milner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 60);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "7rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-max" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <div style={{ maxWidth: "700px" }}>
            {/* Status badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                padding: "8px 16px",
                marginBottom: "2rem",
                animation: "fadeUp 0.6s ease forwards",
              }}
            >
              <span className="glow-dot" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.05em",
                }}
              >
                Open to opportunities · Melbourne, AU
              </span>
            </div>

            {/* Greeting */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                color: "var(--accent)",
                marginBottom: "0.75rem",
                animation: "fadeUp 0.6s ease 0.1s forwards",
                opacity: 0,
              }}
            >
              Hello, I&apos;m 👋
            </p>

            {/* Name */}
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1rem",
                animation: "fadeUp 0.6s ease 0.15s forwards",
                opacity: 0,
              }}
            >
              Sabut{" "}
              <span className="gradient-text">B K</span>
            </h1>

            {/* Typed role */}
            <div
              style={{
                height: "2rem",
                marginBottom: "1.5rem",
                animation: "fadeUp 0.6s ease 0.2s forwards",
                opacity: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                }}
              >
                {displayed}
                <span className="typed-cursor" />
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                maxWidth: "560px",
                marginBottom: "2.5rem",
                animation: "fadeUp 0.6s ease 0.25s forwards",
                opacity: 0,
              }}
            >
              Bachelor of IT (Cyber Security) student at VIT Melbourne,
              passionate about ethical hacking, network security, and Linux
              systems. Building labs, breaking things (ethically), and learning
              every day.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
                animation: "fadeUp 0.6s ease 0.3s forwards",
                opacity: 0,
              }}
            >
              <a href="#projects" className="btn-primary">
                View Projects →
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                ↓ Resume
              </a>
            </div>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                animation: "fadeUp 0.6s ease 0.35s forwards",
                opacity: 0,
              }}
            >
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sabut-b-k-841639354/",
                  icon: "in",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/sabu-pro",
                  icon: "gh",
                },
                {
                  label: "Email",
                  href: "mailto:sabutsunar97@gmail.com",
                  icon: "@",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "var(--bg-card)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Terminal card - hidden on mobile, shown md+ */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              right: "2rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "380px",
              animation: "fadeIn 1s ease 0.5s forwards",
              opacity: 0,
            }}
          >
            <div className="terminal-card">
              <div className="terminal-header">
                <div
                  className="terminal-dot"
                  style={{ background: "#ff5f57" }}
                />
                <div
                  className="terminal-dot"
                  style={{ background: "#ffbd2e" }}
                />
                <div
                  className="terminal-dot"
                  style={{ background: "#28ca41" }}
                />
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                  }}
                >
                  sabut@terminal ~ 
                </span>
              </div>
              <div className="terminal-body">
                <p>
                  <span className="terminal-green">~</span>{" "}
                  <span className="terminal-cyan">whoami</span>
                </p>
                <p className="terminal-gray">Sabut B K</p>
                <br />
                <p>
                  <span className="terminal-green">~</span>{" "}
                  <span className="terminal-cyan">cat</span> skills.txt
                </p>
                <p className="terminal-gray">
                  ├── Ethical Hacking
                  <br />
                  ├── Network Security
                  <br />
                  ├── Linux & Active Directory
                  <br />
                  ├── Python · SQL · Bash
                  <br />
                  └── Vulnerability Testing
                </p>
                <br />
                <p>
                  <span className="terminal-green">~</span>{" "}
                  <span className="terminal-cyan">cat</span> status.txt
                </p>
                <p>
                  <span className="terminal-yellow">
                    [✓]
                  </span>{" "}
                  <span className="terminal-gray">
                    Open to IT / Security roles
                  </span>
                </p>
                <p>
                  <span className="terminal-yellow">
                    [✓]
                  </span>{" "}
                  <span className="terminal-gray">
                    Graduating 2026 · VIT Melbourne
                  </span>
                </p>
                <br />
                <p>
                  <span className="terminal-green">~</span>{" "}
                  <span className="typed-cursor" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            animation: "float 3s ease-in-out infinite",
            opacity: 0.5,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg, var(--accent), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
