import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /favicon.ico, /sitemap.xml, /robots.txt (Static files)
  matcher: ['/((?!api|_next|_vercel|favicon.ico|sitemap.xml|robots.txt).*)']
};