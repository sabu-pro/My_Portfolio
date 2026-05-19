"use client";
import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "sabutsunar97@gmail.com",
    href: "mailto:sabutsunar97@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+61 452 180 047",
    href: "tel:+61452180047",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Melbourne, Australia",
    href: null,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/sabut-b-k",
    href: "https://www.linkedin.com/in/sabut-b-k-841639354/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with a form service (Formspree, EmailJS, etc.)
    const mailtoLink = `mailto:sabutsunar97@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">
            <span>✉️</span> Contact
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
            Let&apos;s Work Together
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              marginTop: "0.75rem",
              maxWidth: "480px",
              margin: "0.75rem auto 0",
            }}
          >
           I am currently open to IT Support, Helpdesk Analyst, Service Desk Analyst, and junior cybersecurity opportunities, including internships and collaborative projects. Feel free to reach out.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Left — contact details */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Get In Touch
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    padding: "14px 18px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--accent)",
                          textDecoration: "none",
                          fontWeight: 500,
                          transition: "opacity 0.2s",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-primary)",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability note */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "16px",
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span className="glow-dot" />
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#22c55e",
                }}
              >
                Available for opportunities · Response within 24hrs
              </p>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="contact-input"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration"
                  className="contact-input"
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sabut, I would like to discuss..."
                  required
                  rows={5}
                  className="contact-input"
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ justifyContent: "center" }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message →"}
              </button>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                }}
              >
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
