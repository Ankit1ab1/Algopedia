import {setArray} from "../../reducers/array";
import {setSwappers} from "../../reducers/swappers";
import {setRunning} from "../../reducers/running";
import {setSorted} from "../../reducers/sorted";
import {setHeapThree} from "../../reducers/heapSort";

function heapSort(array,dispatch,speed){
let myarray=array.slice(0);
let outputArray=[];

//build max heap
for(let index=Math.floor(array.length/2);~index;index--){
    heapify(myarray,outputArray,index,myarray.length);
}
for(let len=myarray.length-1;len>0;len--){
    outputArray.push([0, len]);
    let temp = myarray[len];
    myarray[len] = myarray[0];
    myarray[0] = temp;
    outputArray.push([0, len, true]);
    outputArray.push(myarray.slice(0));
    outputArray.push([]);
    outputArray.push([true, len]);
    heapify(myarray,outputArray, 0, len);
}
  handleDispatch(outputArray, dispatch, myarray, speed)

}


function heapify(array,outputArray,index,end){
if(index>=Math.floor(end/2)){
    return;
}
let right=index*2+2<end?index*2+2:null,left=index*2+1,swap;
if(right){
    outputArray.push([index,left,right]);
    swap=array[right]>array[left]?right:left;
}
else{
    outputArray.push([left,index]);
    swap=left;
}
if(array[swap]>array[index]){
    let temp = array[swap];
    array[swap] = array[index];
    array[index] = temp;
    outputArray.push([index, swap, true]);
    outputArray.push(array.slice(0));
    outputArray.push([]);
    heapify(array,outputArray,swap,end);
}

}
function handleDispatch(outputArray,dispatch,array,speed){
    if(!outputArray.length){
        dispatch(setSorted(array.map((num,index)=>index)));
        dispatch(setHeapThree([]));
        dispatch(setSwappers([]));
        dispatch(setArray(array));
        dispatch(setRunning(false));
        return;
    }

    let currentElement=outputArray.shift();
    if(currentElement.length>3){
        dispatch(setArray(currentElement));
        
    }
    else if((currentElement.length===3&& typeof currentElement[2]==="boolean")||currentElement.length===0){
        dispatch(setSwappers(currentElement));
    }
    else if(currentElement.length===2&& typeof currentElement[0]==="boolean"){
       dispatch(setSorted(currentElement));
    }
    else{
        dispatch(setHeapThree(currentElement));
    }
    setTimeout(()=>{
        handleDispatch(outputArray,dispatch,array,speed)
    },speed);
}

export default heapSort;