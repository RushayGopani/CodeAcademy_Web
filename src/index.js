import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/store'

=======
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
>>>>>>> e28cf6b (Added remaining files)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
      </React.StrictMode>,
=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
>>>>>>> e28cf6b (Added remaining files)
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
