import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import './globals.css';

function Landing(): React.JSX.Element {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Análisis Económico Avanzado con Tribux
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Potencia tu comprensión de la economía con nuestra plataforma de análisis avanzado.
                    Visualiza datos, predice tendencias y toma decisiones informadas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-1"
                    type="button"
                  >
                    Comenzar
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
                  >
                    Saber Más
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

        {/* Features Section */}
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
                  Nuestra interfaz amigable hace que la navegación y operación sea sencilla para todos los usuarios.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Análisis Avanzado</h3>
                <p className="text-muted-foreground">
                  Obtén insights valiosos con nuestras herramientas completas de análisis y reportes.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integración Perfecta</h3>
                <p className="text-muted-foreground">
                  Integra fácilmente con tus herramientas existentes sin interrupciones.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Colaboración en Tiempo Real</h3>
                <p className="text-muted-foreground">
                  Trabaja con tu equipo en tiempo real, sin importar dónde estén ubicados.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Flujos de Trabajo Automatizados</h3>
                <p className="text-muted-foreground">
                  Ahorra tiempo y reduce errores con nuestras capacidades de automatización inteligente.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Seguridad Empresarial</h3>
                <p className="text-muted-foreground">
                  Mantén la calma sabiendo que tus datos están protegidos por medidas de seguridad líderes en la industria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lo que Dicen Nuestros Usuarios
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                No solo nos creas a nosotros. Aquí está lo que nuestros usuarios dicen sobre Tribux.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    &quot;Tribux ha transformado completamente cómo analizamos los datos económicos. La eficiencia ha sido notable.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Foto de perfil de Antony Monge"
                      className="rounded-full ring-2 ring-primary/20 shadow-md hover:ring-primary/40 transition-all duration-200"
                      height="48"
                      src="thoughtful-artist.png"
                      width="48"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium">Antony Monge</p>
                      <p className="text-sm text-muted-foreground">
                        Economista, Universidad Nacional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    &quot;La interfaz intuitiva y las funciones poderosas hacen que Tribux sea la solución perfecta para nuestras necesidades de investigación económica.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Foto de perfil de Carlos López"
                      className="rounded-full ring-2 ring-primary/20 shadow-md hover:ring-primary/40 transition-all duration-200"
                      height="48"
                      src="thoughtful-artist.png"
                      width="48"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium">Carlos López</p>
                      <p className="text-sm text-muted-foreground">
                        Investigador, Banco Central
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    &quot;El soporte al cliente es excepcional. Cualquier problema que hemos tenido se resolvió rápida y profesionalmente.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Foto de perfil de María Rodríguez"
                      className="rounded-full ring-2 ring-primary/20 shadow-md hover:ring-primary/40 transition-all duration-200"
                      height="48"
                      src="thoughtful-artist.png"
                      width="48"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium">María Rodríguez</p>
                      <p className="text-sm text-muted-foreground">
                        Analista, Ministerio de Economía
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-muted py-20" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Precios Transparentes y Simples
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Elige el plan que mejor se adapte a tus necesidades.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Basic Plan */}
              <div className="flex flex-col rounded-lg border bg-background shadow transition-all hover:shadow-lg">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Básico</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      $29
                    </span>
                    <span className="ml-1 text-xl font-semibold">/mes</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Perfecto para investigadores individuales y pequeños equipos.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Hasta 5 miembros del equipo</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>20GB almacenamiento</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Análisis básico</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Soporte por email</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button
                    className="w-full rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    type="button"
                  >
                    Comenzar Prueba Gratuita
                  </button>
                </div>
              </div>

              {/* Pro Plan (Featured) */}
              <div className="flex flex-col rounded-lg border-2 border-primary bg-background shadow-lg transition-all hover:shadow-xl">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Profesional</h3>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Popular
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      $79
                    </span>
                    <span className="ml-1 text-xl font-semibold">/mes</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Ideal para empresas y equipos en crecimiento.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Hasta 20 miembros del equipo</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>100GB almacenamiento</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Análisis avanzado</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Soporte prioritario</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Integraciones personalizadas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button
                    className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    type="button"
                  >
                    Comenzar Prueba Gratuita
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background shadow transition-all hover:shadow-lg">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Empresarial</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      $199
                    </span>
                    <span className="ml-1 text-xl font-semibold">/mes</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Para grandes organizaciones con necesidades avanzadas.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Miembros del equipo ilimitados</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>1TB almacenamiento</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Análisis empresarial</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Soporte dedicado 24/7</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Desarrollo personalizado</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
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
                      <span>Garantías SLA</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button
                    className="w-full rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    type="button"
                  >
                    Contactar Ventas
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                ¿Necesitas un plan personalizado?
                <a
                  className="font-medium text-primary hover:underline"
                  href="/"
                >
                  Contáctanos
                </a>
                para una solución a medida.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20" id="about">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Acerca de Nuestra Empresa
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Estamos en una misión para transformar cómo operan las empresas con
                soluciones innovadoras.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nuestra Historia</h3>
                <p className="text-muted-foreground">
                  Tribux nació en 2023 como una iniciativa de estudiantes de economía de la Universidad Nacional de Costa Rica, con la visión de hacer el análisis económico accesible y poderoso para todos. Comenzamos con una idea simple: desarrollar herramientas que permitan a investigadores, empresas y gobiernos tomar decisiones informadas basadas en datos económicos precisos. Lo que inició como un proyecto académico ha evolucionado en una plataforma líder en análisis económico avanzado, atendiendo a cientos de usuarios en América Latina y más allá.
                </p>
                <p className="text-muted-foreground">
                  Nuestro viaje ha sido impulsado por la pasión por la economía y la creencia en el poder de los datos para transformar decisiones. Hemos crecido de un equipo pequeño a una empresa innovadora, manteniendo siempre nuestro compromiso con la precisión, la accesibilidad y el impacto real.
                </p>

                <h3 className="text-2xl font-bold mt-8">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  En Tribux, nuestra misión es democratizar el acceso al análisis económico avanzado, proporcionando herramientas intuitivas y poderosas que permitan a cualquier persona, desde estudiantes hasta profesionales experimentados, comprender y predecir tendencias económicas con confianza. Creemos que el conocimiento económico debe ser accesible para todos, independientemente de su formación técnica o recursos disponibles.
                </p>

                <h3 className="text-2xl font-bold mt-8">Nuestros Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
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
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Innovación:</strong> Constantemente exploramos nuevas metodologías y tecnologías para mejorar el análisis económico.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
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
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Precisión:</strong> Nos comprometemos con la exactitud y fiabilidad de nuestros datos y modelos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
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
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Accesibilidad:</strong> Hacemos que el análisis económico complejo sea simple y comprensible para todos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
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
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Impacto:</strong> Buscamos generar un impacto positivo en la toma de decisiones económicas a nivel individual y societal.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
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
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Colaboración:</strong> Fomentamos el trabajo en equipo y el intercambio de conocimientos en la comunidad económica.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="relative h-[400px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <img
                    alt="Equipo de Tribux trabajando juntos"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="team-photo.jpg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Equipo de Liderazgo</h3>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative size-32 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 shadow-xl hover:ring-primary/40 hover:shadow-2xl transition-all duration-300">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: 'url(ceo-portrait.jpg)',
                            filter: 'blur(8px) brightness(0.8)',
                          }}
                        />
                        <img
                          alt="Retrato de Antony Monge, CEO de Tribux"
                          className="relative z-10 size-32 rounded-full object-contain"
                          src="ceo-portrait.jpg"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-lg font-bold">Antony Monge</h4>
                      <p className="text-sm text-muted-foreground">
                        CEO y Fundadora
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <img
                        alt="Retrato de Cristopher Zúñiga, CTO de Tribux"
                        className="size-28 rounded-full object-cover mb-4 ring-4 ring-primary/20 shadow-xl hover:ring-primary/40 hover:shadow-2xl transition-all duration-300"
                        src="cto-portrait.jpg"
                        loading="lazy"
                      />
                      <h4 className="text-lg font-bold">Cristopher Zúñiga</h4>
                      <p className="text-sm text-muted-foreground">
                        CTO y Co-Fundador
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para Comenzar?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Únete a miles de clientes satisfechos que han transformado
                  su negocio con nuestra plataforma.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90"
                  type="button"
                >
                  Comenzar Prueba Gratuita
                </button>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                  type="button"
                >
                  Programar Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Landing,
  errorBoundary() {
    return <></>;
  },
});
