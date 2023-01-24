import { themeReducer } from "./darkmode/darkModeReducer";
import { tokenReducer } from "./token/tokenReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ themeReducer, tokenReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));

// export const store = configureStore({
//   reducer: {
//     darkMode: darkModeReducer,
//   },
// });
