"use client";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Security",
    icon: "🛡️",
    skills: [
      { name: "Ethical Hacking", level: 65 },
      { name: "Vulnerability Testing", level: 60 },
      { name: "Network Security", level: 70 },
      { name: "SIEM / Log Analysis", level: 50 },
    ],
  },
  {
    title: "Systems & Networking",
    icon: "🌐",
    skills: [
      { name: "Linux (Kali / Ubuntu)", level: 70 },
      { name: "Active Directory", level: 65 },
      { name: "TCP/IP / Networking", level: 72 },
      { name: "Windows Server", level: 55 },
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 55 },
      { name: "SQL", level: 65 },
      { name: "Bash Scripting", level: 60 },
      { name: "Git & GitHub", level: 70 },
    ],
  },
];

const tools = [
  "Cybersecurity Testing & Lab Practice",
  "Network Security & Packet Analysis",
  "Vulnerability Assessment & Reporting",
  "Firewall, VPN & Access Control Configuration",
  "Windows Server, Active Directory & Group Policy",
  "Linux Administration & Command-Line Tools",
  "Virtualisation with Windows/Linux Lab Environments",
  "Web Development, Databases & Version Control",
  "Security Frameworks, Risk Assessment & Documentation"
];

function SkillBar({ name, level, visible }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500 }}>
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--accent)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "6px",
          background: "var(--bg-primary)",
          borderRadius: "4px",
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-max" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">
            <span>⚡</span> Skills
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Technical Arsenal
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              marginTop: "0.75rem",
              maxWidth: "450px",
              margin: "0.75rem auto 0",
            }}
          >
            Skills I&apos;ve built through hands-on labs, coursework, and real-world experience.
          </p>
        </div>

        {/* Skill categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card-base" style={{ padding: "1.75rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{cat.icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  visible={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>🔧</span> Tools &amp; Technologies
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tools.map((tool) => (
              <span
                key={tool}
                style={{
                  padding: "6px 14px",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "var(--accent-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "var(--bg-primary)";
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
