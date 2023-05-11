import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./features/app/store";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { FormContextProvider } from "./context/FormContext";
import { ModalContextProvider } from "./context/ModalContext";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "~/context/index";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ModalContextProvider>
          <FormContextProvider>
            <BrowserRouter>
              <SoftUIControllerProvider>
                <App />
              </SoftUIControllerProvider>
            </BrowserRouter>
          </FormContextProvider>
        </ModalContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
