import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./store/favoritesSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
