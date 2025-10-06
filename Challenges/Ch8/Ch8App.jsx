import React from "react";
export default function App() {
    const [count, setCount] = React.useState(0);
    function plus()
    {
        setCount(prevCount => prevCount + 1)
    }
    function minus()
    {
        setCount(prevCount => prevCount - 1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={minus} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={plus} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
