import {setArray} from "../../reducers/array";
import {setSwappers} from "../../reducers/swappers";
import {setRunning} from "../../reducers/running";
import {setSorted} from "../../reducers/sorted";
import {setBubble} from "../../reducers/bubbleSort";

function bubbleSort(array,dispatch,speed){
    let myArray=array.slice(0);
    let sorted=false;
    let outputArray=[];
    let round=0;
    while(sorted!==true){
        sorted=true;
        for(let i=0;i<myArray.length-1-round;i++){
            outputArray.push([i,i+1]);
        if(myArray[i]>myArray[i+1]){
            outputArray.push([i,i+1,true]);
            let temp=myArray[i+1];
            myArray[i+1]=myArray[i];
            myArray[i]=temp;
            sorted=false;
            outputArray.push(myArray.slice(0));
            outputArray.push([]);
        }
        }
        outputArray.push([true,myArray.length-1-round]);
        round++;
    }
    handleDispatch(outputArray,dispatch,myArray,speed);
}
   
function handleDispatch(outputArray,dispatch,array,speed){
        if(!outputArray.length){
            dispatch(setSorted(array.map((num,index)=>index)));
            dispatch(setBubble([]));
            dispatch(setSwappers([]));
            dispatch(setArray(array));
            dispatch(setRunning(false));
            return;
        }

        let currentElement=outputArray.shift();
        if(currentElement.length>3){
            dispatch(setArray(currentElement));
            
        }
        else if(currentElement.length===3||currentElement.length===0){
            dispatch(setSwappers(currentElement));
        }
        else if(currentElement.length===2&& typeof currentElement[0]==="boolean"){
           dispatch(setSorted(currentElement));
        }
        else{
            dispatch(setBubble(currentElement));
        }
        setTimeout(()=>{
            handleDispatch(outputArray,dispatch,array,speed)
        },speed);
    }

export default bubbleSort;
