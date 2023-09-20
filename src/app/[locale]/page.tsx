'use client';

import { useTranslations } from 'next-intl';

import { useRouter } from 'next-intl/client';
import Link from 'next-intl/link';

export default function Home() {
  const t = useTranslations('Index');
  const router = useRouter();

  return (
    <div className="h-[100dvh]">
      <div className="flex gap-2">
        <Link href="/" locale="en">
          EN
        </Link>

        <Link href="/" locale="th">
          TH
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => router.push('/', { locale: 'en' })}
        >
          EN
        </button>
        <button
          className="btn btn-primary"
          onClick={() => router.push('/', { locale: 'th' })}
        >
          TH
        </button>
      </div>

      {t('title')}
    </div>
  );
}
