import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Servicio Digital Tributario con Tribux
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Simplifica la transición al sistema TRIBU-CR con nuestra plataforma de asistencia tributaria.
                Gestiona facturas, concilia declaraciones y cumple con tus obligaciones fiscales de forma segura.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-1"
                type="button"
                onClick={() => navigate('/auth/login')}
              >
                Iniciar Sesión
                <svg
                  className="h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <button
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
                type="button"
                onClick={() => navigate('/auth/create-user')}
              >
                Registrarse
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Dashboard de Análisis Económico Tribux"
              className="rounded-xl object-cover shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200/20"
              height="550"
              src="product-dashboard-overview.png"
              width="550"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;