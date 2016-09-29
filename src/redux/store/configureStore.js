import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const devMode = window.devToolsExtension && process.env.NODE_ENV === 'development';
const enhancers = devMode ? window.devToolsExtension() : f => f;

export default function configureStore() {
  return createStore(
    rootReducer,
    enhancers,
  );
}
