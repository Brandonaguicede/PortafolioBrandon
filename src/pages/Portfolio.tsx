import { useEffect, useState, type FormEvent } from "react";
import {
  Code2,
  Mail,
  ExternalLink,
  Database,
  Server,
  ChevronDown,
  Menu,
  X,
  Globe,
  Moon,
  Sun,
  Layers,
  Cpu,
  Terminal,
  Box,
} from "lucide-react";
import { PHOTO } from "../assets/photo";
import nestIcon from "../icon/498-4989583_nestjs-logo-hd-png-download.png";
import apiIcon from "../icon/api.png";
import cSharpIcon from "../icon/c-sharp.png";
import githubIcon from "../icon/social.png";
import instagramIcon from "../icon/iconfinder-social-media-applications-3instagram-4102579_113804.png";
import linkedinIcon from "../icon/linkedin.png";
import mysqlIcon from "../icon/mysql-database.png";
import postgreIcon from "../icon/postgre.png";
import programingIcon from "../icon/programing.png";
import reactIcon from "../icon/physics.png";
import sqlServerIcon from "../icon/sql-server.png";
import typescriptIcon from "../icon/typescript.png";
import whatsappIcon from "../icon/whatsapp_icon-icons.com_53606.png";
import SkillBar from "../components/SkillBar";
import AnimatedCounter from "../components/AnimatedCounter";
import ProjectIcon from "../components/ProjectIcon";

const navLinks = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Habilidades" },
  { id: "portfolio", label: "Portafolio" },
  { id: "contact", label: "Contacto" },
];

const projects = [
  {
    title: "E-commerce API",
    description:
      "API RESTful para comercio electrónico desarrollada con C# y .NET Core. Incluye gestión de productos, categorías, usuarios, carrito de compras, órdenes y pagos. Implementa arquitectura en capas, principios SOLID, conexión con MySQL y documentación técnica con Swagger.",
    tags: ["C#", ".NET Core", "MySQL", "Swagger", "REST API", "SOLID"],
    github: "https://github.com/Brandonaguicede/Ecomerce2"  ,
    icon: "server",
  },
  {
    title: "Sistema de Citas para Barbería",
    description:
      "Plataforma web fullstack para administrar reservas de una barbería. Permite gestionar clientes, servicios, horarios disponibles y citas programadas. Desarrollada con React y TypeScript en el frontend, NestJS y Node.js en el backend, PostgreSQL como base de datos y autenticación JWT.",
    tags: ["React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "JWT"],
    github: "https://barberia-wheat.vercel.app/",
    icon: "layers",
  },
  {
    title: "Landing Page Profesional",
    description:
      "Sitio web moderno y responsivo orientado a la presentación de servicios, marca personal o negocio. Incluye secciones informativas, diseño adaptable a dispositivos móviles, llamadas a la acción y estructura optimizada para una navegación clara y profesional.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Landing Page"],
    github: "https://brandonaguicede.github.io/Cabanas-la-Reserva/",
    icon: "globe",
  },
];

const techGroups = [
  {
    label: "Backend",
    color: "#3B82F6",
    items: [
      { name: "C# / .NET Core", level: 85 },
      { name: "NestJS / Node.js", level: 78 },
      { name: "ASP.NET Core", level: 80 },
      { name: "Entity Framework", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    label: "Frontend",
    color: "#38BDF8",
    items: [
      { name: "React", level: 72 },
      { name: "TypeScript", level: 75 },
      { name: "HTML / CSS", level: 80 },
    ],
  },
  {
    label: "Bases de Datos",
    color: "#0EA5E9",
    items: [
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 75 },
      { name: "PostgreSQL", level: 68 },
    ],
  },
];

const languages = [
  { lang: "Español", level: "Nativo", pct: 100, color: "#3B82F6" },
  { lang: "Inglés", level: "Intermedio", pct: 60, color: "#38BDF8" },
];

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

type Language = "es" | "en";
type ThemeMode = "dark" | "light";

const englishProjects = [
  {
    title: "E-commerce API",
    description:
      "RESTful API for e-commerce built with C# and .NET Core. It includes product, category, user, cart, order, and payment management, with layered architecture, SOLID principles, MySQL integration, and Swagger technical documentation.",
  },
  {
    title: "Barbershop Booking System",
    description:
      "Full-stack web platform for managing barbershop reservations. It handles clients, services, availability, and scheduled appointments, built with React and TypeScript on the frontend, NestJS and Node.js on the backend, PostgreSQL, and JWT authentication.",
  },
  {
    title: "Professional Landing Page",
    description:
      "Modern responsive website for presenting services, a personal brand, or a business. It includes informative sections, mobile-friendly design, calls to action, and a structure optimized for clear professional navigation.",
  },
];

const copy = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      portfolio: "Portafolio",
      contact: "Contacto",
      contactMe: "Contactarme",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Estudiante de Ingeniería de Sistemas | Desarrollador Full Stack",
      summary: "Diseño software usando arquitecturas limpias y patrones de diseño para garantizar sistemas escalables, eficientes y de alto rendimiento. Siempre aprendiendo y mejorando cada día.",
      projects: "Ver Proyectos",
      contact: "Contactar",
      badge: "Full Stack Developer",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Transformando ideas",
      titleAccent: "en soluciones web",
      p1: "Soy estudiante de tercer año de Ingeniería en Sistemas de Información en la Universidad Nacional de Costa Rica. Me enfoco en el desarrollo de aplicaciones web completas, combinando interfaces modernas, lógica backend, bases de datos y buenas prácticas de arquitectura.",
      p2: "Tengo experiencia trabajando con tecnologías",
      p2End: "y bases de datos como",
      and: "y",
      p2Close: "Soy responsable, disciplinado y siempre con ganas de aprender.",
      education: "Educación",
      degree: "Ingeniería en Sistemas de Información",
      school: "Universidad Nacional de Costa Rica",
      period: "2023 — Presente · 3er Año",
    },
    stats: [
      { label: "Proyectos", sub: "Completados" },
      { label: "Idiomas", sub: "ES & EN" },
      { label: "Año", sub: "de carrera" },
      { label: "Tecnologías", sub: "Dominadas" },
    ],
    skills: {
      eyebrow: "Habilidades",
      title: "Stack Tecnológico",
      languages: [
        { lang: "Español", level: "Nativo", pct: 100, color: "#3B82F6" },
        { lang: "Inglés", level: "Intermedio", pct: 60, color: "#38BDF8" },
      ],
    },
    portfolio: {
      eyebrow: "Portafolio",
      title: "Proyectos Destacados",
      view: "Ver proyecto",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contáctame",
      intro: "Estoy disponible para colaborar en proyectos, prácticas profesionales o nuevas oportunidades relacionadas con desarrollo web y backend.",
      subject: "Nuevo mensaje desde el portafolio",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu idea o proyecto",
      sending: "Enviando...",
      send: "Enviar mensaje",
      success: "Mensaje enviado. Te responderé pronto.",
      error: "No se pudo enviar. Intenta de nuevo o escríbeme por WhatsApp.",
      missingEndpoint: "Configura VITE_FORMSPREE_ENDPOINT con tu URL de Formspree.",
    },
    controls: {
      language: "EN",
      themeLight: "Claro",
      themeDark: "Oscuro",
    },
    footer: "© 2025",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
      contactMe: "Contact me",
    },
    hero: {
      greeting: "Hi, I am",
      role: "Information Systems student | Full Stack Developer",
      summary: "I design software using clean architectures and design patterns to build scalable, efficient, high-performance systems. Always learning and improving every day.",
      projects: "View Projects",
      contact: "Contact",
      badge: "Full Stack Developer",
    },
    about: {
      eyebrow: "About",
      title: "Turning ideas",
      titleAccent: "into web solutions",
      p1: "I am a third-year Information Systems Engineering student at Universidad Nacional de Costa Rica. I focus on full web application development, combining modern interfaces, backend logic, databases, and solid architecture practices.",
      p2: "I have experience working with",
      p2End: "and databases such as",
      and: "and",
      p2Close: "I am responsible, disciplined, and always eager to learn.",
      education: "Education",
      degree: "Information Systems Engineering",
      school: "Universidad Nacional de Costa Rica",
      period: "2023 — Present · 3rd Year",
    },
    stats: [
      { label: "Projects", sub: "Completed" },
      { label: "Languages", sub: "ES & EN" },
      { label: "Year", sub: "of studies" },
      { label: "Technologies", sub: "Practiced" },
    ],
    skills: {
      eyebrow: "Skills",
      title: "Tech Stack",
      languages: [
        { lang: "Spanish", level: "Native", pct: 100, color: "#3B82F6" },
        { lang: "English", level: "Intermediate", pct: 60, color: "#38BDF8" },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Featured Projects",
      view: "View project",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact me",
      intro: "I am available to collaborate on projects, internships, or new opportunities related to web and backend development.",
      subject: "New message from portfolio",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your idea or project",
      sending: "Sending...",
      send: "Send message",
      success: "Message sent. I will reply soon.",
      error: "The message could not be sent. Try again or write me on WhatsApp.",
      missingEndpoint: "Configure VITE_FORMSPREE_ENDPOINT with your Formspree URL.",
    },
    controls: {
      language: "ES",
      themeLight: "Light",
      themeDark: "Dark",
    },
    footer: "© 2025",
  },
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("es");
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const t = copy[language];
  const isLight = themeMode === "light";
  const translatedNavLinks = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "contact", label: t.nav.contact },
  ];
  const visibleProjects = projects.map((project, index) => (
    language === "en" ? { ...project, ...englishProjects[index] } : project
  ));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "skills", "portfolio", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setFormStatus("error");
      setFormMessage(t.contact.missingEndpoint);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");
    setFormMessage("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      form.reset();
      setFormStatus("success");
      setFormMessage(t.contact.success);
    } catch {
      setFormStatus("error");
      setFormMessage(t.contact.error);
    }
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${isLight ? "theme-light text-slate-950" : "theme-dark text-white"}`} style={{ background: isLight ? "#f8fafc" : "#040c1a", fontFamily: "\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* Ambient glow background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "50%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "30%", width: 300, height: 300, background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, transition: "all 0.4s", background: scrolled ? "rgba(4,12,26,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none" }}>
        <div className="nav-shell" style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div className="hidden md:flex nav-links" style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
            {translatedNavLinks.map(l => (
              <button className="nav-link" key={l.id} onClick={() => scrollTo(l.id)} style={{ fontSize: 16, fontWeight: 700, background: "transparent", border: "none", borderRadius: 50, cursor: "pointer", color: activeSection === l.id ? "#38BDF8" : "#94a3b8", padding: "8px 12px", transition: "all 0.2s" }}>
                {l.label}
              </button>
            ))}
            <button className="button-hover" onClick={() => scrollTo("contact")} style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)", color: "white", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 50, border: "none", cursor: "pointer", boxShadow: "0 0 20px rgba(59,130,246,0.3)", transition: "all 0.2s" }}>
              {t.nav.contactMe}
            </button>
            <button className="nav-control" onClick={() => setLanguage(language === "es" ? "en" : "es")} style={{ display: "flex", alignItems: "center", gap: 6, color: isLight ? "#0f172a" : "#cbd5e1", background: isLight ? "rgba(15,23,42,0.05)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.22)", borderRadius: 50, padding: "8px 12px", fontSize: 13, fontWeight: 800, cursor: "pointer" }} aria-label="Cambiar idioma">
              <Globe size={15} /> {t.controls.language}
            </button>
            <button className="nav-control" onClick={() => setThemeMode(isLight ? "dark" : "light")} style={{ display: "flex", alignItems: "center", gap: 6, color: isLight ? "#0f172a" : "#cbd5e1", background: isLight ? "rgba(15,23,42,0.05)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.22)", borderRadius: 50, padding: "8px 12px", fontSize: 13, fontWeight: 800, cursor: "pointer" }} aria-label="Cambiar tema">
              {isLight ? <Moon size={15} /> : <Sun size={15} />} {isLight ? t.controls.themeDark : t.controls.themeLight}
            </button>
          </div>
          <button className="md:hidden menu-button" style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", position: "absolute", right: 24 }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "#071120", borderTop: "1px solid rgba(59,130,246,0.2)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {translatedNavLinks.map(l => (
              <button className="nav-link" key={l.id} onClick={() => scrollTo(l.id)} style={{ textAlign: "center", background: "transparent", border: "none", borderRadius: 50, cursor: "pointer", color: activeSection === l.id ? "#38BDF8" : "#94a3b8", fontSize: 14, padding: "10px 12px", transition: "all 0.2s" }}>{l.label}</button>
            ))}
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button className="nav-control" onClick={() => setLanguage(language === "es" ? "en" : "es")} style={{ display: "flex", alignItems: "center", gap: 6, color: "#cbd5e1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.22)", borderRadius: 50, padding: "9px 13px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>
                <Globe size={15} /> {t.controls.language}
              </button>
              <button className="nav-control" onClick={() => setThemeMode(isLight ? "dark" : "light")} style={{ display: "flex", alignItems: "center", gap: 6, color: "#cbd5e1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.22)", borderRadius: 50, padding: "9px 13px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>
                {isLight ? <Moon size={15} /> : <Sun size={15} />} {isLight ? t.controls.themeDark : t.controls.themeLight}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 60px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          
            <div>
              <p style={{ color: "#64748b", fontSize: 18, marginBottom: 4 }}>{t.hero.greeting}</p>
              <h1 className="hero-name" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.16, margin: 0 }}>
                <span>Brandon</span>
                <span style={{ background: "linear-gradient(135deg, #3B82F6, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Aguirre</span>
                <span style={{ fontSize: "inherit", fontWeight: 900, color: "#94a3b8" }}>Cedeño</span>
              </h1>
            </div>
            <div>
              <p style={{ color: "#38BDF8", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{t.hero.role}</p>
              <p style={{ color: "#e1e5ea", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                .NET · Node.js (NestJS) · React · TypeScript · PostgreSQL · MySQL · APIs REST
              </p>
            </div>
            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: 0 }}>
              {t.hero.summary}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("portfolio")} style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)", color: "white", fontWeight: 700, padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer", fontSize: 15, boxShadow: "0 0 30px rgba(59,130,246,0.35)", transition: "all 0.2s" }}>
                {t.hero.projects}
              </button>
              <button onClick={() => scrollTo("contact")} style={{ background: "none", color: "#94a3b8", fontWeight: 700, padding: "12px 28px", borderRadius: 50, border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontSize: 15, transition: "all 0.2s" }}>
                {t.hero.contact}
              </button>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { name: "GitHub", icon: githubIcon, href: "https://github.com/Brandonaguicede" },
                { name: "Instagram", icon: instagramIcon, href: "https://www.instagram.com/brandon_aguirrec/" },
                { name: "LinkedIn", icon: linkedinIcon, href: "https://www.linkedin.com/in/brandon-aguirre-396113366/" },
              ].map((s, i) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name} style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all 0.2s", textDecoration: "none" }}>
                  <img src={s.icon} alt="" style={{ width: 24, height: 24, objectFit: "contain", display: "block" }} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - PHOTO */}
          <div className="hero-photo-column" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
            <div className="hero-photo-card" style={{ position: "relative", width: "clamp(270px, 32vw, 380px)", aspectRatio: "1 / 1" }}>
              {/* Glow ring */}
              <div style={{ position: "absolute", inset: -20, borderRadius: 24, background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(14,165,233,0.1))", filter: "blur(20px)" }} />
              {/* Decorative dots grid */}
              <div style={{ position: "absolute", top: -30, right: -30, opacity: 0.3 }}>
                {[...Array(5)].map((_, r) => (
                  <div key={r} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    {[...Array(5)].map((_, c) => (
                      <div key={c} style={{ width: 4, height: 4, borderRadius: "50%", background: "#3B82F6" }} />
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 20, overflow: "hidden", border: "2px solid rgba(59,130,246,0.35)", boxShadow: "0 0 60px rgba(59,130,246,0.2), 0 0 120px rgba(14,165,233,0.1)" }}>
                <img src={PHOTO} alt="Brandon Aguirre" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
             
              {/* Stack badge */}
              <div style={{ position: "absolute", top: -16, left: -16, background: "linear-gradient(135deg, #1d4ed8, #0284c7)", borderRadius: 12, padding: "8px 14px", boxShadow: "0 8px 24px rgba(59,130,246,0.4)" }}>
                <p style={{ color: "white", fontSize: 12, fontWeight: 700, margin: 0 }}>{t.hero.badge}</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => scrollTo("about")} style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "#475569", animation: "bounce 2s infinite" }}>
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
            <div>
              <p style={{ color: "#38BDF8", fontSize: 20, fontWeight: 1000, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{t.about.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 24 }}>
                <br />{t.about.title} <span style={{ background: "linear-gradient(135deg, #3B82F6, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.about.titleAccent}</span>
              </h2>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}>
                {t.about.p1}
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 0 }}>
                {t.about.p2} <span style={{ color: "#38BDF8" }}>C# / .NET Core</span>, <span style={{ color: "#3B82F6" }}>NestJS / Node.js</span>, <span style={{ color: "#38BDF8" }}>React + TypeScript</span> {t.about.p2End} <span style={{ color: "#3B82F6" }}>MySQL</span> {t.about.and} <span style={{ color: "#38BDF8" }}>SQL Server</span>. {t.about.p2Close}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: t.stats[0].label, value: 3, suffix: "+", sub: t.stats[0].sub },
                { label: t.stats[1].label, value: 2, suffix: "", sub: t.stats[1].sub },
                { label: t.stats[2].label, value: 3, suffix: language === "es" ? "ro" : "rd", sub: t.stats[2].sub },
                { label: t.stats[3].label, value: 10, suffix: "+", sub: t.stats[3].sub },
              ].map(s => (
                <div key={s.label} style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: 24, transition: "border-color 0.3s" }}>
                  <p style={{ fontSize: 32, fontWeight: 900, color: "white", margin: 0 }}><AnimatedCounter target={s.value} />{s.suffix}</p>
                  <p style={{ color: "#38BDF8", fontWeight: 700, fontSize: 13, margin: "4px 0 2px" }}>{s.label}</p>
                  <p style={{ color: "#475569", fontSize: 11, margin: 0 }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginTop: 48, background: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(2,132,199,0.08))", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, padding: 32 }}>
            <p style={{ color: "#38BDF8", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>{t.about.education}</p>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{ width: 48, height: 48, background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Globe size={22} style={{ color: "#3B82F6" }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 800, color: "white", fontSize: 18, margin: 0 }}>{t.about.degree}</h3>
                <p style={{ color: "#94a3b8", fontSize: 14, margin: "4px 0" }}>{t.about.school}</p>
                <p style={{ color: "#3B82F6", fontSize: 12, fontWeight: 700, margin: 0 }}>{t.about.period}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "96px 24px", position: "relative", zIndex: 1, background: "rgba(7,17,32,0.5)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: "#38BDF8", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{t.skills.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, margin: 0 }}>{t.skills.title}</h2>
          </div>

          {/* Tech badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 56 }}>
            {[
              { name: "C# / .NET", icon: cSharpIcon },
              { name: "NestJS", icon: nestIcon },
              { name: "Node.js", icon: programingIcon },
              { name: "React", icon: reactIcon },
              { name: "TypeScript", icon: typescriptIcon },
              { name: "MySQL", icon: mysqlIcon },
              { name: "SQL Server", icon: sqlServerIcon },
              { name: "PostgreSQL", icon: postgreIcon },
              { name: "REST APIs", icon: apiIcon },
             
            ].map(t => (
              <div key={t.name} style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 50, padding: "8px 18px", fontSize: 13, fontWeight: 600, color: "#cbd5e1", display: "flex", alignItems: "center", gap: 8 }}>
                <img src={t.icon} alt="" style={{ width: 18, height: 18, objectFit: "contain", flexShrink: 0 }} /> {t.name}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="skills-grid">
            {techGroups.map(g => (
              <div key={g.label} style={{ background: "rgba(7,17,32,0.8)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${g.color}20`, border: `1px solid ${g.color}44`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {g.label === "Backend" ? <Server size={16} style={{ color: g.color }} /> : g.label === "Frontend" ? <Layers size={16} style={{ color: g.color }} /> : <Database size={16} style={{ color: g.color }} />}
                  </div>
                  <span style={{ fontWeight: 800, fontSize: 16, color: "white" }}>{g.label}</span>
                </div>
                {g.items.map(s => <SkillBar key={s.name} name={s.name} level={s.level} color={g.color} />)}
              </div>
            ))}
          </div>

          {/* Languages */}
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="lang-grid">
            {t.skills.languages.map(l => (
              <div key={l.lang} style={{ background: "rgba(7,17,32,0.8)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Globe size={16} style={{ color: l.color }} />
                    <span style={{ fontWeight: 700, color: "white" }}>{l.lang}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: l.color }}>{l.level}</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${l.pct}%`, background: l.color, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio-section" style={{ padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="portfolio-heading" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: "#38BDF8", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{t.portfolio.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, margin: 0 }}>{t.portfolio.title}</h2>
          </div>
          <div className="projects-list" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {visibleProjects.map((p, i) => (
              <div key={p.title} className="project-card" style={{ background: "rgba(7,17,32,0.9)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, padding: 32, position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}>
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: i === 0 ? "linear-gradient(90deg, #1d4ed8, #0284c7)" : i === 1 ? "linear-gradient(90deg, #0284c7, #38BDF8)" : "linear-gradient(90deg, #38BDF8, #3B82F6)" }} />
                <div className="project-content" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                  <div className="project-copy" style={{ flex: 1, minWidth: 0 }}>
                    <div className="project-title-row" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                      <div className="project-icon" style={{ width: 44, height: 44, borderRadius: 12, background: i === 0 ? "linear-gradient(135deg, #1d4ed8, #0284c7)" : i === 1 ? "linear-gradient(135deg, #0284c7, #38BDF8)" : "linear-gradient(135deg, #38BDF8, #3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <ProjectIcon type={p.icon} />
                      </div>
                      <h3 className="project-title" style={{ fontSize: 20, fontWeight: 900, color: "white", margin: 0 }}>{p.title}</h3>
                    </div>
                    <p className="project-description" style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
                    <div className="project-tags" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.tags.map(t => (
                        <span className="project-tag" key={t} style={{ fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 50, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", color: "#93c5fd" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <a className="project-link" href={p.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.2)", color: "#94a3b8", fontSize: 13, fontWeight: 700, padding: "10px 20px", borderRadius: 12, textDecoration: "none", flexShrink: 0, transition: "all 0.2s", whiteSpace: "nowrap" }}>
                    <Code2 size={16} /> {t.portfolio.view} <ExternalLink size={13} style={{ color: "#475569" }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "96px 24px", position: "relative", zIndex: 1, background: "rgba(7,17,32,0.5)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#38BDF8", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{t.contact.eyebrow}</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, marginBottom: 16 }}>{t.contact.title}</h2>
          <p style={{ color: "#94a3b8", marginBottom: 40, lineHeight: 1.7 }}>
            {t.contact.intro}
          </p>
          <form className="contact-form" onSubmit={handleContactSubmit} action={formspreeEndpoint || undefined} method="POST" style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32, textAlign: "left", background: "linear-gradient(180deg, rgba(15,23,42,0.92), rgba(7,17,32,0.92))", border: "1px solid rgba(56,189,248,0.28)", borderRadius: 20, padding: 28, boxShadow: "0 20px 60px rgba(2,8,23,0.45), inset 0 1px 0 rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 20, background: "linear-gradient(135deg, rgba(56,189,248,0.12), transparent 34%, rgba(29,78,216,0.1))", opacity: 0.65 }} />
            <input type="hidden" name="_subject" value={t.contact.subject} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, position: "relative", zIndex: 1 }} className="contact-form-grid">
              <label style={{ display: "flex", flexDirection: "column", gap: 8, color: "#cbd5e1", fontSize: 13, fontWeight: 700 }}>
                {t.contact.name}
                <input className="contact-field" name="name" type="text" placeholder={t.contact.namePlaceholder} required style={{ width: "100%", border: "1px solid rgba(148,163,184,0.18)", borderRadius: 12, background: "rgba(2,8,23,0.62)", color: "white", padding: "14px 15px", fontSize: 14, outline: "none" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 8, color: "#cbd5e1", fontSize: 13, fontWeight: 700 }}>
                {t.contact.email}
                <input className="contact-field" name="email" type="email" placeholder={t.contact.emailPlaceholder} required style={{ width: "100%", border: "1px solid rgba(148,163,184,0.18)", borderRadius: 12, background: "rgba(2,8,23,0.62)", color: "white", padding: "14px 15px", fontSize: 14, outline: "none" }} />
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 8, color: "#cbd5e1", fontSize: 13, fontWeight: 700, position: "relative", zIndex: 1 }}>
              {t.contact.message}
              <textarea className="contact-field" name="message" placeholder={t.contact.messagePlaceholder} required rows={5} style={{ width: "100%", border: "1px solid rgba(148,163,184,0.18)", borderRadius: 12, background: "rgba(2,8,23,0.62)", color: "white", padding: "14px 15px", fontSize: 14, outline: "none", resize: "vertical", minHeight: 140 }} />
            </label>
            <button type="submit" disabled={formStatus === "sending"} style={{ alignSelf: "center", display: "flex", alignItems: "center", gap: 10, justifyContent: "center", background: "linear-gradient(135deg, #1d4ed8, #0284c7)", color: "white", fontWeight: 800, padding: "14px 34px", borderRadius: 50, fontSize: 15, border: "1px solid rgba(147,197,253,0.35)", cursor: formStatus === "sending" ? "not-allowed" : "pointer", boxShadow: "0 0 30px rgba(59,130,246,0.35)", opacity: formStatus === "sending" ? 0.72 : 1, position: "relative", zIndex: 1 }}>
              <Mail size={18} /> {formStatus === "sending" ? t.contact.sending : t.contact.send}
            </button>
            {formMessage && (
              <p style={{ color: formStatus === "success" ? "#86efac" : "#fca5a5", textAlign: "center", fontSize: 13, fontWeight: 700, margin: "2px 0 0", position: "relative", zIndex: 1 }}>
                {formMessage}
              </p>
            )}
          </form>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          
            <div className="contact-actions" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <a href="mailto:brandon.aguirre.cedeno@est.una.ac.cr" style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(56,189,248,0.35)", color: "#e0f2fe", fontWeight: 700, padding: "12px 24px", borderRadius: 50, fontSize: 15, textDecoration: "none", background: "rgba(56,189,248,0.08)" }}>
                <Mail size={18} /> Email
              </a>
              <a href="https://wa.me/85325525" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(37,211,102,0.35)", color: "#d1fae5", fontWeight: 700, padding: "12px 24px", borderRadius: 50, fontSize: 15, textDecoration: "none", background: "rgba(37,211,102,0.08)" }}>
                <img src={whatsappIcon} alt="" style={{ width: 20, height: 20, objectFit: "contain" }} /> WhatsApp
              </a>
              <a href="https://www.instagram.com/brandon_aguirrec/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(236,72,153,0.35)", color: "#fce7f3", fontWeight: 700, padding: "12px 24px", borderRadius: 50, fontSize: 15, textDecoration: "none", background: "rgba(236,72,153,0.08)" }}>
                <img src={instagramIcon} alt="" style={{ width: 20, height: 20, objectFit: "contain" }} /> Instagram
              </a>
              <a href="https://github.com/Brandonaguicede" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(255,255,255,0.15)", color: "#cbd5e1", fontWeight: 700, padding: "12px 24px", borderRadius: 50, fontSize: 15, textDecoration: "none", background: "rgba(255,255,255,0.04)" }}>
                <img src={githubIcon} alt="" style={{ width: 20, height: 20, objectFit: "contain" }} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/brandon-aguirre-396113366/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(10,102,194,0.35)", color: "#dbeafe", fontWeight: 700, padding: "12px 24px", borderRadius: 50, fontSize: 15, textDecoration: "none", background: "rgba(10,102,194,0.08)" }}>
                <img src={linkedinIcon} alt="" style={{ width: 20, height: 20, objectFit: "contain" }} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(59,130,246,0.15)", padding: "32px 24px", textAlign: "center", color: "#475569", fontSize: 14, position: "relative", zIndex: 1 }}>
        <p style={{ margin: 0 }}>© 2025 <span style={{ color: "#38BDF8", fontWeight: 700 }}>Brandon Aguirre Cedeño</span></p>
      </footer>

      <style>{`
        .hero-name {
          display: inline-flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0 14px;
          max-width: 100%;
          overflow: visible;
          padding-bottom: 4px;
        }

        .hero-name span {
          display: block;
          line-height: 1.16;
          overflow-wrap: anywhere;
        }

        button,
        a[href] {
          transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, filter 0.2s, transform 0.2s;
        }

        button:hover,
        button:focus-visible,
        a[href]:hover,
        a[href]:focus-visible {
          color: #f0f9ff !important;
          border-color: rgba(56, 189, 248, 0.6) !important;
          box-shadow: 0 0 28px rgba(56, 189, 248, 0.28) !important;
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .nav-link:hover,
        .nav-link:focus-visible {
          color: #f0f9ff !important;
          background: rgba(56, 189, 248, 0.12) !important;
          transform: translateY(-2px);
        }

        .contact-field {
          transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
        }

        .contact-field:focus {
          border-color: rgba(56, 189, 248, 0.7) !important;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.12);
          background: rgba(15, 23, 42, 0.95) !important;
        }

        .contact-field::placeholder {
          color: #64748b;
        }

        .theme-light nav {
          background: rgba(248, 250, 252, 0.92) !important;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08) !important;
        }

        .theme-light h1,
        .theme-light h2,
        .theme-light h3 {
          color: #0f172a !important;
        }

        .theme-light .contact-form label {
          color: #475569 !important;
        }

        .theme-light .nav-link,
        .theme-light .nav-control {
          color: #334155 !important;
        }

        .theme-light [style*="rgba(15,23,42"],
        .theme-light [style*="rgba(7,17,32"],
        .theme-light [style*="#071120"] {
          background: rgba(255, 255, 255, 0.82) !important;
          border-color: rgba(15, 23, 42, 0.1) !important;
        }

        .theme-light .project-card,
        .theme-light .contact-form {
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(241,245,249,0.94)) !important;
          border-color: rgba(14, 165, 233, 0.28) !important;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255,255,255,0.75) !important;
        }

        .theme-light .contact-field {
          background: rgba(255, 255, 255, 0.86) !important;
          color: #0f172a !important;
          border-color: rgba(15, 23, 42, 0.14) !important;
        }

        .theme-light .contact-field:focus {
          background: #ffffff !important;
        }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-8px); } }
        @media (max-width: 768px) {
          .hero-name { gap: 0 10px; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
          .contact-form { padding: 22px !important; border-radius: 16px !important; }
          .portfolio-section { padding: 72px 16px !important; }
          .portfolio-heading { margin-bottom: 36px !important; }
          .projects-list { gap: 18px !important; }
          .project-card { border-radius: 16px !important; padding: 22px !important; }
          .project-content { flex-direction: column !important; gap: 20px !important; }
          .project-copy { width: 100% !important; }
          .project-title-row { align-items: flex-start !important; gap: 12px !important; }
          .project-icon { width: 40px !important; height: 40px !important; border-radius: 10px !important; }
          .project-title { font-size: 18px !important; line-height: 1.25 !important; overflow-wrap: anywhere; }
          .project-description { font-size: 14px !important; line-height: 1.65 !important; margin-bottom: 18px !important; }
          .project-tags { gap: 7px !important; }
          .project-tag { font-size: 11px !important; padding: 4px 10px !important; }
          .project-link { width: 100% !important; min-height: 44px !important; }
          .contact-actions { width: 100% !important; }
          .contact-actions a { width: min(100%, 260px) !important; justify-content: center !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-column { justify-content: center !important; }
          .hero-photo-card { width: min(78vw, 300px) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .lang-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .portfolio-section { padding: 84px 24px !important; }
          .project-card { padding: 28px !important; }
          .project-content { gap: 18px !important; }
          .project-link { align-self: flex-start !important; }
        }
        @media (max-width: 420px) {
          .project-card { padding: 18px !important; }
          .project-title-row { flex-direction: column !important; }
          .project-title { font-size: 17px !important; }
          .project-tag { max-width: 100%; overflow-wrap: anywhere; }
        }
      `}</style>
    </div>
  );
}
