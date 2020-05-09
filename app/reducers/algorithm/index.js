export const SET_ALGORITHM='SET_ALGORITHM';
export const setAlgorithm =(payload) =>{
    return({
       type: SET_ALGORITHM,
        payload
    });
}
export const algorithm =(state="",action)=>{
if(action.type==="SET_ALGORITHM"){
    return action.payload;
}
return state;
}
