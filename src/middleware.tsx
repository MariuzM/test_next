import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'th'] as const;

export default createMiddleware({
  locales,
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
