import { legacy_createStore } from "redux";
import { ProductReducer } from "./reducer";

export const store = legacy_createStore(ProductReducer)