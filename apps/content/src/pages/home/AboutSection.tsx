import React from 'react';
import { MagicCard } from '@/components/ui/magic-card';
import { Icon } from '@tribux/ui';

function AboutSection(): React.JSX.Element {
  const teamMembers = [
    {
      name: "Antony Monge",
      role: "CEO y Fundador",
      description: "Estudiante de Economía Computacional con experiencia en desarrollo de soluciones digitales para transformación tributaria.",
      image: "ceo-portrait.jpg"
    },
    {
      name: "Cristopher Zúñiga",
      role: "CTO y Co-Fundador",
      description: "Especialista en desarrollo de software y sistemas de gestión tributaria digital.",
      image: "cto-portrait.jpg"
    }
  ];

  const values = [
    {
      title: "Innovación Tecnológica",
      description: "Aplicamos principios de economía computacional y tecnologías modernas para resolver problemas tributarios complejos.",
      icon: "lightbulb"
    },
    {
      title: "Accesibilidad",
      description: "Facilitamos la inclusión digital de las mipymes en el nuevo sistema tributario, reduciendo barreras técnicas.",
      icon: "globe"
    },
    {
      title: "Precisión y Confiabilidad",
      description: "Nos comprometemos con la exactitud en el análisis de datos y la robustez de nuestras soluciones.",
      icon: "target"
    }
  ];

  return (
    <section className="bg-muted/30 py-20" id="about">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            Acerca de Nuestra Empresa
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-xl text-muted-foreground md:text-2xl leading-relaxed">
            Proyecto académico de Economía Computacional para el desarrollo de un servicio digital de apoyo tributario.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16 mb-20">
          {/* Historia y Misión */}
          <div className="space-y-8">
            <MagicCard
              className="cursor-pointer"
              gradientFrom="#0f766e"
              gradientTo="#38bdf8"
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">Nuestra Historia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Este proyecto nace como respuesta directa a la implementación del sistema TRIBU‑CR y a las demandas que dejó la transición digital de la administración fiscal costarricense. Iniciado en la Universidad de Costa Rica, Sede del Atlántico (Guápiles), el equipo —formado por estudiantes y docentes de economía y ciencias de la computación— desarrolló prototipos y herramientas que facilitan la adopción de TRIBU‑CR por parte de mipymes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El proyecto aborda de forma práctica la adopción del TRIBU‑CR, creado por el Ministerio de Hacienda, que introduce módulos como Tico Factura y nuevos flujos de fiscalización. Nuestra misión es construir una interfaz intermediaria y servicios de acompañamiento que reduzcan los costos de transacción, minimicen errores en las declaraciones y permitan a las mipymes cumplir de forma segura y eficiente con las nuevas exigencias digitales.
                </p>
              </div>
            </MagicCard>

            <MagicCard
              className="cursor-pointer"
              gradientFrom="#7c3aed"
              gradientTo="#ec4899"
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollar un servicio digital que, desde la economía computacional, ofrezca herramientas prácticas para el onboard y la integración con Tico Factura, conciliación contable‑tributaria y dashboards operativos. Nuestro objetivo: disminuir fricciones operativas, facilitar la adaptación técnica de comercios pequeños y crear métricas que demuestren mejoras en tiempo y en reducción de errores en las declaraciones ante TRIBU‑CR.
                </p>
              </div>
            </MagicCard>
          </div>

          {/* Imagen y Equipo */}
          <div className="space-y-8">
            <MagicCard
              className="cursor-pointer"
              gradientFrom="#0f766e"
              gradientTo="#38bdf8"
            >
              <div className="p-8">
                <div className="relative h-[400px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <img
                    alt="Universidad de Costa Rica - Sede del Atlántico"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="team-photo.jpg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </MagicCard>

            <div>
              <h3 className="text-3xl font-bold mb-8">Equipo del Proyecto</h3>
              <div className="grid gap-8 sm:grid-cols-2">
                {teamMembers.map((member, index) => (
                  <MagicCard
                    key={index}
                    className="cursor-pointer"
                    gradientFrom="#0f766e"
                    gradientTo="#38bdf8"
                  >
                    <div className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl hover:ring-primary/40 hover:shadow-2xl transition-all duration-300">
                          <img
                            alt={member.name}
                            className="w-full h-full object-cover"
                            src={member.image}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold">{member.name}</h4>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                        {member.description}
                      </p>
                    </div>
                  </MagicCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Nuestros Valores
          </h3>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            Principios que guían nuestro desarrollo y compromiso con la transformación tributaria digital.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <MagicCard
              key={index}
              className="h-full cursor-pointer"
              gradientFrom="#0f766e"
              gradientTo="#38bdf8"
            >
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">
                  <Icon name={value.icon} size={48} className="mx-auto" />
                </div>
                <h4 className="text-2xl font-bold">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {value.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;