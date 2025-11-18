import React from 'react';
import { MagicCard } from '@/components/ui/magic-card';
import { Icon } from '@tribux/ui';

function FeaturesSection(): React.JSX.Element {
  const features = [
    {
      icon: 'chart',
      title: "Análisis Inteligente",
      description: "Herramientas avanzadas de análisis para optimizar tu gestión tributaria y tomar mejores decisiones."
    },
    {
      icon: 'lock',
      title: "Seguridad Garantizada",
      description: "Protección de datos de nivel empresarial con encriptación avanzada y cumplimiento normativo."
    },
    {
      icon: 'bolt',
      title: "Automatización",
      description: "Automatiza procesos repetitivos y reduce errores humanos en la gestión de tus obligaciones fiscales."
    },
    {
      icon: 'mobile',
      title: "Acceso Móvil",
      description: "Gestiona tus tributos desde cualquier dispositivo con nuestra aplicación web responsive."
    },
    {
      icon: 'chartUp',
      title: "Reportes Detallados",
      description: "Obtén insights valiosos con reportes personalizados y análisis de tendencias fiscales."
    },
    {
      icon: 'handshake',
      title: "Soporte Especializado",
      description: "Equipo de expertos tributarios disponible para asistirte en todo momento."
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Características Principales
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            Herramientas poderosas diseñadas para simplificar tu gestión tributaria
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className="h-full cursor-pointer group"
              gradientFrom="#0f766e"
              gradientTo="#38bdf8"
            >
              <div className="p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon} size={44} className="mx-auto" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;