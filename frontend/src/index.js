import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

import { MapProvider } from 'providers/MapProvider';
import { AuthProvider } from 'providers/AuthProvider';
import { Provider } from 'react-redux';
import store from 'store';

import { apiKey } from 'config';

import * as serviceWorker from 'serviceWorker';
import 'style/style.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <MapProvider apiKey={apiKey}>
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
