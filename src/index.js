import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./redux/store.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS globally
AOS.init({
    offset: 200,
    duration: 800,
    easing: 'linear', 
    delay: 100,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

