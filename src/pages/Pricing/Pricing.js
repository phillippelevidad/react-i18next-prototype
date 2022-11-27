import { useTranslation } from "react-i18next";
import { PricingBox } from "./PricingBox";
import fx from "money";

const LocaleCurrencies = {
  en: "USD",
  pt: "BRL",
};

const UsdPrices = {
  free: 0,
  pro: 15,
  enterprise: 29,
};

function getPrice(usdPrice, toCurrency) {
  return fx.convert(usdPrice, { from: "USD", to: toCurrency });
}

export function Pricing() {
  const { t, i18n } = useTranslation(["common", "pages.pricing"]);
  const currencyCode = LocaleCurrencies[i18n.language.substring(0, 2)];

  return (
    <div className="container">
      <header>
        <div className="mt-5 py-5 pb-md-4 mx-auto text-center">
          <h1 className="">{t("pages.pricing:title")}</h1>
          <p className="fs-5 text-muted">{t("pages.pricing:lead")}</p>
        </div>
      </header>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <PricingBox
              planName={t("pages.pricing:plans.free.name")}
              price={getPrice(UsdPrices.free, currencyCode)}
              currency={currencyCode}
              perks={[
                t("pages.pricing:plans.free.perk1"),
                t("pages.pricing:plans.free.perk2"),
                t("pages.pricing:plans.free.perk3"),
                t("pages.pricing:plans.free.perk4"),
              ]}
              ctaText={t("pages.pricing:plans.free.cta")}
            />
          </div>
          <div className="col">
            <PricingBox
              planName={t("pages.pricing:plans.pro.name")}
              price={getPrice(UsdPrices.pro, currencyCode)}
              currency={currencyCode}
              perks={[
                t("pages.pricing:plans.pro.perk1"),
                t("pages.pricing:plans.pro.perk2"),
                t("pages.pricing:plans.pro.perk3"),
                t("pages.pricing:plans.pro.perk4"),
              ]}
              ctaText={t("pages.pricing:plans.pro.cta")}
              highlightCtaButton
            />
          </div>
          <div className="col">
            <PricingBox
              planName={t("pages.pricing:plans.enterprise.name")}
              price={getPrice(UsdPrices.enterprise, currencyCode)}
              currency={currencyCode}
              perks={[
                t("pages.pricing:plans.enterprise.perk1"),
                t("pages.pricing:plans.enterprise.perk2"),
                t("pages.pricing:plans.enterprise.perk3"),
                t("pages.pricing:plans.enterprise.perk4"),
              ]}
              ctaText={t("pages.pricing:plans.enterprise.cta")}
              highlightPlan
              highlightCtaButton
            />
          </div>
        </div>
      </main>
    </div>
  );
}
