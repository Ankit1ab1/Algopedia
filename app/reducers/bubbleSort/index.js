import{createAction,handleActions} from "redux-actions";
const defaultState=[];
export const SET_BUBBLE="SET_BUBBLE";
export const setBubble=createAction(SET_BUBBLE);
export  const bubble=handleActions({
    SET_BUBBLE:(state,{payload})=>{
return payload;

}},defaultState);