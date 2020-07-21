import { useState } from 'react'

export const useCounter = (initialcounter = 1) => {

    const [counter, setCounter] = useState(initialcounter);

    const increment = () =>{
        setCounter(counter+1);
    }

    const decrement = (factor = 1) =>{
        setCounter(counter-factor);
    }

    const reset = () =>{
        setCounter(initialcounter);
    }


    return{
        counter,
        increment,
        decrement,
        reset
    }

}
