import { useState } from "react";

function useCounter(initialValue = 0){
    const [count, setcount] = useState(initialValue)

    const increament = ()=> setcount(prevCount => prevCount +1)
    const decreament = ()=> setcount(prevCount => prevCount -1)
    const reset = () => setcount(initialValue)

    return {count, increament, decreament, reset}
}

export default useCounter