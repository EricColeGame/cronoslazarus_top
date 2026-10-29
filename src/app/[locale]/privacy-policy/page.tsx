import { LegalPage } from "@/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Cronos: Lazarus Wiki at cronoslazarus.top provides informational game guides for Cronos: Lazarus. We do not request account credentials, platform passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to official game pages, Discord, YouTube, or community tools. Those services are governed by their own privacy policies.</p>
      <p>For privacy questions, contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="mailto:support@cronoslazarus.top">support@cronoslazarus.top</a>.</p>
    </LegalPage>
  );
}
