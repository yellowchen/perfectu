import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import axios from "axios";

import "./styles/all.scss";

import App from "./App";
import { store } from './store';
import { Provider}  from "react-redux";
import ScrollToTop from './components/share/ScrollToTop';


axios.defaults.baseURL = process.env.REACT_APP_API_URL;  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
                <ScrollToTop />
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>
);