import {createAction,handleActions} from "redux-actions";
const defaultState=[];
export const SET_SWAPPER="SET_SWAPPER";
export const setSwappers=createAction(SET_SWAPPER);
export const swappers=handleActions({
    SET_SWAPPER:(state,{payload})=>{
        if(payload.length){
            return state.concat(payload);
        }else{
            return [];
        }
       
    }
},defaultState);
