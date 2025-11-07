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
                  No solo nos creas a nosotros.
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
                      <p className="font-medium">Anthony Nuñes</p>
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
                    &quot;La interfaz intuitiva y las funciones poderosas hacen que Tribux sea la solución perfecta  &quot;
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
                Proyecto académico de Economía Computacional para el desarrollo de un servicio digital de apoyo tributario.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nuestra Historia</h3>
                <p className="text-muted-foreground">
                  Este proyecto nace como parte del curso de Economía de la Computación en la Universidad de Costa Rica, Sede del Atlántico, Recinto de Guápiles. Desarrollado por estudiantes de economía con el objetivo de aplicar principios de economía computacional para resolver problemas reales en el contexto de la transformación tributaria digital de Costa Rica.
                </p>
                <p className="text-muted-foreground">
                  El proyecto aborda la transición al Sistema Integrado de Gestión Tributaria TRIBU-CR, implementado por el Ministerio de Hacienda, que representa un cambio significativo en la administración fiscal costarricense. Nuestro enfoque es crear una solución tecnológica que facilite la adaptación de las micro, pequeñas y medianas empresas a este nuevo entorno digital.
                </p>

                <h3 className="text-2xl font-bold mt-8">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Desarrollar un servicio digital que aplique principios de economía computacional para evaluar la factibilidad de apoyar a las mipymes costarricenses en su adaptación al sistema TRIBU-CR. Buscamos optimizar costos de transacción, reducir asimetrías informativas y mejorar la eficiencia operativa mediante análisis de datos, modelado económico y desarrollo de prototipos funcionales.
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
                      <strong>Innovación Tecnológica:</strong> Aplicamos principios de economía computacional y tecnologías modernas para resolver problemas tributarios complejos.
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
                      <strong>Accesibilidad:</strong> Facilitamos la inclusión digital de las mipymes en el nuevo sistema tributario, reduciendo barreras técnicas.
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
                      <strong>Precisión y Confiabilidad:</strong> Nos comprometemos con la exactitud en el análisis de datos y la robustez de nuestras soluciones.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="relative h-[400px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <img
                    alt="Universidad de Costa Rica - Sede del Atlántico"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="team-photo.jpg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Equipo del Proyecto</h3>
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
                        CEO y Fundador
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
                  Contactar Equipo
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
