import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ArrowProvider } from "./components/ArrowContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArrowProvider>
      <App />
    </ArrowProvider>
  </BrowserRouter>
);
