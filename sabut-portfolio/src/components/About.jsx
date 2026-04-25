"use client";
import Image from "next/image";

const infoItems = [
  { label: "Name", value: "Sabut B K" },
  { label: "Degree", value: "Bachelor of IT, Cyber Security" },
  { label: "University", value: "Victorian Institute of Technology" },
  { label: "Grad Year", value: "2026" },
  { label: "Location", value: "Melbourne, Australia" },
  { label: "Email", value: "sabutsunar97@gmail.com" },
  { label: "Phone", value: "+61 452 180 047" },
  { label: "Status", value: "Open to Work ✓" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-tag">
            <span>◉</span> About Me
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
            Who I Am
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Photo column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* Photo container */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "340px",
              }}
            >
              {/* Decorative border */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  border: "2px solid var(--accent)",
                  opacity: 0.3,
                }}
              />
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "2px solid var(--border)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="/photo.png"
                  alt="Sabut B K"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "-16px",
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  boxShadow: "0 8px 25px var(--accent-glow)",
                  whiteSpace: "nowrap",
                }}
              >
                🎓 IT · Cyber Security
              </div>
            </div>

            {/* Info table */}
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                marginTop: "2rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {infoItems.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "10px 16px",
                    borderBottom:
                      i < infoItems.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      minWidth: "70px",
                      paddingTop: "2px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color:
                        item.label === "Status"
                          ? "#22c55e"
                          : "var(--text-primary)",
                      fontWeight: item.label === "Status" ? 600 : 400,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Cybersecurity Student &amp;{" "}
              <span className="accent-text">Problem Solver</span>
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
              }}
            >
              <p>
                I&apos;m passionate about cybersecurity and love exploring how
                systems work — and how to protect them. I enjoy setting up my
                own labs to experiment with networks, coding, and security
                tools, learning by doing.
              </p>
              <p>
                I have hands-on experience with{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  Linux systems and Active Directory
                </span>
                , understanding how they form the backbone of enterprise
                networks and why securing them is critical in today&apos;s
                digital world.
              </p>
              <p>
                Over time, I&apos;ve gained hands-on experience in{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  networking, ethical hacking, and vulnerability testing
                </span>
                , and I&apos;m always excited to tackle new challenges.
              </p>
              <p>
                I also value communication and teamwork, knowing that solving
                cybersecurity problems often requires collaboration. My goal is
                to help organizations stay safe from cyber threats while
                continuing to grow my skills and knowledge in this ever-evolving
                field.
              </p>
            </div>

            {/* Highlight cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              {[
                { num: "3+", label: "Years Learning" },
                { num: "5+", label: "Certs & Courses" },
                { num: "∞", label: "Curiosity" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "20px 16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}
            >
              <a
                href="#contact"
                className="btn-primary"
              >
                Let&apos;s Connect →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
