import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './stores';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        fetch('/service-worker.js', { method: 'HEAD' }) // Check if the file exists
            .then(response => {
                if (response.ok) {
                    navigator.serviceWorker.register('/service-worker.js')
                        .then(registration => {
                            console.log('Service Worker registered:', registration);
                        })
                        .catch(error => {
                            console.error('Service Worker registration failed:', error);
                        });
                } else {
                    console.warn('Service Worker file not found.');
                }
            })
            .catch(() => console.warn('Service Worker fetch failed.'));
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();