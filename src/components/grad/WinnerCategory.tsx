import { ArrowUp } from "lucide-react";
import type { AwardCategory } from "@/data/awardCategories";
import type { Winner } from "@/data/winners";
import { WinnerCard } from "./WinnerCard";

export function WinnerCategory({ category, index, winners }: { category: AwardCategory; index: number; winners: Winner[] }) {
  if (!winners.length) return null;
  return (
    <div id={`winners-${category.slug}`} className="scroll-mt-40">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
        <div>
          <p className="text-sm text-gold">Section {index + 1}</p>
          <h3 className="text-2xl font-bold md:text-3xl">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{winners.length} Winners</p>
        </div>
        <a href="#winners" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-gold">
          <ArrowUp className="h-4 w-4" /> Back to top
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {winners.map((w) => <WinnerCard key={w.id} winner={w} />)}
      </div>
    </div>
  );
}
