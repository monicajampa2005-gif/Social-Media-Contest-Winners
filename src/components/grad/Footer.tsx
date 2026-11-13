import { Instagram, Youtube, Heart } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import logoImg from "@/assets/logo.png";

type NavLink = readonly [label: string, href: string];

export function Footer({ links }: { links: readonly NavLink[] }) {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold-gradient opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logoImg}
              alt="Super AI Academy"
              width={595}
              height={162}
              loading="lazy"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Empowering Telugu-speaking learners with AI knowledge and hands-on
              skills. Celebrating creativity, dedication, and the courage to
              innovate.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Connect
            </h3>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb7BBky8KMqkGSrh8R1R" },
                { Icon: Instagram,    label: "Instagram", href: "https://www.instagram.com/superaiofficial/" },
                { Icon: Youtube,      label: "YouTube",  href: "https://www.youtube.com/@superaiacademyofficial" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:scale-110 hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* For Questions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              For Questions
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:7331112687"
                  className="text-sm font-medium text-gold transition-colors hover:text-gold/80"
                >
                  7331112687
                </a>
              </li>
              <li>
                <a
                  href="tel:7331112693"
                  className="text-sm font-medium text-gold transition-colors hover:text-gold/80"
                >
                  7331112693
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>
            © 2026 Super AI Academy · Telugu AI Bootcamp Social Media Contest
            Winners
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="h-3.5 w-3.5 fill-gold text-gold" /> by
            Super AI Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
