import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDector from "i18next-browser-languagedetector";
import markdownPostprocessor from "./markdownPostprocessor";
import { initReactI18next } from "react-i18next";
import fx from "money";
import { addCustomFormatters } from "./addCustomFormatters";

i18next
  .use(Backend)
  .use(LanguageDector)
  .use(markdownPostprocessor)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "pt",
    ns: ["common"],
    defaultNS: "common",
  });

addCustomFormatters(i18next);

// http://openexchangerates.github.io/money.js/#fx.rates
// https://openexchangerates.org/
fx.base = "USD";
fx.rates = {
  BRL: 5.5,
  USD: 1,
};
