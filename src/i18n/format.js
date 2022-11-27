const DEFAULT_CURRENCY = "USD";
const DEFAULT_DATE_TIME_STYLE = "short";

export function formatDate(locale, date, style = DEFAULT_DATE_TIME_STYLE) {
  return new Intl.DateTimeFormat(locale, { dateStyle: style }).format(date);
}

export function formatDateAndTime(
  locale,
  date,
  style = DEFAULT_DATE_TIME_STYLE,
  dateAndTimeSeparator = " "
) {
  const dt = formatDate(locale, date, style);
  const time = formatTime(locale, date, style);
  return `${dt}${dateAndTimeSeparator}${time}`;
}

export function formatDecimal(locale, value, places = 2) {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: places,
    maximumFractionDigits: places,
  }).format(value);
}

export function formatInteger(locale, value) {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatMoney(
  locale,
  value,
  currency = DEFAULT_CURRENCY,
  places = 2
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: places,
    maximumFractionDigits: places,
  }).format(value);
}

export function formatPercent(locale, value, places = 0) {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: places,
    maximumFractionDigits: places,
  }).format(value);
}

export function formatTime(locale, date, style = DEFAULT_DATE_TIME_STYLE) {
  return new Intl.DateTimeFormat(locale, { timeStyle: style }).format(date);
}
