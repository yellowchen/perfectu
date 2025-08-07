import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";

import App from './App';
import "./styles/all.scss";
import axios from "axios";
import { store } from './store';
import { Provider}  from "react-redux";
import ScrollToTop from './components/Effect/ScrollToTop';


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