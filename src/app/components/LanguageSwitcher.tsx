"use client";

import { LanguagesIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Supported languages
  const languages = [
    { code: "en", name: "English", icon: <LanguagesIcon /> },
    { code: "fr", name: "Français", icon: <LanguagesIcon /> },
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
    <div className="flex gap-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          style={{
            fontWeight: currentLocale === lang.code ? "bold" : "normal",
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>{lang.icon}</span> {/* Display the icon */}
          <span>{lang.name}</span> {/* Display the language name */}
        </button>
      ))}
    </div>
  );
}