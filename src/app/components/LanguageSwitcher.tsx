'use client';

import { useLocale } from 'next-intl';
import { Link } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex gap-2">
      <Link 
        href="/" 
        locale="en"
        className={locale === 'en' ? 'font-bold' : ''}
      >
        English
      </Link>
      <Link 
        href="/" 
        locale="fr"
        className={locale === 'fr' ? 'font-bold' : ''}
      >
        Français
      </Link>
    </div>
  );
}