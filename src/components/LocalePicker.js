import { useTranslation } from "react-i18next";

const locales = {
  en: "English",
  pt: "Português",
};

export function LocalePicker() {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <div className="d-flex">
      {Object.keys(locales).map((locale) => (
        <button
          key={locale}
          className="btn btn-light me-2"
          onClick={() => i18n.changeLanguage(locale)}
          disabled={locale === i18n.language}
        >
          {locales[locale]}
        </button>
      ))}
    </div>
  );
}
