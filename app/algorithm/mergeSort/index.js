import {setArray} from "../../reducers/array";
import {setSwappers} from "../../reducers/swappers";
import {setRunning} from "../../reducers/running";
import {setSorted} from "../../reducers/sorted";
import {setMergeTwo} from "../../reducers/mergeSort";

function mergeSort(array,dispatch,speed){
    let myarray=array.slice(0);
    let outputArray=[];
    myarray=mergeSortHelper(myarray.map((num,index)=>[num,index]),outputArray,0,myarray.length-1,{array:array.slice(0)});
    handleDispatch(outputArray,dispatch,myarray,speed);
}
function mergeSortHelper(array,outputArray,l,r,obj){
    if(array.length===1){
        return array;
    }

    let mid=parseInt((array.length)/2),
    first=array.slice(0,mid),
    second=array.slice(mid),
    indexHalf = Math.floor((l + 1 + r) / 2);
    first=mergeSortHelper(first,outputArray,l,indexHalf-1,obj);
    second=mergeSortHelper(second,outputArray,indexHalf,r,obj);
    let finalMerge=false;
    if(first.length+second.length===obj.array.length)finalMerge=true;
return(merge(first,second,outputArray,obj,l,r,finalMerge))
    

}

function merge(first,second,outputArray,obj,l,r,finalMerge){
   let mergedArray=[];
   let indexToPush=l;
   
    while(first.length&&second.length){
        outputArray.push([first[0][1],second[0][1]]);
        if(first[0][0]<=second[0][0]){
            indexToPush++;
            mergedArray.push(first.shift());
        }
        else{
            outputArray.push([first[0][1],second[0][1],true]);
            second[0][1]=indexToPush++;
            mergedArray.push(second.shift());
            first.forEach((sub)=>sub[1]++);
            if (l === 0) {
                obj.array = mergedArray.map(subArr => subArr[0]).concat(first.map(subArr => subArr[0])).concat(second.map(subArr => subArr[0])).concat(obj.array.slice(r + 1));
              } else {
                obj.array = obj.array.slice(0, l).concat(mergedArray.map(subArr => subArr[0])).concat(first.map(subArr => subArr[0])).concat(second.map(subArr => subArr[0])).concat(obj.array.slice(r + 1));
              }
              outputArray.push(obj.array.concat([indexToPush - 1, indexToPush]));
              outputArray.push([]);
            }
            if (finalMerge) outputArray.push([true, indexToPush - 1]);
    }
    return mergedArray.concat(first).concat(second);
}
            
    

    

function handleDispatch(outputArray,dispatch,array,speed){
    if(!outputArray.length){
        dispatch(setSorted(array.map((num,index)=>index)));
        dispatch(setMergeTwo([]));
        dispatch(setSwappers([]));
        dispatch(setArray(array));
        dispatch(setRunning(false));
        return;
    }

    let currentElement=outputArray.shift();
    if(currentElement.length>3){
        
        dispatch(setArray(currentElement.slice(0, currentElement.length - 2)));
        dispatch(setSwappers([]));
        dispatch(setMergeTwo([]));
        dispatch(setSwappers([currentElement[currentElement.length - 2], currentElement[currentElement.length - 1]]));
        dispatch(setMergeTwo([currentElement[currentElement.length - 2], currentElement[currentElement.length - 1]]));
        
    }
    else if(currentElement.length===3||currentElement.length===0){
        dispatch(setSwappers(currentElement));
    }
    else if(currentElement.length===2&& typeof currentElement[0]==="boolean"){
       dispatch(setSorted(currentElement));
    }
    else{
        dispatch(setMergeTwo(currentElement));
    }
    setTimeout(()=>{
        handleDispatch(outputArray,dispatch,array,speed)
    },speed);
}
export default mergeSort;