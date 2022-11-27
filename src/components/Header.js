import { Link, NavLink } from "react-router-dom";
import { LocalePicker } from "./LocalePicker";
import { useTranslation } from "react-i18next";

const menuItems = [
  {
    link: "/",
    i18nKey: "components.header:home",
  },
  {
    link: "/form",
    i18nKey: "components.header:form",
  },
  {
    link: "/pricing",
    i18nKey: "components.header:pricing",
  },
  {
    link: "/misc",
    i18nKey: "components.header:miscelaneous",
  },
  {
    link: "/custom",
    i18nKey: "components.header:customFormats",
  },
];

export function Header() {
  const { t } = useTranslation(["common", "components.header"]);

  function getNavLinkClassName({ isActive }) {
    const activeClass = isActive ? "active" : "";
    return `nav-link ${activeClass}`;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {t("siteName")}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {menuItems.map((item) => (
                <li key={item.link} className="nav-item">
                  <NavLink
                    className={getNavLinkClassName}
                    aria-current="page"
                    to={item.link}
                  >
                    {t(item.i18nKey)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <LocalePicker />
          </div>
        </div>
      </nav>
    </header>
  );
}
