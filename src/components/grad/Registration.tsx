import { Check, Crown, Ticket, ShieldCheck, ArrowRight } from "lucide-react";

// Razorpay payment page — the attendee picks "VIP" or "Normal" on this page.
export const RAZORPAY_LINK = "https://rzp.io/rzp/qmOxfLFC";

type Pass = {
  id: "vip" | "normal";
  name: string;
  price: number;
  tagline: string;
  perks: string[];
  featured?: boolean;
};

const passes: Pass[] = [
  {
    id: "normal",
    name: "Normal Entry",
    price: 1500,
    tagline: "Be part of the celebration",
    perks: ["Entry to the Graduation Day ceremony", "Watch the award presentations live", "General seating", "Networking with fellow learners"],
  },
  {
    id: "vip",
    name: "VIP Pass",
    price: 2499,
    tagline: "The premium graduation experience",
    perks: ["Everything in Normal Entry", "Priority front-row VIP seating", "Fast-track VIP check-in", "Exclusive photo opportunities", "Special VIP access during the event"],
    featured: true,
  },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Registration() {
  return (
    <section id="register" className="relative mx-auto max-w-7xl px-4 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Registration</p>
        <h2 className="text-3xl font-bold md:text-5xl">Book Your Graduation Day Pass</h2>
        <p className="mt-4 text-muted-foreground">Reserve your seat at the Telugu AI Bootcamp Graduation Day 2026. Two passes are available — pick the one you want on the payment page.</p>
      </div>

      {/* Pass cards (display only) */}
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {passes.map((p) => {
          const Ico = p.featured ? Crown : Ticket;
          return (
            <article
              key={p.id}
              className={`group glass relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${p.featured ? "border-2 border-gold shadow-gold" : "border border-border hover:shadow-glow"}`}
            >
              {p.featured && <span className="absolute right-5 top-5 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold text-accent-foreground">Most Popular</span>}
              <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${p.featured ? "bg-gold-gradient opacity-30" : "bg-brand-gradient opacity-30"}`} />
              <div className="relative">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${p.featured ? "bg-gold-gradient text-accent-foreground shadow-gold" : "bg-brand-gradient shadow-glow"}`}><Ico className="h-7 w-7" /></span>
                <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
                <p className="mt-5 font-display text-5xl font-bold">
                  <span className={p.featured ? "text-gold-gradient" : "text-brand-gradient"}>{inr(p.price)}</span>
                  <span className="ml-2 text-sm font-normal text-muted-foreground">/ person</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{perk}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* Single call to action */}
      <div className="mt-12 flex flex-col items-center text-center">
        <a
          href={RAZORPAY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-10 py-4 text-lg font-semibold text-accent-foreground shadow-gold transition-transform hover:scale-105"
        >
          Register &amp; Pay <ArrowRight className="h-5 w-5" />
        </a>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">You'll choose <span className="font-semibold text-gold">VIP</span> or <span className="font-semibold text-gold">Normal</span> on the secure payment page.</p>
        <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-gold" /> Payments are processed securely by Razorpay (UPI, cards, net banking &amp; wallets).
        </p>
      </div>
    </section>
  );
}
