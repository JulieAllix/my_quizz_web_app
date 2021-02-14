import {combineReducers} from "redux";

// ACTIONS

export function setUser(newUser: any) {
    return {
        type: "update_user",
        payload: newUser
    }
}

// REDUCERS

//@ts-ignore
const userReducer = (state: {} = null, action: any) => {
    if (action.type === "update_user") {
        if (action.payload && action.payload.name === "Error") {
            return {...state}
        }

        return action.payload;
    }
    return state
};

export const reducers = combineReducers({
    user: userReducer,
});