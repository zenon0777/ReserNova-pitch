import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';

// Note the async function and proper typing
export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    // Validate that the incoming locale is supported
    if (!locales.includes(locale as 'en' | 'fr')) {
        throw new Error('Invalid locale');
    }

    // Load messages for the current locale
    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        throw new Error(`Failed to load messages for locale: ${locale}`);
        console.log(error);
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {/* language switcher */}
            <div className='flex justify-end p-4 mb-4'>
                <LanguageSwitcher />
            </div>
            <LanguageSwitcher />
            {children}
        </NextIntlClientProvider>
    );
}