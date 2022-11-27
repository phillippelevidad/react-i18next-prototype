import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormat } from "../i18n/useFormat";

const data = {
  numberValue: 12345678.12345,
  percentage: 0.8765,
  name: "John Doe",
};

export function Miscelaneous() {
  const { t } = useTranslation(["common", "pages.miscelaneous"]);
  const {
    formatDate,
    formatDateAndTime,
    formatDecimal,
    formatInteger,
    formatMoney,
    formatPercent,
    formatTime,
  } = useFormat();

  const [numberOfDogs, setNumberOfDogs] = useState(0);

  const choiceOptions = ["yes", "no", "maybe"];
  const [choice, setChoice] = useState(choiceOptions[0]);

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">{t("pages.miscelaneous:title")}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td width="50%">
                <pre className="mb-0">formatInteger({data.numberValue})</pre>
              </td>
              <td>{formatInteger(data.numberValue)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDecimal({data.numberValue})</pre>
              </td>
              <td>{formatDecimal(data.numberValue)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDecimal({data.numberValue}, 4)</pre>
              </td>
              <td>{formatDecimal(data.numberValue, 4)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatPercent({data.percentage})</pre>
              </td>
              <td>{formatPercent(data.percentage)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatPercent({data.percentage}, 2)</pre>
              </td>
              <td>{formatPercent(data.percentage, 2)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatMoney({data.numberValue}, "USD")
                </pre>
              </td>
              <td>{formatMoney(data.numberValue, "USD")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatMoney({data.numberValue}, "USD", 4)
                </pre>
              </td>
              <td>{formatMoney(data.numberValue, "USD", 4)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "short")</pre>
              </td>
              <td>{formatDate(new Date(), "short")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "medium")</pre>
              </td>
              <td>{formatDate(new Date(), "medium")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "long")</pre>
              </td>
              <td>{formatDate(new Date(), "long")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "full")</pre>
              </td>
              <td>{formatDate(new Date(), "full")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "short")</pre>
              </td>
              <td>{formatTime(new Date(), "short")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "medium")</pre>
              </td>
              <td>{formatTime(new Date(), "medium")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "long")</pre>
              </td>
              <td>{formatTime(new Date(), "long")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "full")</pre>
              </td>
              <td>{formatTime(new Date(), "full")}</td>
            </tr>

            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "short")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "short")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "medium")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "medium")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "long")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "long")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "full")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "full")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  t("messageId", {"{"} {"/* see the code */"} {"}"})
                </pre>
              </td>
              <td>
                {t("pages.miscelaneous:textWithVariable", {
                  name: data.name,
                })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  t("messageId", {"{"} {"/* see the code */"} {"}"})
                </pre>
              </td>
              <td>
                {t("pages.miscelaneous:textWithLink", {
                  postProcess: "markdown",
                })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  t("messageId", {"{"} {"/* see the code */"} {"}"})
                </pre>
              </td>
              <td>
                {t("pages.miscelaneous:textWithBold", {
                  name: data.name,
                  postProcess: "markdown",
                })}
              </td>
            </tr>
            <tr>
              <td>
                {t("pages.miscelaneous:pluralMessageTitle")}
                <input
                  className="form-control"
                  type="number"
                  value={numberOfDogs}
                  onChange={(e) =>
                    setNumberOfDogs(Math.max(0, parseInt(e.target.value, 10)))
                  }
                />
              </td>
              <td>
                {t("pages.miscelaneous:pluralMessage", {
                  count: numberOfDogs,
                })}
              </td>
            </tr>
            <tr>
              <td>
                {t("pages.miscelaneous:contextMessageTitle")}
                <select
                  className="form-select"
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                >
                  {choiceOptions.map((option) => (
                    <option key={option} value={option}>
                      {t("pages.miscelaneous:contextMessageOptions", {
                        context: option,
                      })}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                {t("pages.miscelaneous:contextMessage", {
                  context: choice,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
