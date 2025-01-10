'use client';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <label htmlFor="language-select">{t('language')}: </label>
            <select
                id="language-select"
                value={i18n.language}
            >
                <option value="en">
                    <Link href="/en">
                        {t('english')}
                    </Link>
                </option>
                <option value="fr">
                    <Link href="/fr">
                        {t('french')}
                    </Link>
                </option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
