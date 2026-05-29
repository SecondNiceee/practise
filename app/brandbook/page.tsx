import type { Metadata } from "next"
import { BrandbookCover } from "@/components/brandbook/brandbook-cover"
import { BrandbookNav } from "@/components/brandbook/brandbook-nav"
import { BrandIntro } from "@/components/brandbook/brand-intro"
import { LogoSection } from "@/components/brandbook/logo-section"
import { LogoVariations } from "@/components/brandbook/logo-variations"
import { ColorSection } from "@/components/brandbook/color-section"
import { TypographySection } from "@/components/brandbook/typography-section"
import { PatternSection } from "@/components/brandbook/pattern-section"
import { MascotSection } from "@/components/brandbook/mascot-section"
import { ApplicationsSection } from "@/components/brandbook/applications-section"
import { RulesSection } from "@/components/brandbook/rules-section"
import { BrandbookFooter } from "@/components/brandbook/brandbook-footer"

export const metadata: Metadata = {
  title: "Брендбук «Кибитка» — фирменный стиль такси-сервиса",
  description:
    "Полный брендбук такси-сервиса «Кибитка»: платформа бренда, логотип и охранное поле, цветовая палитра, типографика, паттерны, маскот, носители и правила использования.",
}

export default function BrandbookPage() {
  return (
    <main className="bg-background">
      <BrandbookCover />
      <BrandbookNav />
      <BrandIntro />
      <LogoSection />
      <LogoVariations />
      <ColorSection />
      <TypographySection />
      <PatternSection />
      <MascotSection />
      <ApplicationsSection />
      <RulesSection />
      <BrandbookFooter />
    </main>
  )
}
