import React,{Component} from "react";
import {connect} from "react-redux";
import "./body.css";
 class Body extends Component {
    render(){
        const{array,swappers,sorted,bubble,quickTwo,pivot,mergeTwo,heapThree}=this.props;
        const len=array.length;
        const numwidth=Math.floor(document.body.clientWidth)/(len*2.5);
        const margin=Math.min(5,numwidth/2);
        
    
    return(
        <div id="bodyContainer">
        { 
            array.length?array.map((number,index)=>{
            
            const backgroundColor=swappers.includes(index)?"rgb(244,67,54,0.8)":
                                         bubble.includes(index)||quickTwo.includes(index)||mergeTwo.includes(index)||heapThree.includes(index)?"rgb(0,200,83,0.8)":
                                            pivot===index? "rgb(255,238,88,0.9)":  
                                              sorted.includes(index)?"rgb(149,117,205,0.9)":"rgb(119, 166, 247,0.9)";

            return(<div className='array_block'key={index} style={{height:`${number*2.5}px`,marginRight:`${margin}px`,backgroundColor:backgroundColor,width:`${numwidth}px`}}></div>)
            }
            )
            :null}
        </div>    
         )
    }

}
const mapStateToProps=state=>{
    let {array,algorithm,running,swappers,sorted,bubble,quickTwo,pivot,mergeTwo,heapThree}=state;
    return  {array,algorithm,running,swappers,sorted,bubble,quickTwo,pivot,mergeTwo,heapThree};
}
export default connect(mapStateToProps)(Body);