import { createStore, combineReducers, applyMiddleware } from "redux";
import BPReducer from "./reducer";
import { createLoggerMiddleware } from "./middlewares";

// const rootReducers = combineReducers({
//   bp: BPReducer
// });
const combineApplyMiddlewares = applyMiddleware(createLoggerMiddleware);
const store = createStore(BPReducer, combineApplyMiddlewares);
export default store;
