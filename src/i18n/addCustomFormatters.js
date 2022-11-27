import {
  formatDate,
  formatDateAndTime,
  formatDecimal,
  formatInteger,
  formatMoney,
  formatPercent,
  formatTime,
} from "./format";

export function addCustomFormatters(i18next) {
  i18next.on("initialized", () => {
    i18next.services.formatter.add("date", (value, lng, options) => {
      return formatDate(lng, value, getStyleOption(options));
    });

    i18next.services.formatter.add("datetime", (value, lng, options) => {
      return formatDateAndTime(lng, value, getStyleOption(options));
    });

    i18next.services.formatter.add("decimal", (value, lng, options) => {
      return formatDecimal(lng, value, getPlacesOption(options));
    });

    i18next.services.formatter.add("integer", (value, lng) =>
      formatInteger(lng, value)
    );

    i18next.services.formatter.add("money", (value, lng, options) => {
      const currency = Object.keys(options).find((key) => key.length === 3);
      return formatMoney(lng, value, currency, getPlacesOption(options));
    });

    i18next.services.formatter.add("percent", (value, lng, options) => {
      return formatPercent(lng, value, getPlacesOption(options));
    });

    i18next.services.formatter.add("time", (value, lng, options) => {
      return formatTime(lng, value, getStyleOption(options));
    });
  });
}

function getStyleOption(options) {
  const styles = ["short", "medium", "long", "full"];
  return Object.keys(options).find((key) => styles.includes(key));
}

function getPlacesOption(options) {
  const numberStr = Object.keys(options).find((key) => !isNaN(Number(key)));
  return numberStr ? Number(numberStr) : undefined;
}
