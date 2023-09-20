import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Thai Love',
  description: 'Dating site to find your Thai love',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'th' }];
}

export default async function LocaleRootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="./../favicon.ico" sizes="48x48" type="image/x-icon" />
      </head>

      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <>{children}</>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
