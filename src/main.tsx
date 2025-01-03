import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route.tsx";
import { ThemeProvider } from "./provider/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <ThemeProvider>
    <Provider store={store}>
     <RouterProvider router={routes}/>
    </Provider>
    </ThemeProvider>
  </StrictMode>
);
