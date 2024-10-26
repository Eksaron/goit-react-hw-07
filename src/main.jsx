// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";
// // import { persistor, store } from "./redux/store.js";
// import { store } from "./redux/store";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//       <App />
//       {/* </PersistGate>{" "} */}
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
