import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from '../reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ["product_data", "liked", "cart", "language"]
  };

  const presistedReducer = persistReducer(persistConfig, rootReducer );
  const store = createStore(presistedReducer, compose(applyMiddleware(thunk), window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION() || compose));
  const persistor = persistStore(store);
  export { persistor, store };