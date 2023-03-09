import { combineReducers } from "redux";
import { mainReducer } from "./dataReducer/dataReducer";


export const rootReducer = combineReducers({
    main:mainReducer
});
