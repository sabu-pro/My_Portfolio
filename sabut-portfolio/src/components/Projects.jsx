import ProjectCard from "./ProjectCard";

const projects = [
  {
    icon: "🎓",
    title: "Student Attendance Automation System",
    description:
      "Digitalized and automated the student attendance management system at Marjorie Milner College. Replaced manual paper-based processes with a real-time digital system featuring automated reporting and alert notifications.",
    tags: ["Python", "SQL", "Automation", "Database", "Reporting"],
    status: "Live",
    links: [],
  },
  
  {
    icon: "🛡️",
    title: "Active Directory Security Simulation",
    description:
      "Set up a Windows Server environment with Active Directory to study enterprise authentication and access control. Explored common AD attack vectors including pass-the-hash and privilege escalation in a controlled lab.",
    tags: ["Active Directory", "Windows Server", "PowerShell", "Security"],
    status: "Completed",
    links: [],
  },
  {
    icon: "🌐",
    title: "Network Packet Analyser",
    description:
      "Used Wireshark to capture and analyse network traffic patterns. Identified potential security anomalies, studied protocol behaviour (TCP/UDP/HTTP), and documented findings in a detailed security report.",
    tags: ["Wireshark", "TCP/IP", "Network Analysis", "Linux"],
    status: "Completed",
    links: [],
  },
    {
    icon: "🗄️",
    title: "SQL Database Security Analysis",
    description:
      "Studied and demonstrated common SQL injection attack techniques and their prevention strategies. Applied principles of secure database design, parameterised queries, and access control in MySQL environments.",
    tags: ["SQL", "MySQL", "Database Security", "Injection Prevention"],
    status: "Completed",
    links: [],
  },

   {
    icon: "🔍",
    title: "Home Network Vulnerability Lab",
    description:
      "Built a personal home lab using VirtualBox to simulate enterprise network environments. Practiced vulnerability scanning with Nmap and Nessus, and performed controlled penetration tests using Metasploit.",
    tags: ["Kali Linux", "Nmap", "Metasploit", "Nessus", "VirtualBox"],
    status: "In Progress",
    links: [],
  },
  {
    icon: "🔍",
    title: "Home Network Vulnerability Lab",
    description:
      "Built a personal home lab using VirtualBox to simulate enterprise network environments. Practiced vulnerability scanning with Nmap and Nessus, and performed controlled penetration tests using Metasploit.",
    tags: ["Kali Linux", "Nmap", "Metasploit", "Nessus", "VirtualBox"],
    status: "In Progress",
    links: [],
  },
  
  {
    icon: "🐍",
    title: "Python Security Scripts",
    description:
      "Developed a collection of Python scripts for security automation including port scanners, password strength checkers, log parsers, and basic network monitoring tools. Strengthened scripting skills for blue-team workflows.",
    tags: ["Python", "Bash", "Automation", "Security Scripting"],
    status: "In Progress",
    
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">
            <span>🚀</span> Projects
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
            Things I&apos;ve Built
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
            Hands-on IT and cybersecurity projects developed through labs, coursework, 
            and self-study, applying practical skills in troubleshooting, networking, and security.
          </p>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginBottom: "1rem",
            }}
          >
            More projects on GitHub as I continue building →
          </p>
          <a
            href="https://github.com/sabu-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View GitHub Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
