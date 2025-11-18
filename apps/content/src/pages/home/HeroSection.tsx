import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@tribux/ui';
import { ShimmerButton } from '@/components/ui/shimmer-button';

function HeroSection(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-32 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Simplifica tus
                <span className="block text-primary">Obligaciones</span>
                <span className="block">Tributarias</span>
              </h1>

              <p className="max-w-[500px] text-lg text-muted-foreground leading-relaxed">
                Gestiona facturas y cumple con TRIBU-CR de forma segura y eficiente.
              </p>
            </div>

            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <ShimmerButton
                className="h-12 px-8 text-base font-semibold bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  const phone = '50685456150'; // Costa Rica +506
                  const text = encodeURIComponent(
                    'Hola, quiero más información sobre TribuFácil y la integración con TRIBU-CR. Mi número: 85456150'
                  );
                  const url = `https://wa.me/${phone}?text=${text}`;
                  window.open(url, '_blank');
                }}
              >
                Comenzar Ahora
              </ShimmerButton>

              <button
                className="h-12 px-8 text-base font-semibold border-2 border-primary/20 bg-white text-primary hover:bg-primary/5 hover:border-primary/40 transition-colors"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Características
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 border-2 border-white"></div>
                </div>
                <span className="text-sm text-muted-foreground">+1 usuarios activos</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Main card */}
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">T</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Tribux</h3>
                        <p className="text-sm text-slate-500">Gestión Tributaria</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 bg-slate-100 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-primary/20 rounded w-1/2 animate-pulse"></div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <div className="h-8 bg-primary rounded-lg flex-1 animate-pulse"></div>
                    <div className="h-8 bg-slate-100 rounded-lg flex-1 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;