import { useTranslation } from "react-i18next";

const data = {
  numberValue: 12345678.12345,
  percent: 0.8765,
  name: "John Doe",
};

export function CustomFormats() {
  const { t } = useTranslation(["common", "pages.customFormats"]);

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">{t("pages.customFormats:title")}</h1>
        <p>{t("pages.customFormats:lead")}</p>
        <table className="table">
          <tbody>
            <tr>
              <td width="50%">
                <pre className="mb-0">{"{{value, integer}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:integer", { value: data.numberValue })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, decimal}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:decimal", { value: data.numberValue })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, decimal(4)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:decimal4", { value: data.numberValue })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, percent}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:percent", { value: data.percent })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, percent(2)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:percent2", { value: data.percent })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, money(BRL)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:money", { value: data.numberValue })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, money(BRL; 4)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:money4", { value: data.numberValue })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, date}}"}</pre>
              </td>
              <td>{t("pages.customFormats:date", { value: new Date() })}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, date(medium)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:dateMedium", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, date(long)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:dateLong", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, date(full)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:dateFull", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, time}}"}</pre>
              </td>
              <td>{t("pages.customFormats:time", { value: new Date() })}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, time(medium)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:timeMedium", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, time(long)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:timeLong", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, time(full)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:timeFull", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, datetime}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:datetime", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, datetime(medium)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:datetimeMedium", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, datetime(long)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:datetimeLong", { value: new Date() })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">{"{{value, datetime(full)}}"}</pre>
              </td>
              <td>
                {t("pages.customFormats:datetimeFull", { value: new Date() })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
