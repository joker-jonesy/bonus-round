import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./CounterSlice";

export function Counter (){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    const [age, setAge]= React.useState(count)

    return(
        <div>
            <div>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <h1>{count}</h1>
            </div>
        </div>
    )
}