"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Supported languages
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
  ];

  // Extract the current locale from the pathname
  const currentLocale = pathname.split("/")[1];

  // Handle language switch
  const switchLanguage = (locale: string) => {
    // Replace the current locale in the pathname with the new locale
    const newPathname = `/${locale}${pathname.slice(currentLocale.length + 1)}`;
    router.push(newPathname);
  };

  return (
    <div>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          style={{
            fontWeight: currentLocale === lang.code ? "bold" : "normal",
            marginRight: "8px",
          }}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}