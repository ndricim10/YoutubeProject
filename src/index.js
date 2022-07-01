import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Redux/Reducers/Store";
import LightMode from "./LightMode/LightMode";
import 'react-lazy-load-image-component/src/effects/blur.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <Provider store={store}>
      <Router>
        <LightMode />
        <App />
      </Router>
    </Provider>
  </>
);
