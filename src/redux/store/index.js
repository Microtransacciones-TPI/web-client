import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { saveState } from "./localStorage";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
