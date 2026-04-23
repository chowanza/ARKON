import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const portafolio = [
  { title: "Servicios de Pozos y Optimización de Producción", icon: "/pozos_icon.svg" },
  { title: "Ingeniería, Procura y Construcción de Infraestructura (IPC)", icon: "/IPC_icon.svg" },
  { title: "Saneamiento Ambiental y Gestión de Fluidos", icon: "/saneamiento_icon.svg" },
  { title: "Logística y Maquinaria Pesada", icon: "/maquinaria_icon.svg" },
  { title: "Asesoría y Consultoría Especializada", icon: "/consultoria_icon.svg" },
];

const objetivos = [
  {
    title: "Optimización de Activos",
    desc: "Ejecutar programas de perforación, rehabilitación y mantenimiento de pozos mediante esquemas planificados que reactiven el potencial de producción y mitiguen los tiempos no productivos (NPT).",
    icon: "/activos_icon.svg"
  },
  {
    title: "Excelencia en Ingeniería y Construcción",
    desc: "Desarrollar proyectos de infraestructura en las áreas Civil, Mecánica, Eléctrica e Instrumentación bajo los más estrictos estándares de calidad internacional.",
    icon: "/Ingenieria_icon.svg"
  },
  {
    title: "Eficiencia Logística",
    desc: "Proveer soluciones de procura y suministros de alta exigencia técnica, garantizando la disponibilidad de equipos y materiales críticos.",
    icon: "/eficiencia_icon.svg"
  },
  {
    title: "Gestión HSEQ",
    desc: "Mantener niveles de accidentabilidad cero y un impacto ambiental mínimo, priorizando la seguridad del talento humano y la preservación del entorno.",
    icon: "/HSEQ_icon.svg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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
            {/* Subtle gradient overlay to ensure text readability without hiding the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-white pt-20">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold max-w-4xl leading-[1.1] mb-12 tracking-tight">
                SOLUCIONES ESTRATÉGICAS<br />
                AL SERVICIO DE LA<br />
                INDUSTRIAL OIL & GAS
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" variant="orange" className="font-semibold uppercase tracking-wider px-8 h-14 min-w-[200px]">
                  Contáctanos
                </Button>
                <Button size="lg" variant="glass" className="font-semibold uppercase tracking-wider px-8 h-14 min-w-[200px]">
                  Ver Servicios
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
                Nuestro Objetivo
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 divide-y md:divide-y-0 lg:divide-x divide-slate-200">
              {objetivos.map((obj, idx) => (
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
            {/* Green gradient overlay - more transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A9029]/10 via-[#4A9029]/50 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-white">
            <div className="max-w-2xl">
              <FadeIn direction="up">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                  Quienes somos
                </h2>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2} className="space-y-6 text-[15px] md:text-[17px] leading-relaxed text-white/95">
                <p>
                  <strong className="font-bold text-white">ARKON, C.A</strong> es una empresa especializada en el desarrollo de soluciones integrales para el sector energético. Con amplia experiencia y personal capacitado
                </p>
                <p>
                  Brindamos soporte estratégico en la <strong className="font-bold text-white">Industria Oil & Gas</strong> para la ejecución de actividades de perforación, rehabilitación y servicios a pozos, así como la construcción, reparación, mantenimiento e instalación en las áreas de <strong className="font-bold text-white">Refinación y Procesamiento de Crudo</strong>, para el área <strong className="font-bold text-white">Civil, Mecánica, Eléctrica e Instrumentación...</strong>
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4} className="mt-12">
                <Button variant="orange" size="lg" className="font-semibold uppercase tracking-wider px-8 h-12 flex items-center gap-3">
                  Saber Más <span className="text-xl font-normal leading-none mb-0.5">&rarr;</span>
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
                Portafolio de Servicios
              </h2>
            </FadeIn>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {portafolio.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} direction="up" className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] border border-green-200/60 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[160px] text-center bg-white hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 relative flex items-center justify-center mb-4">
                    <Image src={item.icon} alt={item.title} fill className="object-contain" />
                  </div>
                  <h4 className="text-[15px] font-medium text-slate-800 leading-snug px-2">{item.title}</h4>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.4} className="text-center mt-16">
              <Button variant="orange" size="lg" className="font-semibold uppercase tracking-wider px-10 h-14 min-w-[200px]">
                Ver Servicios
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* IDENTIDAD SECTION */}
        <section id="identidad" className="py-24 bg-brand-primary text-white text-center">
          <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Nuestra Identidad</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-16 max-w-3xl mx-auto px-4 sm:px-0">
                El compromiso de ARKON es garantizar la máxima eficiencia operativa, cumpliendo con los más altos estándares de calidad, seguridad y protección ambiental.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.3} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/5 hover:bg-white/10 transition-colors rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                  <Image src="/certificacion_icon.svg" alt="ISO" width={44} height={44} className="object-contain" />
                </div>
                <span className="font-semibold text-sm sm:text-[15px] max-w-[140px] leading-tight">Certificación ISO 9001</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.4} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/5 hover:bg-white/10 transition-colors rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                  <Image src="/accidentabilidad_icon.svg" alt="Cero Accidentes" width={44} height={44} className="object-contain" />
                </div>
                <span className="font-semibold text-sm sm:text-[15px] max-w-[140px] leading-tight">Meta de Accidentabilidad Cero</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.5} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/5 hover:bg-white/10 transition-colors rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                  <Image src="/soborno_icon.svg" alt="Anti-Soborno" width={44} height={44} className="object-contain" />
                </div>
                <span className="font-semibold text-sm sm:text-[15px] max-w-[140px] leading-tight">Tolerancia Cero al Soborno y Fraude</span>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
