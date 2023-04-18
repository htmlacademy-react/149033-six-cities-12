import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction } from './store/user-process/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
      />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);

