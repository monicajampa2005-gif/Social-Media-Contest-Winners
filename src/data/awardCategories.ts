export type AwardCategory = { slug: string; name: string; count: number; icon: string };
// Official names and counts — do not change.
export const awardCategories: AwardCategory[] = [
  { slug: "social-media-superstar", name: "Social Media Superstar Award", count: 30, icon: "Star" },
  { slug: "viral-content-champion", name: "Viral Content Champion Award", count: 15, icon: "Flame" },
  { slug: "most-creative-creator", name: "Most Creative Creator Award", count: 15, icon: "Palette" },
  { slug: "consistency-champion", name: "Consistency Champion Award", count: 15, icon: "CalendarCheck" },
  { slug: "educational-content-creator", name: "Educational Content Creator Award", count: 15, icon: "BookOpen" },
  { slug: "rising-star-creator", name: "Rising Star Creator Award", count: 15, icon: "Rocket" },
  { slug: "ugc-creator", name: "UGC Creator Award", count: 15, icon: "Video" },
  { slug: "ai-creative-genius", name: "AI Creative Genius Award", count: 15, icon: "Brain" },
  { slug: "ai-powered-personal-creator", name: "AI-Powered Personal Creator Award", count: 15, icon: "Sparkles" },
];
