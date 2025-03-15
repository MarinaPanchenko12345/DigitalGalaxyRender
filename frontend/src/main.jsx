import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import { SortProvider } from "./contexts/SortContext";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";
import { UserProvider } from "./contexts/UserContext";
import { CardProvider } from "./contexts/CardContext";
import { CardsUserProvider } from "./contexts/CardsUserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CardProvider>
      <CardsUserProvider>
        <CartProvider>
          <OrderProvider>
            <SearchProvider>
              <UserProvider>
                <SortProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </SortProvider>
              </UserProvider>
            </SearchProvider>
          </OrderProvider>
        </CartProvider>
      </CardsUserProvider>
    </CardProvider>
  </Provider>
);
