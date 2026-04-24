import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getDictionary, Locale } from "@/dictionaries/getDictionary";

export default async function Nosotros({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <div className="min-h-screen flex flex-col bg-brand-primary">
      <Navbar dict={dict} lang={lang as Locale} />

      <main className="flex-1 pt-32 pb-24 text-white">
        
        {/* ESENCIA CORPORATIVA SECTION */}
        <section className="container mx-auto px-4 lg:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="up" className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase leading-tight">
                {dict.nosotrosPage.hero.title}
              </h1>
              <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed font-light mb-6">
                <strong className="font-bold text-white">{dict.nosotrosPage.hero.p1.bold}</strong>{dict.nosotrosPage.hero.p1.text}
              </p>
              <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed font-light">
                {dict.nosotrosPage.hero.p2.text1}<strong className="font-bold text-white">{dict.nosotrosPage.hero.p2.bold1}</strong>
                {dict.nosotrosPage.hero.p2.text2}<strong className="font-bold text-white">{dict.nosotrosPage.hero.p2.bold2}</strong>
                {dict.nosotrosPage.hero.p2.text3}<strong className="font-bold text-white">{dict.nosotrosPage.hero.p2.bold3}</strong>
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/us_1.png" 
                alt="ARKON Equipo" 
                fill 
                className="object-cover"
                priority
              />
            </FadeIn>
          </div>
        </section>

        {/* TRAYECTORIA SECTION */}
        <section className="container mx-auto px-4 lg:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="up" className="order-2 lg:order-1 relative w-full aspect-[4/3] lg:aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/us_2.png" 
                alt="ARKON Trayectoria" 
                fill 
                className="object-cover"
              />
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="order-1 lg:order-2 max-w-xl lg:pl-8">
              <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed font-light mb-12">
                {dict.nosotrosPage.trayectoria.intro}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {dict.nosotrosPage.trayectoria.title}
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/90 leading-relaxed font-light">
                {dict.nosotrosPage.trayectoria.desc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* MISION Y VISION CARDS */}
        <section className="container mx-auto px-4 lg:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mision */}
            <FadeIn direction="up" className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl p-10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 relative flex items-center justify-center mb-6">
                <Image src="/us_mission_icon.svg" alt="Misión Icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-6">{dict.nosotrosPage.cards.mision.title}</h3>
              <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed font-light">
                {dict.nosotrosPage.cards.mision.desc}
              </p>
            </FadeIn>

            {/* Vision */}
            <FadeIn direction="up" delay={0.2} className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl p-10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 relative flex items-center justify-center mb-6">
                <Image src="/us_vision_icon.svg" alt="Visión Icon" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-6">{dict.nosotrosPage.cards.vision.title}</h3>
              <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed font-light">
                {dict.nosotrosPage.cards.vision.desc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <Button variant="orange" size="lg" className="font-semibold uppercase tracking-wider px-10 h-12 text-[14px]">
              {dict.nosotrosPage.button}
            </Button>
          </FadeIn>
        </section>

      </main>

      <Footer dict={dict} lang={lang as Locale} />
    </div>
  );
}
