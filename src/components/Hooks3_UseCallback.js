import React, {useState, useCallback} from "react";

const functionsCounter = new Set();

const Hooks3_UseCallback = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);

    // Dzieki useCallback ustawiasz, dla zmian ktorej zmiennej, ma byc generowana
    // funkcja
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count])

    const decrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const incrementAnotherCount = useCallback(() => {
        setAnotherCount(anotherCount + 1);
    }, [anotherCount]);

    const decrementAnotherCount = useCallback(() => {
        setAnotherCount(anotherCount - 1);
    },[anotherCount]);

    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementAnotherCount);
    functionsCounter.add(decrementAnotherCount);
    console.log('z use callback',functionsCounter)

    return (
        <div>
            Count: {count}
            <hr/>

            <button onClick={increment}>Increment counter</button>
            <hr/>

            <button onClick={increment}>Decrement counter</button>
            <hr/>

            <button onClick={incrementAnotherCount}>Increment another counter</button>
            <hr/>

            <button onClick={decrementAnotherCount}>Decrement another counter</button>
            <hr/>
        </div>
    )
}

export default Hooks3_UseCallback;

// Kolejny hook to useMemo
// Nagralem o nim film na YT.
