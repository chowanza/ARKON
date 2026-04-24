import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getDictionary, Locale } from "@/dictionaries/getDictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar dict={dict} lang={lang as Locale} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="inicio" className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-white pt-20">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold max-w-4xl leading-[1.1] mb-12 tracking-tight uppercase">
                {dict.hero.title}
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" variant="orange" className="font-semibold uppercase tracking-wider px-8 h-14 min-w-[200px]" href={`/${lang}/contacto`}>
                  {dict.hero.contactUs}
                </Button>
                <Button size="lg" variant="glass" className="font-semibold uppercase tracking-wider px-8 h-14 min-w-[200px]" href={`/${lang}/servicios`}>
                  {dict.hero.viewServices}
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* NUESTRO OBJETIVO SECTION */}
        <section id="objetivo" className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <FadeIn direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#E57F26] mb-16">
                {dict.objetivo.title}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 divide-y md:divide-y-0 lg:divide-x divide-slate-200">
              {dict.objetivo.items.map((obj, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} direction="up" className="flex flex-col items-center pt-8 md:pt-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                  <div className="w-16 h-16 relative flex items-center justify-center mb-6">
                    <Image src={obj.icon} alt={obj.title} fill className="object-contain" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-slate-900 text-center mb-4 leading-tight min-h-[56px] flex items-center justify-center">
                    {obj.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 text-center leading-relaxed">
                    {obj.desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* QUIENES SOMOS SECTION */}
        <section id="nosotros" className="relative py-28 min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/quienes_somos_bg.png"
              alt="Quienes Somos"
              fill
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A9029]/10 via-[#4A9029]/50 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-white">
            <div className="max-w-2xl">
              <FadeIn direction="up">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                  {dict.nosotros.title}
                </h2>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2} className="space-y-6 text-[15px] md:text-[17px] leading-relaxed text-white/95">
                <p>
                  <strong className="font-bold text-white">{dict.nosotros.p1.bold}</strong>{dict.nosotros.p1.text}
                </p>
                <p>
                  {dict.nosotros.p2.text1}<strong className="font-bold text-white">{dict.nosotros.p2.bold1}</strong>
                  {dict.nosotros.p2.text2}<strong className="font-bold text-white">{dict.nosotros.p2.bold2}</strong>
                  {dict.nosotros.p2.text3}<strong className="font-bold text-white">{dict.nosotros.p2.bold3}</strong>
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4} className="mt-12">
                <Button variant="orange" size="lg" className="font-semibold uppercase tracking-wider px-8 h-12 flex items-center gap-3" href={`/${lang}/nosotros`}>
                  {dict.nosotros.button} <span className="text-xl font-normal leading-none mb-0.5">&rarr;</span>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PORTAFOLIO DE SERVICIOS SECTION */}
        <section id="portafolio" className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <FadeIn direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#E57F26] mb-16 text-center">
                {dict.portafolio.title}
              </h2>
            </FadeIn>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {dict.portafolio.items.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} direction="up" className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]">
                  <Link href={`/${lang}/servicios`} className="border border-green-200/60 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[160px] text-center bg-white hover:shadow-md transition-shadow h-full cursor-pointer block">
                    <div className="w-12 h-12 relative flex items-center justify-center mb-4 mx-auto">
                      <Image src={item.icon} alt={item.title} fill className="object-contain" />
                    </div>
                    <h4 className="text-[15px] font-medium text-slate-800 leading-snug px-2">{item.title}</h4>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.4} className="text-center mt-16">
              <Button variant="orange" size="lg" className="font-semibold uppercase tracking-wider px-10 h-14 min-w-[200px]" href={`/${lang}/servicios`}>
                {dict.portafolio.button}
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* IDENTIDAD SECTION */}
        <section id="identidad" className="py-24 bg-brand-primary text-white text-center">
          <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
            <FadeIn direction="up">
              <h2 className="text-xl md:text-2xl font-bold text-[#E57F26] mb-8">{dict.identidad.title}</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-[17px] md:text-[19px] text-white/95 font-medium leading-relaxed mb-20 max-w-4xl mx-auto px-4 sm:px-0">
                {dict.identidad.desc}
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.3} className="flex flex-col items-center">
                <div className="w-[52px] h-[52px] relative flex items-center justify-center mb-5">
                  <Image src="/certificacion_icon.svg" alt="ISO" fill className="object-contain" />
                </div>
                <span className="font-light text-[17px] text-white/95 leading-relaxed">{dict.identidad.iso.line1}<br/>{dict.identidad.iso.line2}</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.4} className="flex flex-col items-center">
                <div className="w-[52px] h-[52px] relative flex items-center justify-center mb-5">
                  <Image src="/accidentabilidad_icon.svg" alt="Cero Accidentes" fill className="object-contain" />
                </div>
                <span className="font-light text-[17px] text-white/95 leading-relaxed">{dict.identidad.accident.line1}<br/>{dict.identidad.accident.line2}<br/>{dict.identidad.accident.line3}</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.5} className="flex flex-col items-center">
                <div className="w-[52px] h-[52px] relative flex items-center justify-center mb-5">
                  <Image src="/soborno_icon.svg" alt="Anti-Soborno" fill className="object-contain" />
                </div>
                <span className="font-light text-[17px] text-white/95 leading-relaxed max-w-[200px]">{dict.identidad.soborno.line1}<br/>{dict.identidad.soborno.line2}</span>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dict} lang={lang as Locale} />
    </div>
  );
}
