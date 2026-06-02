import type { Metadata } from "next"
import { BrandbookCover } from "@/components/brandbook/brandbook-cover"
import { BrandbookNav } from "@/components/brandbook/brandbook-nav"
import { TableOfContents } from "@/components/brandbook/table-of-contents"
import { BrandIntro } from "@/components/brandbook/brand-intro"
import { LogoSection } from "@/components/brandbook/logo-section"
import { LogoRulesSection } from "@/components/brandbook/logo-rules-section"
import { ColorSection } from "@/components/brandbook/color-section"
import { TypographySection } from "@/components/brandbook/typography-section"
import { PatternSection } from "@/components/brandbook/pattern-section"
import { PhotoStyleSection } from "@/components/brandbook/photostyle-section"
import { ApplicationsSection } from "@/components/brandbook/applications-section"
import { CampaignSection } from "@/components/brandbook/campaign-section"
import { FinalCover } from "@/components/brandbook/final-cover"

export const metadata: Metadata = {
  title: "Брендбук «Кибитка» — фирменный стиль такси-сервиса",
  description:
    "Полный брендбук такси-сервиса «Кибитка»: о бренде, логотип, правила использования, цвета, шрифты, паттерны, фотостиль и носители.",
}

export default function BrandbookPage() {
  return (
    <main className="bg-background">
      {/* 1. Титул */}
      <BrandbookCover />
      
      {/* Навигация (sticky) */}
      <BrandbookNav />
      
      {/* 2. Оглавление */}
      <TableOfContents />
      
      {/* 3. О бренде / О компании */}
      <BrandIntro />
      
      {/* 4. Логотип. Варианты. Охранное поле */}
      <LogoSection />
      
      {/* 5. Правила использования логотипа */}
      <LogoRulesSection />
      
      {/* 6. Фирменные цвета. Правила использования */}
      <ColorSection />
      
      {/* 7. Фирменные шрифты. Правила использования */}
      <TypographySection />
      
      {/* 8. Паттерн. Правила. Доп. графические элементы */}
      <PatternSection />
      
      {/* 9. Фотостиль. Правила / Промт */}
      <PhotoStyleSection />
      
      {/* 10. Носители (по видам) */}
      <ApplicationsSection />
      
      {/* 11. Рекламная кампания */}
      <CampaignSection />
      
      {/* 12. Титул 2 */}
      <FinalCover />
    </main>
  )
}
