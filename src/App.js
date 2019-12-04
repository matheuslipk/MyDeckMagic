import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './config/reactotronConfig';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyles from './styles/global';

import store from './store';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
