import React,{Component} from 'react';
import "./toolbar.css";
import { connect } from 'react-redux';
import {setArray} from "../../reducers/array";
import {setSorted} from "../../reducers/sorted/";
import {setAlgorithm} from "../../reducers/algorithm";
import bubbleSort from "../../algorithm/bubbleSort";
import quickSort from "../../algorithm/quickSort";
import mergeSort from "../../algorithm/mergeSort";
import heapSort from "../../algorithm/heapSort";
import {setRunning} from "../../reducers/running/";


class ToolBar extends Component {
    constructor(props){
        super(props);
        this.rangeRef=React.createRef();
    }
    handleClick=(length)=>{
       this.props.generateArray(length);
    }
    handleChange=(event)=>{
        
        this.props.generateArray(Math.floor((parseInt(event.target.value)+3)*1.85));
        
    }
    handleAlgorithm=(al)=>{
        this.props.updateAlgorithm(al);
        
    }
    componentDidMount(){
        this.props.generateArray(76);
       this.rangeRef.current.value=50;
    }
    
render(){
    const{array,algorithm,running}=this.props;
    let speed=600-Math.pow(array.length,2);
    if(speed<0)speed=0;
    return(
        <div id="toolbar">
        <div id='generateArray' onClick={!running?()=>{this.props.generateArray(array.length);console.log(running)}:null}>
        Generate Array
        </div>
        <div id="slider_font">
            Change Array Size and Sort speed
        </div>
        <input ref={this.rangeRef} disabled={running} id="slider" type="range" name="slider" min="0" max="100" onChange={(event)=>this.handleChange(event)}/>
        <div className={(algorithm==="Bubble Sort")?"selected_sort":"Sort_types"} onClick={()=>{this.handleAlgorithm("Bubble Sort")}}>
            Bubble Sort
        </div>
        <div className={(algorithm==="Quick Sort")?"selected_sort":"Sort_types"} onClick={()=>{this.handleAlgorithm("Quick Sort")}}>
            Quick Sort
        </div>
        <div className={(algorithm==="Heap Sort")?"selected_sort":"Sort_types"} onClick={()=>{this.handleAlgorithm("Heap Sort")}}>
            Heap Sort
        </div>
        <div className={(algorithm==="Merge Sort")?"selected_sort":"Sort_types"} onClick={()=>{this.handleAlgorithm("Merge Sort")}}>
            Merge Sort
        </div>
        <div>
        {algorithm?<div className="Sort" onClick={()=>{this.props.sort(array,speed,algorithm)}}>
           Sort
        </div>:null
        }
        </div>
        </div>

    );
}

}
const mapStateToProps=state=>{
    const {array,algorithm,running}=state;
    return  {array,algorithm,running};
}
const mapDispatchToProps=dispatch=>({
    generateArray:(length)=>{
        let arr=[];
        for(let i=0;i<length;i++){
            arr.push(Math.floor((Math.random()*230)+10));
        }
        dispatch(setArray(arr));
        dispatch(setSorted([]));
    },
    updateAlgorithm: (al)=>{dispatch(setAlgorithm(al))
    console.log("yesrunning")},

    sort:(array,speed,algorithm)=>{
        dispatch(setSorted([]));
        dispatch(setRunning(true));
        switch(algorithm){
        case "Bubble Sort":bubbleSort(array,dispatch,speed);
                            break;
        case "Quick Sort":quickSort(array,dispatch,speed);
                            break;
        case "Merge Sort":mergeSort(array,dispatch,speed);
                            break;
        case "Heap Sort":heapSort(array,dispatch,speed);
                            break;
        default         :       ;
        }
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(ToolBar);