"use client";

export default function ProjectCard({ title, description, tags, links, icon, status }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "0 0 35px var(--accent-glow)";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      {/* Top bar gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, var(--accent), #818cf8)",
        }}
      />

      {/* Header */}
      <div
        style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
      >
        <div
          style={{
            fontSize: "1.8rem",
            width: "48px",
            height: "48px",
            background: "var(--bg-primary)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--border)",
          }}
        >
          {icon}
        </div>
        {status && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              padding: "4px 10px",
              borderRadius: "100px",
              background:
                status === "Live"
                  ? "rgba(34,197,94,0.1)"
                  : status === "In Progress"
                  ? "rgba(251,191,36,0.1)"
                  : "var(--bg-primary)",
              color:
                status === "Live"
                  ? "#22c55e"
                  : status === "In Progress"
                  ? "#fbbf24"
                  : "var(--text-muted)",
              border: `1px solid ${
                status === "Live"
                  ? "rgba(34,197,94,0.3)"
                  : status === "In Progress"
                  ? "rgba(251,191,36,0.3)"
                  : "var(--border)"
              }`,
            }}
          >
            {status}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--text-primary)",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {links && links.length > 0 && (
        <div style={{ display: "flex", gap: "10px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
