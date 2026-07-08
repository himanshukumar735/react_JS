import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(10);

    function increaseValue() {
        if (counter < 20) {

            setCounter(prev => prev + 1)        // prev => prev + 1 is an annonymous arrow function

            setCounter(prev => {
                if (prev >= 20) {
                    return prev;
                } else {
                    return prev + 1;
                }
            }
            )

            setCounter(prev => {
                if (prev >= 20) {
                    return prev;
                } else {
                    return prev + 1;
                }
            })

        }
    }

    function decreaseValue() {

        setCounter(prev => {

            if (prev <= 0) {
                return prev;
            } else {
                return prev - 1;
            }

        })

        setCounter(prev => {

            if (prev <= 0) {
                return prev;
            } else {
                return prev - 1;
            }

        })

        setCounter(prev => {

            if (prev <= 0) {
                return prev;
            } else {
                return prev - 1;
            }

        })

    }

    return (
        <>

            <h1>Leap Counter project</h1>

            <h2>Counter value: {counter}</h2>

            <button onClick={increaseValue}>
                Increase value {counter}</button>
            <br />
            <button onClick={decreaseValue}>
                Decrease value {counter}</button>

            <p>Footer: {counter}</p>

        </>
    )

}

export default App;