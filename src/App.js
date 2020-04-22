import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';

import { fridge } from 'reducers/fridge';

import { AddItemForm } from 'components/AddItemForm';
import { ItemList } from 'components/ItemList';
import { ClearButton } from 'components/ClearButton';
import { FridgeSummary } from 'components/FridgeSummary';
import { CustomCheckbox } from 'components/CustomCheckbox';

// Old store code
const reducer = combineReducers({
  fridge: fridge.reducer,
});

// const store = configureStore({ reducer });

// New store code
// 1. Retrieve the localstorage and use it as our initial state
const persistedStateJSON = localStorage.getItem('week15-reduxState');
console.log(`persistedStateJSON: ${persistedStateJSON}`);
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`);

// 2. Create the store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // 3. Store the state in localstorage on ANY redux state change
// store.subscribe(() => {
//   localStorage.setItem('week15-reduxState', JSON.stringify(store.getState()));
// });

export const App = () => {
  return (
    <Provider store={store}>
      <FridgeSummary />
      <AddItemForm />
      <ItemList />
      <ClearButton />
    </Provider>
  );
};
