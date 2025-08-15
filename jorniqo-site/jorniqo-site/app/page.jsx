'use client';
import './globals.css';
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Wand2,
  Zap,
  ChartBar,
  Gauge,
  Palette,
  Star,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ArrowRight,
  ShieldCheck,
  Check,
  PhoneCall,
  Mail,
} from "lucide-react";

// JORNIQO — Single-file React landing page (MVP)

const brand = {
  name: "jorniqo",
  taglineEN: "Strategy, Automation & Creative Tech",
  taglineES: "Estrategia, Automatización y Tecnología Creativa",
  subEN:
    "We help schools and builders streamline operations, grow revenue, and ship standout digital experiences.",
  subES:
    "Ayudamos a escuelas y constructoras a optimizar operaciones, crecer ingresos y crear experiencias digitales memorables.",
  primaryCTA: {
    labelEN: "Book a strategy call",
    labelES: "Agenda una llamada",
    href: "https://calendly.com/your-link/30min", // TODO: replace with your Calendly link
  },
  secondaryCTA: {
    labelEN: "See our work",
    labelES: "Ver proyectos",
    href: "#work",
  },
  contact: {
    email: "hello@jorniqo.com", // TODO: replace
    phone: "+1 (555) 555-5555", // TODO: replace
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "X", href: "https://x.com" },
  ],
};

const services = [
  {
    icon: Rocket,
    titleEN: "AI Strategy & Roadmaps",
    titleES: "Estrategia de IA y Roadmaps",
    descEN: "Identify highest-ROI use cases and ship an adoption plan in weeks, not months.",
    descES: "Identificamos casos de uso con mayor ROI y lanzamos un plan de adopción en semanas, no meses.",
  },
  {
    icon: Wand2,
    titleEN: "Automation & CRM",
    titleES: "Automatización y CRM",
    descEN: "From lead capture to follow-up, reduce busywork with no-code and custom AI ops.",
    descES: "Desde captura de leads hasta seguimiento, reducimos tareas repetitivas con automatización y IA.",
  },
  {
    icon: ChartBar,
    titleEN: "Admissions & RevOps",
    titleES: "Admisiones y RevOps",
    descEN: "Boost inquiry-to-enrollment with data-driven scripts, content, and funnels.",
    descES: "Mejoramos de consulta a matrícula con guiones, contenido y embudos basados en datos.",
  },
  {
    icon: Gauge,
    titleEN: "Project Controls (P6)",
    titleES: "Controles de Proyecto (P6)",
    descEN: "Scheduling, cost, and risk support for small teams up to multi-site rollouts.",
    descES: "Programación, costos y riesgos para equipos pequeños hasta despliegues multi-sitio.",
  },
  {
    icon: Palette,
    titleEN: "Brand, Web & Content",
    titleES: "Marca, Web y Contenido",
    descEN: "Design systems, high-conversion sites, and short-form video that converts.",
    descES: "Sistemas de diseño, sitios web de alta conversión y video corto que convierte.",
  },
  {
    icon: Zap,
    titleEN: "Training & Enablement",
    titleES: "Formación y Habilitación",
    descEN: "Hands-on workshops and playbooks so your team can sustain the gains.",
    descES: "Talleres prácticos y playbooks para sostener las mejoras en tu equipo.",
  },
];

const work = [
  {
    title: "Lead Nurture Overhaul",
    metric: "+31% inquiries → enrollments",
    blurb:
      "Rebuilt CRM automations and scripts for a technical college; improved speed-to-lead and follow-ups.",
  },
  {
    title: "Scheduling PMO in 6 Weeks",
    metric: "-18% program delays",
    blurb:
      "Deployed P6 templates and controls for a contractor; improved forecasting and stakeholder visibility.",
  },
  {
    title: "Brand & Launch Sprint",
    metric: "3-week go-live",
    blurb:
      "Shipped a conversion-focused site and content system to support a new service line launch.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/ project",
    features: [
      "Strategy call + roadmap",
      "1 automation or landing page",
      "Playbook + quick training",
      "1 revision cycle",
    ],
    cta: "Get Starter",
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/ month",
    popular: true,
    features: [
      "Quarterly roadmap",
      "3-5 automations & content",
      "CRM + analytics tuning",
      "Priority support",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Custom",
    price: "Let's talk",
    period: "",
    features: [
      "Dedicated scope",
      "PMO / P6 enablement",
      "Onsite or remote",
      "SLA + governance",
    ],
    cta: "Discuss Custom",
  },
];

const testimonials = [
  {
    quote:
      "They rebuilt our funnels and follow-up in days. The team finally has a system that scales.",
    author: "Director of Admissions",
    org: "Technical College",
  },
  {
    quote:
      "Clear roadmaps, quick wins, and zero fluff. Our scheduling and forecasting are finally predictable.",
    author: "Operations Manager",
    org: "General Contractor",
  },
  {
    quote:
      "Brand, content, and automations launched in under a month. Immediate lift in qualified leads.",
    author: "Founder",
    org: "Services Startup",
  },
];

const navItems = [
  { labelEN: "Services", labelES: "Servicios", href: "#services" },
  { labelEN: "Work", labelES: "Proyectos", href: "#work" },
  { labelEN: "Pricing", labelES: "Precios", href: "#pricing" },
  { labelEN: "About", labelES: "Nosotros", href: "#about" },
  { labelEN: "Contact", labelES: "Contacto", href: "#contact" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function JorniqoSite() {
  const [lang, setLang] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = globalThis?.localStorage?.getItem("jorniqo_theme");
    if (stored) setTheme(stored);
  }, []);
  useEffect(() => {
    globalThis?.localStorage?.setItem("jorniqo_theme", theme);
  }, [theme]);

  const t = useMemo(
    () => ({
      heroTitle:
        lang === "EN"
          ? "Ship smarter. Automate faster. Grow with clarity."
          : "Entrega con inteligencia. Automatiza más rápido. Crece con claridad.",
      heroSub: lang === "EN" ? brand.subEN : brand.subES,
      ctaPrimary: lang === "EN" ? brand.primaryCTA.labelEN : brand.primaryCTA.labelES,
      ctaSecondary:
        lang === "EN" ? brand.secondaryCTA.labelEN : brand.secondaryCTA.labelES,
      servicesTitle: lang === "EN" ? "What we do" : "Qué hacemos",
      workTitle: lang === "EN" ? "Selected work" : "Proyectos destacados",
      pricingTitle: lang === "EN" ? "Pricing" : "Precios",
      testisTitle: lang === "EN" ? "What clients say" : "Lo que dicen los clientes",
      aboutTitle: lang === "EN" ? "About" : "Nosotros",
      contactTitle: lang === "EN" ? "Contact" : "Contacto",
      contactLead:
        lang === "EN"
          ? "Tell us about your goals. We'll reply within 1 business day."
          : "Cuéntanos tus objetivos. Respondemos en 1 día hábil.",
      formName: lang === "EN" ? "Full name" : "Nombre completo",
      formEmail: lang === "EN" ? "Email" : "Correo",
      formMsg: lang === "EN" ? "Message" : "Mensaje",
      formSend: lang === "EN" ? "Send message" : "Enviar mensaje",
    }),
    [lang]
  );

  return (
    <div className={cn(theme === "dark" && "dark")}>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {/* NAV */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:supports-[backdrop-filter]:bg-neutral-950/60 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <div className="relative">
                  <span className="text-2xl font-black tracking-tight">
                    {brand.name}
                  </span>
                  <span className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 animate-pulse" />
                </div>
                <span className="hidden md:inline text-sm text-neutral-500 dark:text-neutral-400">
                  {lang === "EN" ? brand.taglineEN : brand.taglineES}
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    {lang === "EN" ? n.labelEN : n.labelES}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  aria-label="Language"
                  onClick={() => setLang((l) => (l === "EN" ? "ES" : "EN"))}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  <Globe className="h-4 w-4" /> {lang}
                </button>
                <button
                  aria-label="Theme"
                  onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </button>
                <a
                  href={brand.primaryCTA.href}
                  className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  <PhoneCall className="h-4 w-4" />
                  {lang === "EN" ? brand.primaryCTA.labelEN : brand.primaryCTA.labelES}
                </a>
                <button
                  className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800"
                  onClick={() => setMobileOpen((o) => !o)}
                  aria-label="Menu"
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {mobileOpen && (
              <div className="md:hidden pb-4">
                <nav className="grid gap-2">
                  {navItems.map((n) => (
                    <a
                      key={n.href}
                      href={n.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                      {lang === "EN" ? n.labelEN : n.labelES}
                    </a>
                  ))}
                  <a
                    href={brand.primaryCTA.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-3 py-2 text-sm font-semibold text-white"
                  >
                    <PhoneCall className="h-4 w-4" />
                    {lang === "EN" ? brand.primaryCTA.labelEN : brand.primaryCTA.labelES}
                  </a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(600px_circle_at_50%_-10%,theme(colors.indigo.500)/.25,transparent_60%),radial-gradient(400px_circle_at_90%_30%,theme(colors.fuchsia.500)/.2,transparent_60%),radial-gradient(500px_circle_at_10%_20%,theme(colors.cyan.400)/.2,transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
                >
                  <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {t.heroTitle}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl"
                >
                  {t.heroSub}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <a
                    href={brand.primaryCTA.href}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90"
                  >
                    {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={brand.secondaryCTA.href}
                    className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900"
                  >
                    {t.ctaSecondary}
                  </a>
                </motion.div>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> 45+ large-scale projects
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" /> Days, not months
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" /> Hands-on training
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/20 blur-2xl" />
                  <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-3">
                      {[Rocket, Wand2, ChartBar, Gauge, Palette, Zap].map((Icon, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4"
                        >
                          <Icon className="h-6 w-6" />
                          <div className="mt-3 text-sm font-semibold">
                            {services[i].titleEN}
                          </div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400">
                            {services[i].descEN}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-10 border-y border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Trusted across education & construction
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-neutral-400">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 text-center text-xs"
                >
                  Logo {i + 1}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t.servicesTitle}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              {lang === "EN"
                ? "We focus on high-leverage work that moves enrollment, schedule, and revenue metrics."
                : "Nos enfocamos en trabajo de alto impacto que mueve matrícula, cronograma e ingresos."}
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6"
                >
                  <s.icon className="h-6 w-6" />
                  <div className="mt-4 text-lg font-semibold">
                    {lang === "EN" ? s.titleEN : s.titleES}
                  </div>
                  <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {lang === "EN" ? s.descEN : s.descES}
                  </div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                    {lang === "EN" ? "Let's discuss" : "Conversemos"} <ChevronRight className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="py-20 bg-neutral-50 dark:bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t.workTitle}
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {work.map((w, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                  <div className="text-sm uppercase tracking-widest text-neutral-500">{w.metric}</div>
                  <div className="mt-2 text-lg font-semibold">{w.title}</div>
                  <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{w.blurb}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t.pricingTitle}
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {pricing.map((p, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border p-6 bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800",
                    p.popular && "ring-2 ring-indigo-500"
                  )}
                >
                  {p.popular && (
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-indigo-600/10 px-2 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                      <Star className="h-3 w-3" /> Most popular
                    </div>
                  )}
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-1 text-3xl font-black tracking-tight">
                    {p.price} <span className="text-sm font-medium text-neutral-500">{p.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-indigo-600" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={brand.primaryCTA.href}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 font-semibold hover:opacity-90"
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t.testisTitle}
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                  <p className="text-neutral-700 dark:text-neutral-300">“{t.quote}”</p>
                  <div className="mt-4 text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-neutral-500">{t.org}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t.aboutTitle}
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                <p className="text-neutral-700 dark:text-neutral-300">
                  {lang === "EN"
                    ? "We blend admissions, operations, and creative to solve real problems fast. Our team has led planning and delivery across education and construction—from student recruitment playbooks to Primavera P6 enablement and digital content that converts."
                    : "Mezclamos admisiones, operaciones y creatividad para resolver problemas reales rápido. Hemos liderado planificación y entrega en educación y construcción: playbooks de reclutamiento, habilitación en Primavera P6 y contenido digital que convierte."}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-600" /> 10+ years across ops, admissions, and PMO</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-600" /> Hands-on build, not just slides</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-indigo-600" /> Bilingual delivery (EN/ES)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                <h3 className="text-lg font-semibold">Focus areas</h3>
                <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Admissions systems",
                    "RevOps & content",
                    "CRM automations",
                    "P6 templates",
                    "Dashboards & KPIs",
                    "Brand & web",
                  ].map((tag, i) => (
                    <span key={i} className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 text-sm">
                  <div className="font-semibold">Availability</div>
                  <div className="text-neutral-600 dark:text-neutral-300">2 project slots this month</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t.contactTitle}
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">{t.contactLead}</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                <ContactForm lang={lang} />
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                <div className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> {brand.contact.phone}</div>
                <a className="mt-2 flex items-center gap-2" href={`mailto:${brand.contact.email}`}><Mail className="h-4 w-4" /> {brand.contact.email}</a>
                <div className="mt-4 h-px bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-4 grid gap-2 text-sm">
                  {brand.social.map((s, i) => (
                    <a key={i} className="underline underline-offset-4" href={s.href}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-neutral-500">
                © {new Date().getFullYear()} {brand.name}. All rights reserved.
              </div>
              <div className="text-xs text-neutral-500 flex gap-4">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ContactForm({ lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const emailOk = /.+@.+\..+/.test(email);
    if (!name || !email || !msg) return setError(lang === "EN" ? "Please complete all fields." : "Por favor completa todos los campos.");
    if (!emailOk) return setError(lang === "EN" ? "Enter a valid email." : "Correo inválido.");
    try {
      const payload = { name, email, msg, ts: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem("jorniqo_leads") || "[]");
      existing.push(payload);
      localStorage.setItem("jorniqo_leads", JSON.stringify(existing));
      setSent(true);
      setName("");
      setEmail("");
      setMsg("");
    } catch (err) {
      console.error(err);
      setError(lang === "EN" ? "Something went wrong. Try again." : "Ocurrió un error. Intenta de nuevo.");
    }
  };

  if (sent) {
    return (
      <div className="rounded-xl bg-neutral-50 dark:bg-neutral-900 p-6 text-sm">
        <div className="text-lg font-semibold">{lang === "EN" ? "Thanks!" : "¡Gracias!"}</div>
        <p className="mt-1 text-neutral-600 dark:text-neutral-300">
          {lang === "EN"
            ? "We received your message. We'll reply soon."
            : "Recibimos tu mensaje. Te responderemos pronto."}
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          {lang === "EN" ? "Send another" : "Enviar otro"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <label className="grid gap-1">
        <span className="text-sm font-medium">{lang === "EN" ? "Full name" : "Nombre completo"}</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={lang === "EN" ? "Jane Doe" : "Juan Pérez"}
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm font-medium">{lang === "EN" ? "Email" : "Correo"}</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm font-medium">{lang === "EN" ? "Message" : "Mensaje"}</span>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={5}
          placeholder={
            lang === "EN"
              ? "Tell us about your goals, timeline, and budget."
              : "Cuéntanos tus metas, plazos y presupuesto."
          }
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </label>
      {error && <div className="text-sm text-red-600 dark:text-red-400">{error}</div>}
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 font-semibold hover:opacity-90"
      >
        <Mail className="h-4 w-4" /> {lang === "EN" ? "Send message" : "Enviar mensaje"}
      </button>
      <p className="text-xs text-neutral-500">
        {lang === "EN"
          ? "By submitting, you consent to be contacted about services and updates."
          : "Al enviar, aceptas ser contactado sobre servicios y novedades."}
      </p>
    </form>
  );
}
