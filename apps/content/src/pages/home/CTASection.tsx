import React from 'react';
import { useNavigate } from 'react-router-dom';

function CTASection(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Listo para comenzar?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
            Únete a miles de usuarios que ya confían en Tribux para sus necesidades tributarias.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              type="button"
              onClick={() => navigate('/auth/login')}
            >
              Iniciar Sesión
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
      </div>
    </section>
  );
}

export default CTASection;