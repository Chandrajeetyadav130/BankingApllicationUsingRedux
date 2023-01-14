import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { createStore } from "redux";
import { Provider } from "react-redux";
import bankingReducer from "./reducer";

const store = createStore(bankingReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);
