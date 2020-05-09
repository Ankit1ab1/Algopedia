import {setArray} from "../../reducers/array";
import {setSwappers} from "../../reducers/swappers";
import {setRunning} from "../../reducers/running";
import {setSorted} from "../../reducers/sorted";
import {setQuickTwo,setPivot} from "../../reducers/quickSort";

function quickSort(array,dispatch,speed){
    let myarray=array.slice(0);
    console.log(myarray.length);
    let outputArray=[];
    quickSortHelper(myarray,0,myarray.length-1,outputArray);
    handleDispatch(outputArray,dispatch,myarray,speed);

}
function quickSortHelper(array,start,end,outputArray){
    console.log(outputArray.length);
     if(start>=end){
         outputArray.push([true,start]);
         return;
     }
     let left=start+1;
     let pivot=start;
     let right=end;
     outputArray.push(pivot);
     outputArray.push([left,right]);
     while(right>=left){
         if(array[right]<array[pivot]&&array[left]>array[pivot]){
             outputArray.push([left,right,true]);
             let temp=array[right];
             array[right]=array[left];
             array[left]=temp;
             outputArray.push(array.slice(0));
             outputArray.push([]);
         }
         if(array[pivot]<=array[right]){
             right--;
         }
         if(array[pivot]>=array[left]){
            left++;
        }
        if(right>=left){
            outputArray.push([left,right]);
        }
     }
     if(pivot!==right){
        outputArray.push([pivot,right,true]);
        let temp=array[right];
        array[right]=array[pivot];
        array[pivot]=temp;
        outputArray.push(array.slice(0));
         outputArray.push([]);
         outputArray.push([true,right]);
     }
     quickSortHelper(array,start,right-1,outputArray);
     quickSortHelper(array,right+1,end,outputArray);
}
function handleDispatch(outputArray,dispatch,array,speed){
    if(!outputArray.length){
        dispatch(setSorted(array.map((num,index)=>index)));
        dispatch(setQuickTwo([]));
        dispatch(setPivot(null))
        dispatch(setSwappers([]));
        dispatch(setArray(array));
        dispatch(setRunning(false));
        return;
    }

    let currentElement=outputArray.shift();
    if(currentElement.length>3){
        dispatch(setArray(currentElement));
        
    }
    else if(!(currentElement instanceof Array)){
        dispatch(setPivot(currentElement));
    }
    else if(currentElement.length===3||currentElement.length===0){
        dispatch(setSwappers(currentElement));
    }
    else if(currentElement.length===2&& typeof currentElement[0]==="boolean"){
       dispatch(setSorted(currentElement));
    }
    else{
        dispatch(setQuickTwo(currentElement));
    }
    setTimeout(()=>{
        handleDispatch(outputArray,dispatch,array,speed)
    },speed);
}
export default quickSort;