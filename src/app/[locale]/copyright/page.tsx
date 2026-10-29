import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Cronos: Lazarus, Cronos: The New Dawn, and related logos and media are trademarks of Bloober Team and their respective owners.</p>
      <p>Cronos: Lazarus Wiki at cronoslazarus.top is a non-official fan wiki created for informational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="mailto:support@cronoslazarus.top">support@cronoslazarus.top</a> for review.</p>
    </LegalPage>
  );
}
