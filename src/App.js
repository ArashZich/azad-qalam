import React from "react";
import { AppProvider } from "./store";
import { Home } from "./screens";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
