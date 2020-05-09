import {createAction,handleActions} from "redux-actions"
const SET_PIVOT="SET_PIVOT";
const SET_QUICK_TWO="SET_QUICK_TWO";
const defaultstate1=null;
const defaultstate2=[];
export const setPivot=createAction(SET_PIVOT);
export const setQuickTwo=createAction(SET_QUICK_TWO);

export const pivot=handleActions({
SET_PIVOT:(state,{payload})=>{
    return payload;
}
},defaultstate1);
export const quickTwo=handleActions({
    SET_QUICK_TWO:(state,{payload})=>{
        return payload;
    }
 },defaultstate2);
