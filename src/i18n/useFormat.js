import { useTranslation } from "react-i18next";

import {
  formatDate,
  formatDateAndTime,
  formatDecimal,
  formatInteger,
  formatMoney,
  formatPercent,
  formatTime,
} from "./format";

export function useFormat() {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return {
    formatDate: (date, style = undefined) => formatDate(locale, date, style),

    formatDateAndTime: (
      date,
      style = undefined,
      dateAndTimeSeparator = undefined
    ) => formatDateAndTime(locale, date, style, dateAndTimeSeparator),

    formatDecimal: (value, places = undefined) =>
      formatDecimal(locale, value, places),

    formatInteger: (value) => formatInteger(locale, value),

    formatMoney: (value, currency = undefined, places = undefined) =>
      formatMoney(locale, value, currency, places),

    formatPercent: (value, places = undefined) =>
      formatPercent(locale, value, places),

    formatTime: (date, style = undefined) => formatTime(locale, date, style),
  };
}
