import { createAction,handleActions } from "redux-actions";
const SET_HEAP_THREE="SET_HEAP_THREE";
let defaultState=[];
export const setHeapThree=createAction(SET_HEAP_THREE);
export const heapThree=handleActions({
    SET_HEAP_THREE:(state,{payload})=>{
    return payload;
    }
},defaultState);

