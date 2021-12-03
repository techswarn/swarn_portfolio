import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./scss/main.scss";
import App from "./App";
import { PostStateProvider } from "./Components/state/usePostState";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <PostStateProvider>
      <App />
    </PostStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
