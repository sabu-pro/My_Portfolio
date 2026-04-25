"use client";
export default function Experience() {
  const experiences = [
    {
      role: "Information Technology Intern",
      company: "Marjorie Milner College",
      type: "Internship",
      period: "Aug 2025 – Present · 9 mos",
      location: "401 Canterbury Road, Surrey Hills 3127 · On-site",
      logo: "🏫",
      description:
        "Led a project to digitalize and automate student attendance management, replacing manual processes with a streamlined system. Delivered real-time tracking, automated reporting, and alert notifications, improving efficiency, accuracy, and communication across the college.",
      highlights: [
        "Digitalized student attendance management system",
        "Built automated reporting & alert notification pipeline",
        "Improved operational efficiency across the college",
        "Replaced manual processes with real-time tracking",
      ],
      tech: ["Python", "SQL", "Automation", "Database Design", "Reporting"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of IT, Cyber Security",
      institution: "Victorian Institute of Technology (VIT)",
      period: "2023 – 2026",
      icon: "🎓",
      details: "Melbourne, Australia",
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">
            <span>📁</span> Experience
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
            Work &amp; Education
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Work experience */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              // Work Experience
            </h3>
            {experiences.map((exp) => (
              <div
                key={exp.role}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Accent top bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, var(--accent), #818cf8)",
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      width: "52px",
                      height: "52px",
                      background: "var(--bg-primary)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {exp.logo}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--text-primary)",
                        marginBottom: "2px",
                      }}
                    >
                      {exp.role}
                    </h4>
                    <p
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: "none", marginBottom: "1.25rem" }}>
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "flex-start",
                        fontSize: "0.83rem",
                        color: "var(--text-secondary)",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{ color: "var(--accent)", flexShrink: 0, marginTop: "1px" }}
                      >
                        ▸
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              // Education
            </h3>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="cert-card"
                style={{ marginBottom: "1rem" }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {edu.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {edu.degree}
                </h4>
                <p
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {edu.institution}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {edu.period} · {edu.details}
                </p>
              </div>
            ))}

            {/* Language */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Languages
              </h4>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ fontSize: "1.5rem" }}>🇬🇧</span>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    English
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Professional Proficiency
                  </p>
                </div>
              </div>
            </div>

            {/* Resume download card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-light), var(--bg-card))",
                border: "1px solid var(--accent)",
                borderRadius: "14px",
                padding: "1.5rem",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Want the full picture?
              </p>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Download My Resume
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: "center", width: "100%" }}
              >
                ↓ Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
