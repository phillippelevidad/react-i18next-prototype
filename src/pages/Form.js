import { useTranslation } from "react-i18next";

export function Form() {
  const { t } = useTranslation("pages.form");

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">{t("pages.form:title")}</h1>
        <div className="col-md-6 col-xs-12">
          <form>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                {t("pages.form:fields.email.label")}
              </label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                aria-describedby="emailHelp"
                placeholder={t("pages.form:fields.email.placeholder")}
              />
              <div id="emailHelp" className="form-text">
                {t("pages.form:fields.email.help")}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                {t("pages.form:fields.subject.label")}
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder={t("pages.form:fields.subject.placeholder")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                {t("pages.form:fields.message.label")}
              </label>
              <textarea className="form-control" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">
              {t("pages.form:submit")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
