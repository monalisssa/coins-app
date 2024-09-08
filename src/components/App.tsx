import React from 'react';
import 'antd/dist/reset.css';
import '../constants/styles/global.css';
import store from '../store/store';
import { Provider } from 'react-redux';
import Details from '../pages/Details';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import MainRoutes from '../constants/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={MainRoutes.HOME} element={<Home />} />
        <Route path={MainRoutes.ABOUT} element={<Details />} />
      </Routes>
    </Provider>
  );
};

export default App;
