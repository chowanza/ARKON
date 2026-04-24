import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getDictionary, Locale } from "@/dictionaries/getDictionary";

export default async function Contacto({ params, searchParams }: { params: Promise<{ lang: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { lang } = await params;
  const resolvedSearchParams = await searchParams;
  const preselectedService = typeof resolvedSearchParams.service === 'string' ? resolvedSearchParams.service : "";
  const dict = getDictionary(lang as Locale);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar dict={dict} lang={lang as Locale} />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/contact_bg.png"
              alt="Contacto Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-white pt-20">
            <FadeIn direction="up" className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 uppercase">
                {dict.contactoPage.hero.title}
              </h1>
              <p className="text-[15px] md:text-[17px] text-white/95 leading-relaxed font-light mb-10">
                {dict.contactoPage.hero.desc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT CONTENT SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* FORMULARIO (Left Column) */}
              <FadeIn direction="up">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
                  {dict.contactoPage.form.title}
                </h2>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder={`${dict.contactoPage.form.name} *`} 
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14.5px] text-slate-700 focus:outline-none focus:border-[#E57F26] focus:ring-1 focus:ring-[#E57F26] transition-colors bg-white"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder={`${dict.contactoPage.form.email} *`} 
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14.5px] text-slate-700 focus:outline-none focus:border-[#E57F26] focus:ring-1 focus:ring-[#E57F26] transition-colors bg-white"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder={dict.contactoPage.form.phone} 
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14.5px] text-slate-700 focus:outline-none focus:border-[#E57F26] focus:ring-1 focus:ring-[#E57F26] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder={dict.contactoPage.form.company} 
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14.5px] text-slate-700 focus:outline-none focus:border-[#E57F26] focus:ring-1 focus:ring-[#E57F26] transition-colors bg-white"
                    />
                  </div>
                  <div className="relative">
                    <select 
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14.5px] text-slate-500 focus:outline-none focus:border-[#E57F26] focus:ring-1 focus:ring-[#E57F26] transition-colors bg-white appearance-none pr-10"
                      defaultValue={preselectedService}
                    >
                      <option value="" disabled>{dict.contactoPage.form.service}</option>
                      {dict.contactoPage.form.serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                      <svg width="12" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <textarea 
                      placeholder={dict.contactoPage.form.message} 
                      rows={4}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14.5px] text-slate-700 focus:outline-none focus:border-[#E57F26] focus:ring-1 focus:ring-[#E57F26] transition-colors bg-white resize-none"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <Button type="button" variant="orange" size="lg" className="w-full md:w-auto font-semibold uppercase tracking-wider px-12 h-12 text-[14px]">
                      {dict.contactoPage.form.button}
                    </Button>
                  </div>
                </form>
              </FadeIn>

              {/* DIRECTORIO CORPORATIVO (Right Column) */}
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
                  {dict.contactoPage.directory.title}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Sede Operativa */}
                  <div className="border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <h3 className="text-[15px] font-semibold text-slate-900 mb-4">{dict.contactoPage.directory.operative.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-light">
                      {dict.contactoPage.directory.operative.desc}
                    </p>
                  </div>

                  {/* Sede Fiscal */}
                  <div className="border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <h3 className="text-[15px] font-semibold text-slate-900 mb-4">{dict.contactoPage.directory.fiscal.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-light">
                      {dict.contactoPage.directory.fiscal.desc}
                    </p>
                  </div>

                  {/* Líneas de Atención Directa */}
                  <div className="border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <h3 className="text-[15px] font-semibold text-slate-900 mb-4">{dict.contactoPage.directory.phones.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-light whitespace-pre-line">
                      {dict.contactoPage.directory.phones.desc}
                    </p>
                  </div>

                  {/* Correo Electrónico */}
                  <div className="border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <h3 className="text-[15px] font-semibold text-slate-900 mb-4">{dict.contactoPage.directory.emailBox.title}</h3>
                    <p className="text-[14px] text-[#E57F26] leading-relaxed font-medium">
                      {dict.contactoPage.directory.emailBox.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

      </main>

      <Footer dict={dict} lang={lang as Locale} />
    </div>
  );
}
