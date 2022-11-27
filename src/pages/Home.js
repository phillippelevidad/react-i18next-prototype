import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation("pages.home");

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">{t("pages.home:title")}</h1>
        <p className="lead">
          {t("pages.home:lead", { postProcess: "markdown" })}
        </p>
      </div>
    </main>
  );
}
