import { registerApplication, start } from 'single-spa';
import './styles/globals.css';

// The header and footer are defined within the root.
registerApplication(
  'header',
  () => import('./header'),
  (location) => {
    // Hide header on dashboard and authenticated routes
    const hiddenPaths = ['/dashboard', '/menu', '/invoices'];
    const isHidden = hiddenPaths.some(path => 
      location.pathname.startsWith(path)
    );
    return !isHidden;
  },
);

registerApplication(
  'footer',
  () => import('./footer'),
  () => true,
);

// The content application is defined in the content microfrontend.
registerApplication(
  'content',
  () => import('content/App'),
  (location) => {
    // Active for root path, auth routes, invoices, dashboard, and menu
    return location.pathname === '/' ||
           location.pathname.startsWith('/auth/') ||
           location.pathname.startsWith('/invoices/') ||
           location.pathname === '/dashboard' ||
           location.pathname === '/menu';
  },
);

start();
