import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Sabut B K | Cybersecurity Portfolio",
  description:
    "Bachelor of IT (Cyber Security) student at Victorian Institute of Technology. Passionate about ethical hacking, networking, and protecting digital systems.",
  keywords: [
    "Sabut BK",
    "Cybersecurity",
    "IT Portfolio",
    "Ethical Hacking",
    "Melbourne",
    "VIT",
    "Penetration Testing",
  ],
  authors: [{ name: "Sabut B K" }],
  openGraph: {
    title: "Sabut B K | Cybersecurity Portfolio",
    description:
      "Cybersecurity student passionate about ethical hacking, networking, and protecting digital systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
