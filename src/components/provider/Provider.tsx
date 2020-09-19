import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

import reducer from '../../store/reducers';
import saga from '../../store/sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(saga);

const Provider: React.FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Provider;
