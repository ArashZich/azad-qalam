import React from "react";
import { AppProvider } from "./store";
import { Home } from "./screens";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <AppProvider>
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    </AppProvider>
  );
}

export default App;
