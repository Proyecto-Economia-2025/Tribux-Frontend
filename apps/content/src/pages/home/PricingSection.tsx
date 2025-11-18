import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MagicCard } from '@/components/ui/magic-card';
import { ShimmerButton } from '@/components/ui/shimmer-button';

function PricingSection(): React.JSX.Element {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      description: "Perfecto para investigadores individuales y pequeños equipos.",
      features: [
        "Hasta 5 miembros del equipo",
        "20GB almacenamiento",
        "Análisis básico",
        "Soporte por email"
      ],
      buttonText: "Comenzar Prueba Gratuita",
      popular: false
    },
    {
      name: "Profesional",
      price: "$79",
      period: "/mes",
      description: "Ideal para empresas y equipos en crecimiento.",
      features: [
        "Hasta 20 miembros del equipo",
        "100GB almacenamiento",
        "Análisis avanzado",
        "Soporte prioritario",
        "Integraciones personalizadas"
      ],
      buttonText: "Comenzar Prueba Gratuita",
      popular: true
    },
    {
      name: "Empresarial",
      price: "$199",
      period: "/mes",
      description: "Para grandes organizaciones con necesidades avanzadas.",
      features: [
        "Miembros del equipo ilimitados",
        "1TB almacenamiento",
        "Análisis empresarial",
        "Soporte dedicado 24/7",
        "Desarrollo personalizado",
        "Garantías SLA"
      ],
      buttonText: "Contactar Ventas",
      popular: false
    }
  ];

  return (
    <section className="bg-muted/30 py-20" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            Precios Transparentes y Simples
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-xl text-muted-foreground md:text-2xl leading-relaxed">
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <MagicCard
              key={index}
              className={`h-full cursor-pointer p-8 ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              gradientFrom="#0f766e"
              gradientTo="#38bdf8"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-3xl font-bold">{plan.name}</h3>
                    {plan.popular && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline mb-4">
                    <span className="text-6xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-2xl font-semibold text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 mb-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="size-5 text-primary mr-3 flex-shrink-0"
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
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <ShimmerButton
                    className={`w-full h-12 text-lg font-semibold ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border-2 border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    variant={plan.popular ? 'default' : 'ghost'}
                    onClick={() => navigate('/create-user')}
                  >
                    {plan.buttonText}
                  </ShimmerButton>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            ¿Necesitas un plan personalizado?{' '}
            <a
              className="font-semibold text-primary hover:underline transition-colors"
              href="/"
            >
              Contáctanos
            </a>{' '}
            para una solución a medida.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;