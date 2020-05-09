import { combineReducers } from "redux";
import { array } from "./array";
import { algorithm } from "./algorithm";
import { bubble } from "./bubbleSort";
import { swappers } from "./swappers";
import {sorted } from "./sorted";
import { running } from "./running";
import { pivot,quickTwo} from "./quickSort";
import { mergeTwo} from "./mergeSort";
import { heapThree} from "./heapSort";

export default combineReducers({
  array,
  algorithm,
  bubble,
  swappers,
  sorted,
  running,
  pivot,
  quickTwo,
  mergeTwo,
  heapThree
});
