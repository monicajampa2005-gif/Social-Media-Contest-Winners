import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { Search, Trophy } from "lucide-react";
import heroImg from "@/assets/hero-graduation.jpg";
import logoImg from "@/assets/logo.png";
import { Navbar } from "@/components/grad/Navbar";
import { Footer } from "@/components/grad/Footer";
import { WinnerCategory } from "@/components/grad/WinnerCategory";
import { awardCategories } from "@/data/awardCategories";
import { winners, winnerCount } from "@/data/winners";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Media Contest Winners 2026 – Telugu AI Bootcamp | Super AI Academy" },
      { name: "description", content: `Meet the ${winners.length} winners of the Telugu AI Bootcamp Social Media Contest across 9 award categories, by Super AI Academy.` },
      { property: "og:title", content: "Social Media Contest Winners 2026 – Telugu AI Bootcamp" },
      { property: "og:description", content: `Meet our ${winners.length} champions across 9 award categories.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [["Home", "#home"], ["Award Categories", "#categories"], ["Winners", "#winners"]] as const;

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-gold animate-floaty"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animationDelay: `${(i % 7) * 0.8}s` }} />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return winners.filter((w) => (filter === "all" || w.category === filter) && (!q || w.name.toLowerCase().includes(q)));
  }, [query, filter]);

  return (
    <div className="min-h-screen">
      <Navbar links={NAV_LINKS} />

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <img src={heroImg} alt="Golden trophy on a glowing stage" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <Particles />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <img src={logoImg} alt="Super AI Academy" width={595} height={162} className="mx-auto mb-6 h-14 w-auto md:h-16" />
          <p className="mb-6 inline-block rounded-full glass px-4 py-1.5 text-sm text-gold">Telugu AI Bootcamp · Organized by Super AI Academy</p>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            SOCIAL MEDIA CONTEST<br /><span className="text-gold-gradient">WINNERS 2026</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Celebrating the creators who turned AI skills into standout content — across {awardCategories.length} award categories.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#winners" className="rounded-full bg-gold-gradient px-7 py-3 font-semibold text-accent-foreground shadow-gold transition-transform hover:scale-105">Explore Our Winners</a>
            <a href="#categories" className="rounded-full border border-primary/60 bg-brand-gradient px-7 py-3 font-semibold shadow-glow transition-transform hover:scale-105">Award Categories</a>
          </div>
          <p className="mt-10 font-display text-xl"><span className="text-gold-gradient font-bold">{winners.length} Winners</span> <span className="text-muted-foreground">|</span> <span className="text-brand-gradient font-bold">{awardCategories.length} Award Categories</span></p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-24">
        <SectionTitle eyebrow="Award Categories" title="Celebrating Excellence – Our Award Categories" sub={`${winners.length} Winners | ${awardCategories.length} Award Categories`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awardCategories.map((c, i) => {
            const Ico = (Icons as unknown as Record<string, typeof Trophy>)[c.icon] ?? Trophy;
            return (
              <div key={c.slug} className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gradient opacity-30 blur-2xl transition-opacity group-hover:opacity-60" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-accent-foreground shadow-gold"><Ico className="h-7 w-7" /></span>
                    <span className="font-display text-4xl font-bold text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{c.name}</h3>
                  <p className="mt-1 text-gold">{winnerCount(c.name)} Winners</p>
                  <a href={`#winners-${c.slug}`} onClick={() => { setFilter("all"); setQuery(""); }} className="mt-5 inline-block rounded-full border border-gold/50 px-4 py-1.5 text-sm text-gold transition-colors hover:bg-gold hover:text-accent-foreground">View Winners</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Winners */}
      <section id="winners" className="mx-auto max-w-7xl px-4 py-24">
        <SectionTitle eyebrow="Winners Showcase" title="Meet Our Champions" sub="Every achievement tells a story. Every winner represents creativity, dedication, and the courage to innovate." />
        <div className="mb-10 glass rounded-2xl p-3">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search winners by name..." className="w-full rounded-xl border border-input bg-background/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-gold" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button onClick={() => setFilter("all")} className={`shrink-0 rounded-full px-3 py-1 text-xs ${filter === "all" ? "bg-gold-gradient text-accent-foreground" : "border border-border text-muted-foreground"}`}>All ({winners.length})</button>
            {awardCategories.map((c) => (
              <button key={c.slug} onClick={() => { setFilter(c.name); document.getElementById("winners")?.scrollIntoView(); }} className={`shrink-0 rounded-full px-3 py-1 text-xs ${filter === c.name ? "bg-gold-gradient text-accent-foreground" : "border border-border text-muted-foreground"}`}>{c.name.replace(" Award", "")}</button>
            ))}
          </div>
        </div>
        <div className="space-y-16">
          {awardCategories.map((c, i) => (
            <WinnerCategory key={c.slug} category={c} index={i} winners={filtered.filter((w) => w.category === c.name)} />
          ))}
          {!filtered.length && <p className="text-center text-muted-foreground">No winners match "{query}".</p>}
        </div>
      </section>

      <Footer links={NAV_LINKS} />
    </div>
  );
}
