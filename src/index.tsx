import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<>
		<CssBaseline />
		<Provider store={store}>
			<App />
		</Provider>
	</>,
);
