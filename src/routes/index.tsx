import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import {
  BookOpenCheck,
  Wallet,
  Users,
  FileSpreadsheet,
  Receipt,
  Briefcase,
  Building2,
  HeartHandshake,
  Factory,
  ShieldCheck,
  UserCheck,
  MessagesSquare,
  Archive,
  Repeat,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  Check,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const NAV = [
  { href: "#domu", label: "Domů" },
  { href: "#o-mne", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#pro-koho", label: "Pro koho" },
  { href: "#spoluprace", label: "Spolupráce" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between py-4">
        <a href="#domu" className="flex items-center gap-2.5 min-w-0">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy text-primary-foreground font-display font-semibold">
            LK
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-semibold text-navy">
              Lenka Krystynová
            </span>
            <span className="truncate text-xs text-muted-foreground">Účetní služby</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-navy"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-emerald px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-emerald transition-transform hover:-translate-y-0.5"
        >
          Nezávazná poptávka
          <ArrowRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border text-navy"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              Nezávazná poptávka
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="domu" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 0%, oklch(0.48 0.12 160 / 0.08), transparent 60%), radial-gradient(ellipse 60% 60% at 0% 100%, oklch(0.32 0.06 255 / 0.06), transparent 60%)",
        }}
      />
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/5 px-3.5 py-1.5 text-xs font-medium text-emerald">
            <Sparkles className="h-3.5 w-3.5" />
            Více než 20 let zkušeností
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
            Účetnictví bez zbytečných starostí.
            <span className="block text-emerald">Pro OSVČ, s.r.o. i spolky.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Více než 20 let zkušeností s vedením účetnictví, mzdovou a personální
            agendou. Individuální přístup, pečlivost a dlouhodobá spolupráce.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-emerald transition-transform hover:-translate-y-0.5"
            >
              Kontaktovat
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#sluzby"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Naše služby
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "20+", v: "let praxe" },
              { k: "4×", v: "měsíčně komunikace" },
              { k: "ČR", v: "osobně i online" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold text-navy">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Illustration card */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.06 255 / 0.08), oklch(0.48 0.12 160 / 0.08))",
            }}
          />
          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-navy/40" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Přehled klienta
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-secondary/70 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Stav účetnictví
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-navy">
                Vše v pořádku
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald">
                <Check className="h-4 w-4" /> Vše zpracováno
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {[
                { icon: BookOpenCheck, label: "Vedení účetnictví", val: "Aktivní klienti" },
                { icon: Wallet, label: "Mzdová agenda", val: "Průběžně" },
                { icon: Archive, label: "Archivace dokladů", val: "Průběžně" },
              ].map((r) => (
                <li
                  key={r.label}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-navy">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald/10 text-emerald">
                      <r.icon className="h-4 w-4" />
                    </span>
                    {r.label}
                  </span>
                  <span className="text-xs text-muted-foreground">{r.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="o-mne" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="rounded-[1.75rem] border border-border bg-gradient-to-br from-secondary to-background p-10 shadow-soft">
            <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-navy font-display text-5xl font-semibold text-primary-foreground">
              LK
            </div>
            <p className="mt-6 text-center font-display text-xl font-semibold text-navy">
              Lenka Krystynová
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Účetní · IČO 24986801
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["OSVČ", "s.r.o.", "Spolky", "Malé firmy"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-navy"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="O mně" title="Pečlivost, přesnost a individuální přístup." />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Jmenuji se <span className="font-semibold text-navy">Lenka Krystynová</span> a
              nabízím profesionální účetní služby podnikatelům, společnostem i spolkům.
              Zakládám si na pečlivosti, přesnosti a individuálním přístupu ke každému klientovi.
            </p>
            <p>
              Spolupráce může probíhat osobně i online, díky čemuž mohu poskytovat své služby
              klientům z celé České republiky.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Více než 20 let zkušeností",
              "Osobní i online spolupráce",
              "Klienti z celé ČR",
              "Dlouhodobé partnerství",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-navy"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: BookOpenCheck,
    title: "Vedení účetnictví",
    desc: "Kompletní vedení účetnictví, evidence účetních dokladů, zpracování účetních operací, kontrola účetnictví a archivace účetních dokladů.",
  },
  {
    icon: Wallet,
    title: "Mzdová agenda",
    desc: "Zpracování mezd, výpočty mezd, mzdová evidence a kompletní mzdová administrativa.",
  },
  {
    icon: Users,
    title: "Personální agenda",
    desc: "Vedení personální dokumentace, evidence zaměstnanců a pracovněprávní administrativa.",
  },
  {
    icon: FileSpreadsheet,
    title: "Podklady pro daňová přiznání",
    desc: "Příprava přehledných a úplných podkladů potřebných pro zpracování daňových přiznání.",
  },
  {
    icon: Receipt,
    title: "Vedení daňové evidence",
    desc: "Evidence příjmů a výdajů, majetku a závazků pro OSVČ, kteří nevedou účetnictví, ale daňovou evidenci dle zákona o daních z příjmů.",
  },
];

function Services() {
  return (
    <section id="sluzby" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          eyebrow="Služby"
          title="Kompletní účetní servis pod jednou střechou."
          desc="Vyberte si služby přesně podle potřeb vašeho podnikání. Zajistím vše potřebné s důrazem na přesnost a včasné termíny."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald group-hover:text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const AUDIENCE = [
  {
    icon: Briefcase,
    title: "OSVČ",
    desc: "Kompletní vedení účetnictví, mzdová agenda a administrativní podpora pro osoby samostatně výdělečně činné.",
  },
  {
    icon: Building2,
    title: "Společnosti s ručením omezeným (s.r.o.)",
    desc: "Komplexní účetní služby, zpracování účetnictví, mezd i personální agendy.",
  },
  {
    icon: HeartHandshake,
    title: "Spolky a neziskové organizace",
    desc: "Účetní služby přizpůsobené specifickým potřebám spolků a neziskových organizací.",
  },
  {
    icon: Factory,
    title: "Malé a střední firmy",
    desc: "Dlouhodobá účetní spolupráce založená na přesnosti, spolehlivosti a individuálním přístupu.",
  },
];

function Audience() {
  return (
    <section id="pro-koho" className="py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          eyebrow="Pro koho"
          title="S kým nejčastěji spolupracuji."
          center
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map((a) => (
            <article
              key={a.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-primary-foreground">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: Sparkles, title: "Více než 20 let zkušeností", desc: "Dlouholetá praxe napříč obory." },
  { icon: UserCheck, title: "Individuální přístup", desc: "Řešení šitá na míru každému klientovi." },
  { icon: MessagesSquare, title: "Pravidelná komunikace", desc: "Minimálně 4× měsíčně nebo dle potřeby." },
  { icon: Repeat, title: "Osobně i elektronicky", desc: "Doklady předáte, jak vám to vyhovuje." },
  { icon: Archive, title: "Pečlivá archivace", desc: "Bezpečné uložení všech účetních dokumentů." },
  { icon: ShieldCheck, title: "Spolehlivost", desc: "Dlouhodobá a bezstarostná spolupráce." },
];

function WhyMe() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-primary-foreground md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(1 0 0) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-soft">
            Proč si mě vybrat
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Šest důvodů pro klidné účetnictví.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald text-accent-foreground">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { title: "Úvodní konzultace", desc: "Poznáme se, projdeme vaše potřeby a domluvíme rozsah spolupráce." },
  { title: "Předání účetních dokladů", desc: "Doklady předáte osobně, nebo je pohodlně pošlete elektronicky." },
  { title: "Pravidelné zpracování účetnictví", desc: "Vaše účetnictví vedu průběžně a s důrazem na přesnost." },
  { title: "Pravidelná komunikace", desc: "Ozvu se minimálně čtyřikrát měsíčně, nebo kdykoli je potřeba." },
  { title: "Archivace účetních dokladů", desc: "Doklady pečlivě archivuji a máte je vždy k dispozici." },
];

function Process() {
  return (
    <section id="spoluprace" className="py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          eyebrow="Spolupráce"
          title="Jak spolupráce probíhá."
          desc="Pět jasných kroků od prvního kontaktu až po dlouhodobou bezstarostnou spolupráci."
          center
        />
        <ol className="relative mx-auto mt-14 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-emerald via-emerald/40 to-transparent md:left-8"
          />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0 md:gap-8">
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald font-display text-lg font-semibold text-accent-foreground shadow-emerald md:h-16 md:w-16 md:text-xl">
                {i + 1}
              </div>
              <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
                <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Jak lze předávat doklady?",
    a: "Doklady lze předávat osobně nebo elektronicky – vždy podle toho, co vám nejlépe vyhovuje.",
  },
  {
    q: "Jak často spolu komunikujeme?",
    a: "Minimálně čtyřikrát měsíčně, případně kdykoli podle aktuálních potřeb klienta.",
  },
  {
    q: "Působíte pouze v okolí Holčovic?",
    a: "Ne. Díky online spolupráci poskytuji účetní služby klientům po celé České republice.",
  },
  {
    q: "Zpracováváte daňová přiznání?",
    a: "Ne. Připravuji pouze podklady potřebné pro jejich zpracování.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          eyebrow="FAQ"
          title="Nejčastější dotazy."
          center
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-navy sm:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-navy">Jméno a příjmení</span>
          <input
            required
            type="text"
            className="mt-1.5 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy">Telefon</span>
          <input
            type="tel"
            className="mt-1.5 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-navy">E-mail</span>
        <input
          required
          type="email"
          className="mt-1.5 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-navy">Zpráva</span>
        <textarea
          required
          rows={5}
          className="mt-1.5 block w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          placeholder="Napište mi, s čím vám mohu pomoci..."
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-emerald transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Odeslat poptávku
        <ArrowRight className="h-4 w-4" />
      </button>
      {sent && (
        <p className="text-sm font-medium text-emerald">
          Děkuji, ozvu se vám co nejdříve.
        </p>
      )}
    </form>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionTitle
            eyebrow="Kontakt"
            title="Ozvěte se – rád(a) vám pomohu."
            desc="Neváhejte mě kontaktovat s jakýmkoli dotazem. Ozvu se vám zpět co nejdříve."
          />

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg font-semibold text-navy">
                Lenka Krystynová
              </p>
              <p className="text-sm text-muted-foreground">Účetní služby · IČO 24986801</p>
            </div>

            <a
              href="tel:+420732328715"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-emerald"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Telefon
                </span>
                <span className="block truncate font-medium text-navy">+420 732 328 715</span>
              </span>
            </a>

            <a
              href="mailto:e-ucetnictvi@email.cz"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-emerald"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  E-mail
                </span>
                <span className="block truncate font-medium text-navy">
                  e-ucetnictvi@email.cz
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Adresa
                </span>
                <span className="block font-medium text-navy">
                  Hejnov 29, 793 71 Holčovice
                </span>
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Mapa – Hejnov 29, Holčovice"
                src="https://www.google.com/maps?q=Hejnov+29,+793+71+Holčovice&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy font-display font-semibold text-primary-foreground">
              LK
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display font-semibold text-navy">
                Lenka Krystynová
              </span>
              <span className="text-xs text-muted-foreground">Účetní služby</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Profesionální účetní služby pro OSVČ, s.r.o., spolky a malé i střední firmy.
            Osobně i online po celé ČR.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-navy">Navigace</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-muted-foreground transition-colors hover:text-emerald"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-navy">Kontakt</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="tel:+420732328715" className="hover:text-emerald">
                +420 732 328 715
              </a>
            </li>
            <li>
              <a href="mailto:e-ucetnictvi@email.cz" className="hover:text-emerald">
                e-ucetnictvi@email.cz
              </a>
            </li>
            <li>Hejnov 29, 793 71 Holčovice</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-navy">Fakturační údaje</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Lenka Krystynová</li>
            <li>IČO: 24986801</li>
            <li>Hejnov 29, 793 71 Holčovice</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Lenka Krystynová. Všechna práva vyhrazena.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#zasady-ochrany-osobnich-udaju" className="transition-colors hover:text-emerald">
              Zásady ochrany osobních údajů
            </a>
            <span aria-hidden className="hidden sm:inline">·</span>
            <p>Účetní služby pro OSVČ, s.r.o. a spolky.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Audience />
        <WhyMe />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
