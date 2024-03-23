import { Reducer } from 'react';
import { createStore } from "redux"; 
import { combineReducers } from "redux"; 
import schoolReducer from "../Schoolproject/reducerSlice"


const rootReducer = combineReducers({ school: schoolReducer })   
const store = createStore(rootReducer)  

export default store;

