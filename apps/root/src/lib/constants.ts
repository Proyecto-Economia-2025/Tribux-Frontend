// Application constants
export const APP_NAME = 'Tribux';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = process.env.API_BASE_URL || 'https://api.tribux.com';

// Routes
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

// Feature flags
export const FEATURES = {
  DARK_MODE: true,
  MULTI_TENANT: false,
  ANALYTICS: true,
} as const;