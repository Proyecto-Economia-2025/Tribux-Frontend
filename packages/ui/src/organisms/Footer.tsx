import React from 'react';
import { Logo } from '../atoms/Logo';
import { SocialIcon } from '../molecules/SocialIcon';
import { NavLink } from '../molecules/NavLink';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps): React.JSX.Element {
  const productLinks = ['Características', 'Precios', 'Integraciones', 'Preguntas Frecuentes', 'Registro de Cambios'];
  const companyLinks = ['Acerca de', 'Blog', 'Carreras', 'Prensa', 'Socios'];
  const legalLinks = ['Términos', 'Privacidad', 'Cookies', 'Licencias', 'Contacto'];

  return (
    <footer className={`border-t border-muted bg-background ${className || ''}`}>
      <div className="px-4 py-12 md:px-6 md:py-16 mx-auto max-w-7xl">
        <div className="grid gap-8 grid-cols-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-muted-foreground">
              Potenciando empresas con soluciones innovadoras. Tu
              éxito es nuestra prioridad.
            </p>
            <div className="mt-6 flex gap-4">
              <SocialIcon name="twitter" />
              <SocialIcon name="linkedin" />
              <SocialIcon name="facebook" />
              <SocialIcon name="instagram" />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Producto
            </h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item}>
                  <NavLink href="/" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item}>
                  <NavLink href="/" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item}>
                  <NavLink href="/" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tribux, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
