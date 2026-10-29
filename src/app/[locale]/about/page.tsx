import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Cronos: Lazarus Wiki at cronoslazarus.top is an independent fan-built guide hub covering gameplay systems, weapons, abilities, enemies, story lore, and release information for new and veteran players alike.</p>
      <p>The site is not affiliated with Bloober Team, PixelAnt Games, or the game&apos;s publishers. Official information is available at <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="https://cronosnewdawn.com/lazarus" target="_blank" rel="noopener noreferrer">cronosnewdawn.com</a>.</p>
    </LegalPage>
  );
}
