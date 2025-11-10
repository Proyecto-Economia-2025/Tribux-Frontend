import React from 'react';

function FeaturesSection(): React.JSX.Element {
  return (
    <section className="bg-muted py-20" id="features">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Características Principales
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Descubre las poderosas características que hacen de Tribux la mejor herramienta para análisis económico.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <svg
                className="h-5 w-5"
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Interfaz Intuitiva</h3>
            <p className="text-muted-foreground">
              Navega fácilmente por todas las funcionalidades con una interfaz moderna y fácil de usar.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <svg
                className="h-5 w-5"
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
                <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                <circle cx="12" cy="16" r="1" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Seguridad Avanzada</h3>
            <p className="text-muted-foreground">
              Tus datos están protegidos con los más altos estándares de seguridad y encriptación.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <svg
                className="h-5 w-5"
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
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Análisis en Tiempo Real</h3>
            <p className="text-muted-foreground">
              Obtén insights instantáneos sobre tu situación tributaria con análisis en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;