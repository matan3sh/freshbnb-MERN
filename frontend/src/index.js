import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

import { ToastContainer, Zoom } from 'react-toastify';
import { MapProvider } from 'providers/MapProvider';
import { AuthProvider } from 'providers/AuthProvider';
import { Provider } from 'react-redux';
import store from 'store';

import { apiKey } from 'config';

import * as serviceWorker from 'serviceWorker';
import 'style/style.css';
import 'react-toastify/dist/ReactToastify.css';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'react-responsive-modal/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <MapProvider apiKey={apiKey}>
          <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={5000}
            position='top-center'
          />
          <App />
        </MapProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
