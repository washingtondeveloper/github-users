import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "./ducks";

export default createStore(rootReducer, applyMiddleware(reduxThunk));
