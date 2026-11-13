import { useState } from "react";
import { Award, User } from "lucide-react";
import type { Winner } from "@/data/winners";

export function WinnerCard({ winner }: { winner: Winner }) {
  const [broken, setBroken] = useState(false);
  return (
    <article className="group relative rounded-2xl p-[1px] bg-gold-gradient transition-transform duration-300 hover:-translate-y-1 hover:shadow-gold">
      <div className="h-full rounded-2xl bg-background p-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
          {winner.image && !broken ? (
            <img src={winner.image} alt={winner.name} loading="lazy" referrerPolicy="no-referrer" onError={() => setBroken(true)} className="h-full w-full object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
              <User className="h-12 w-12" />
              <span className="text-xs">Photo coming soon</span>
            </div>
          )}
          <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient text-accent-foreground shadow-gold">
            <Award className="h-4 w-4" />
          </span>
        </div>
        <h4 className="mt-3 truncate text-base font-semibold">{winner.name}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2">{winner.awardTitle}</p>
        <p className="mt-2 inline-block rounded-full border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold">Award Winner</p>
      </div>
    </article>
  );
}
