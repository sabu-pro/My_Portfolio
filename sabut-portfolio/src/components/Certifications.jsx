const certifications = [
  {
    icon: "🔐",
    title: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Jan 2026",
    credentialId: "2813277",
    certificateUrl: "/ISC2cert.pdf",
    description:
      "Completed the ISC2 Certified in Cybersecurity (CC) certificate, covering security principles, network security, access control, and incident response foundations.",
    color: "#6366f1",
  },
  {
    icon: "🗃️",
    title: "Introduction to SQL",
    issuer: "Institute of Applied Technology (Digital)",
    date: "Mar 2026",
    credentialId: "MARKgzLCyc",
    certificateUrl: "/sqlcert.jpeg",
    description:
      "Completed the Introduction to SQL Microskill program covering database fundamentals, SQL queries, and data management from the Institute of Applied Technology (NSW).",
    color: "#0891b2",
  },
  {
    icon: "🔧",
    title: "Git and GitHub Certification",
    issuer: "Technology Channel",
    date: "Jan 2026",
    credentialId: "0608d5b0-b8e8-5674-a971-cd19dd80c7a6",
    certificateUrl: "/git.png",
    description:
      "Completed the Git & GitHub Certification Course covering version control, Git commands, GitHub repositories, branching, pull requests, and collaborative development workflows.",
    color: "#22c55e",
  },
  {
  icon: "🎓",
  title: "Dean’s Honours List",
  issuer: "Victorian Institute of Technology",
  date: "Apr 2025",
  credentialId: "Academic Achievement",
  certificateUrl: "/deanaward.jpeg",
  description:
    "Recognised for completing a full study plan in Semester 2, 2024 and achieving a GPA of 4.50 or above.",
  color: "#f59e0b",
},
];


export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">
            <span>🏅</span> Achievements
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
            Licenses, Certifications &amp; Achievements
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              marginTop: "0.75rem",
              maxWidth: "420px",
              margin: "0.75rem auto 0",
            }}
          >
            A collection of certifications and academic achievements 
            demonstrating continuous learning, technical growth, and strong academic performance.
          </p>
        </div>

        {/* Certification Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {certifications.map((cert) => (
            <div key={cert.title} className="cert-card">
              {/* Icon + issuer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      marginBottom: "2px",
                    }}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: cert.color,
                    }}
                  >
                    Issued {cert.date}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                  lineHeight: 1.4,
                }}
              >
                {cert.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                {cert.description}
              </p>

              {/* View Certificate + Credential ID */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "9px 12px",
                      borderRadius: "8px",
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}44`,
                      color: cert.color,
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    View Certificate →
                  </a>
                )}

                <div
                  style={{
                    padding: "8px 12px",
                    background: "var(--bg-primary)",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      marginBottom: "2px",
                    }}
                  >
                    Credential ID
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: cert.color,
                      wordBreak: "break-all",
                    }}
                  >
                    {cert.credentialId}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}