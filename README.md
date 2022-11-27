# react-i18next prototype

This demo shows how to use the [react-i18next](https://react.i18next.com/) library to supply translations and formatting to supported locales.

See it live at [codesandbox.io](https://codesandbox.io/p/github/phillippelevidad/react-i18next-prototype/main?file=%2FREADME.md).

There's also the [react-intl-prototype](https://github.com/phillippelevidad/react-intl-prototype), but I think i18next has better tooling and community support.

## Features

- Split your translation files by page and/or by component
- Load translations asynchronously
- Use markdown in your messages
- Use built-in formatting functions: integer, decimal, percent, money, date, time, datetime

## How to apply to your project

**1)** Install the necessary packages:

```
yarn add html-react-parser i18next i18next-browser-languagedetector i18next-http-backend markdown-it money
```

**2)** Copy the `src/i18n` folder as-is.

**3)** Configure i18next by importing the initilization script in your `index.js`:

```
import "./i18n/init";
```

**4)** Wrap your `<App />` component with `React.Suspense` for when the user changes the language and i18n needs to load the translation files:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
```

**5)** Add your translations to the `public` folder like so:

📄 /public/locales/en/pages.home.json

```json
{
  "helloWorld": "Hello world!"
}
```

📄 /public/locales/fr/pages.home.json

```json
{
  "helloWorld": "Bonjour le monde!"
}
```

**6)** And use your translations in your components like so:

```jsx
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation("pages.home");
  return <div>{t("helloWorld")}</div>;
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [i18next Crash Course (video)](https://www.youtube.com/watch?v=SA_9i4TtxLQ)
