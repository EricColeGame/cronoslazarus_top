export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Cronos: Lazarus Wiki",
  shortName: "Cronos: Lazarus",
  logoText: "C",
  tagline: "Guides, Weapons, Abilities & Story Lore",
  description: "Explore Cronos: Lazarus with gameplay guides, weapon details, abilities, enemy strategies, story lore, release information, and platform updates for this sci-fi survival horror expansion.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cronoslazarus.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cronoslazarus.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://cronosnewdawn.com/lazarus",
  heroVideoId: "v77GGoilyCA",
  social: {
    discord: "https://discord.gg/vCBd3QTsKJ",
    youtube: "https://www.youtube.com/@BlooberTeamSA",
    twitter: "https://x.com/CronosNewDawn",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
