import {createStore} from 'redux';
import rootreducer from "./reducer/index";

const mystore = createStore(
    rootreducer
)
export default mystore