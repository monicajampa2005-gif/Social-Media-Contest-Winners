import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

type NavLink = readonly [label: string, href: string];

export function Navbar({ links, cta }: { links: readonly NavLink[]; cta: NavLink }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center" aria-label="Super AI Academy – home">
          <img src={logoImg} alt="Super AI Academy" width={595} height={162} className="h-9 w-auto" />
        </a>
        <ul className="hidden items-center gap-5 text-sm lg:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="text-muted-foreground transition-colors hover:text-foreground">{l}</a></li>)}
        </ul>
        <a href={cta[1]} className="hidden rounded-full bg-gold-gradient px-4 py-2 text-sm font-semibold text-accent-foreground shadow-gold lg:inline-block">{cta[0]}</a>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden">
          {links.map(([l, h]) => <li key={h}><a onClick={() => setOpen(false)} href={h} className="block py-2 text-muted-foreground">{l}</a></li>)}
          <li><a onClick={() => setOpen(false)} href={cta[1]} className="mt-2 block rounded-full bg-gold-gradient px-4 py-2 text-center font-semibold text-accent-foreground">{cta[0]}</a></li>
        </ul>
      )}
    </header>
  );
}
