import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* Import Reducers */
import { provider, tokens } from "./reducers";

const reducer = combineReducers({
  provider,
  tokens,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// const composeEnhancers = composeWithDevTools({
//   realtime: true,
//   name: "Your Instance Name",
//   hostname: "localhost",
//   port: 3000, // the port your remotedev server is running at
// });

// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleware))
// );

export default store;
