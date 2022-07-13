import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./CounterSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



export function Counter (){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <div>

                <FontAwesomeIcon icon={"plus"} onClick={()=>dispatch(increment())} />
                <FontAwesomeIcon icon={"minus"} onClick={()=>dispatch(decrement())}/>

                {/*<button onClick={()=>dispatch(increment())}>Increment</button>*/}
                {/*<button onClick={()=>dispatch(decrement())}>Decrement</button>*/}
            </div>
            <div style={{color:"red", fontSize:"24px"}}>
                <h1>{count}</h1>
            </div>
        </div>
    )
}