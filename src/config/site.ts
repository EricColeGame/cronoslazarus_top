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
  description: "Explore Cronos: Lazarus with gameplay guides, weapons, abilities, enemies, story lore, release details, and platform updates for this survival horror DLC.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cronoslazarus.top",
  supportEmail: "support@cronoslazarus.top",
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
