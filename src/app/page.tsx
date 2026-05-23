import content from "@/data/content.json";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        رفتن به محتوای اصلی
      </a>
      <Header data={content.header} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection data={content.hero} />
      </main>
    </>
  );
}
