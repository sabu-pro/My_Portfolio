"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "1.4rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--accent)" }}>S</span>abut
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "12px" }}>
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
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--border)",
            }}
          />

          {/* Copyright */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              © {year} Sabut B K · All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              Built with{" "}
              <span style={{ color: "var(--accent)" }}>Next.js</span> &amp;{" "}
              <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
