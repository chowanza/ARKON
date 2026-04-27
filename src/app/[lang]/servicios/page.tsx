import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { getDictionary, Locale } from "@/dictionaries/getDictionary";

export default async function Servicios({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar dict={dict} lang={lang as Locale} />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/services_bg.png"
              alt="Servicios Background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-white pt-20">
            <FadeIn direction="up" className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 uppercase">
                {dict.serviciosPage.hero.title}
              </h1>
              <p className="text-[15px] md:text-[17px] text-white/95 leading-relaxed font-light mb-10">
                {dict.serviciosPage.hero.desc}
              </p>
              <Button size="lg" variant="orange" className="font-semibold tracking-wider px-8 h-12" href={`/${lang}/contacto`}>
                {dict.serviciosPage.hero.button}
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* ACCORDION CONTENT SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
            {dict.serviciosPage.categories.map((category, catIdx) => (
              <div key={catIdx} className="mb-16 last:mb-0">
                <FadeIn direction="up">
                  <div className="flex items-start gap-4 mb-6">
                    {category.icon && (
                      <div className="w-8 h-8 relative flex-shrink-0 mt-1">
                        <Image src={category.icon} alt={category.title} fill className="object-contain" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-[19px] md:text-[21px] font-bold text-slate-800 leading-tight">
                        {category.title}
                      </h2>
                      {category.desc && (
                        <p className="text-[14px] text-slate-500 mt-2 font-light">
                          {category.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>

                <div className="space-y-1 pl-0 md:pl-12">
                  {category.items.map((item, itemIdx) => {
                    const isMoreServices = category.title === "Más servicios" || category.title === "More Services";
                    const serviceName = isMoreServices ? item.title : category.title;
                    const contactHref = `/${lang}/contacto?service=${encodeURIComponent(serviceName)}`;

                    return (
                      <FadeIn key={itemIdx} delay={itemIdx * 0.1} direction="up">
                        <Accordion title={item.title} icon={(item as any).icon} contactHref={contactHref}>
                          {item.desc}
                        </Accordion>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer dict={dict} lang={lang as Locale} />
    </div>
  );
}
