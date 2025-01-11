import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'fr')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Using a more robust path resolution
    messages: (await import(`../../messages/${locale}.json`)).default,
    // Optional: Add timeZone configuration
    timeZone: 'Europe/Paris',
    // Optional: Add number formatting
    formats: {
      number: {
        currency: {
          style: 'currency',
          currency: locale === 'en' ? 'USD' : 'EUR'
        }
      },
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      }
    }
  };
});