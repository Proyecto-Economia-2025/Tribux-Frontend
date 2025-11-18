import React from 'react';
import { navigateToUrl } from 'single-spa';
import { ShimmerButton } from '@/components/ui/shimmer-button';

function CTASection(): React.JSX.Element {

  return (
    <section className="py-20 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
              ¿Listo para Comenzar?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-primary-foreground/90 leading-relaxed">
              Únete a cientos de empresas que ya confían en Tribux para su gestión tributaria.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center items-center">
            <ShimmerButton
              className="h-12 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90"
              onClick={() => navigateToUrl('/auth/create-user')}
            >
              Comenzar Prueba Gratuita
            </ShimmerButton>

            <button
              className="h-12 px-8 text-base font-semibold border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 transition-colors"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Características
            </button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Sin compromiso • Configuración en minutos • Soporte incluido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;