import React from 'react';
import { MagicCard } from '@/components/ui/magic-card';
import { Icon } from '@tribux/ui';

function TestimonialsSection(): React.JSX.Element {
  const testimonials = [
    {
      quote: "Tribux ha transformado completamente cómo analizamos los datos económicos. La eficiencia ha sido notable.",
      name: "Anthony Nuñes",
      role: "Economista, Universidad Nacional",
      avatar: 'teacher'
    },
    {
      quote: "La interfaz intuitiva y las funciones poderosas hacen que Tribux sea la solución perfecta para nuestras necesidades.",
      name: "Carlos López",
      role: "Investigador, Banco Central",
      avatar: 'briefcase'
    },
    {
      quote: "El soporte al cliente es excepcional. Cualquier problema que hemos tenido se resolvió rápida y profesionalmente.",
      name: "María Rodríguez",
      role: "Analista, Ministerio de Economía",
      avatar: 'laptop'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            Lo que Dicen Nuestros Usuarios
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-xl text-muted-foreground md:text-2xl leading-relaxed">
            No solo nos creas a nosotros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MagicCard
              key={index}
              className="h-full cursor-pointer p-8"
              gradientFrom="#0f766e"
              gradientTo="#38bdf8"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex-1">
                  <svg
                    className="h-8 w-8 text-primary/60 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 8v8c0 2.2-1.8 4-4 4H4c-1.1 0-2-.9-2-2s.9-2 2-2h2V8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zM26 8v8c0 2.2-1.8 4-4 4h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2V8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2z"/>
                  </svg>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl ring-2 ring-primary/20 shadow-md">
                    <Icon name={testimonial.avatar} size={20} className="text-primary/70" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;