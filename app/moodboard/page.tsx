import { HeroSection } from "@/components/moodboard/hero-section"
import { AboutSection } from "@/components/moodboard/about-section"
import { MoodboardGallery } from "@/components/moodboard/moodboard-gallery"
import { PaletteSection } from "@/components/moodboard/palette-section"
import { TypographySection } from "@/components/moodboard/typography-section"
import { LogoSection } from "@/components/moodboard/logo-section"
import { BrandingSection } from "@/components/moodboard/branding-section"
import { SiteFooter } from "@/components/moodboard/site-footer"

export default function MoodboardPage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <MoodboardGallery />
      <PaletteSection />
      <TypographySection />
      <LogoSection />
      <BrandingSection />
      <SiteFooter />
    </main>
  )
}
