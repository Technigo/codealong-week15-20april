import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { compose, createStore } from "redux";
import persistState from "redux-localstorage";

import { fridge } from "reducers/fridge";

import { AddItemForm } from "components/AddItemForm";
import { ItemList } from "components/ItemList";
import { ClearButton } from "components/ClearButton";
import { FridgeSummary } from "components/FridgeSummary";

const reducer = combineReducers({
  fridge: fridge.reducer,
});

const enhancer = compose(persistState());

const store = createStore(reducer, enhancer);
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
