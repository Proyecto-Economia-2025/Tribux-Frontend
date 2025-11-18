import React from 'react';
import { navigateToUrl } from 'single-spa';
import { MagicCard } from '@/components/ui/magic-card';
import { ShimmerButton } from '@/components/ui/shimmer-button';

function PricingSection(): React.JSX.Element {

  const plans = [
    {
      name: "Básico",
      price: "₡5,900",
      period: "/mes",
      description: "Ideal para comercios pequeños y microempresas que requieren soporte esencial.",
      features: [
        "Onboarding guiado (30 min)",
        "Integración con Tico Factura (básica)",
        "Hasta 200 facturas / mes",
        "Conciliación automática básica",
        "1 usuario",
        "Soporte por email (48‑72h)"
      ],
      buttonText: "Comenzar Prueba Gratuita",
      popular: false
    },
    {
      name: "Profesional",
      price: "₡14,900",
      period: "/mes",
      description: "Para pymes que necesitan conciliación avanzada y reportes personalizados.",
      features: [
        "Todo lo de Básico",
        "Hasta 1,000 facturas / mes",
        "3 usuarios",
        "Integraciones POS y contables",
        "Soporte prioritario (24h) y 1 sesión analítica mensual"
      ],
      buttonText: "Comenzar Prueba Gratuita",
      popular: true
    },
    {
      name: "Empresarial",
      price: "₡39,900",
      period: "/mes",
      description: "Solución completa para empresas y despachos con integración y SLA.",
      features: [
        "Facturación ilimitada",
        "Usuarios y sucursales ilimitadas",
        "API e integraciones a medida",
        "Soporte dedicado 24/7 y SLA",
        "Panel multi‑cliente y white‑label disponible"
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
                    onClick={() => navigateToUrl('/auth/create-user')}
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