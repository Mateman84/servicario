import React, {useState} from "react"


// When you only use one prop you don't have to wrap it in () as I have done in the "Functional Counter"
const FunctionalCounter = (props) => {
    //A third way you can do it is if you place it in curly brackets instead of props {title}
        
    const [count, setCount] = useState(0)
    const { title, onChange } = props
    //You can store the "title" as a const prop which will result in you only having to call the title down in the <h1>.

    const increment = () => {
        const newCount = count + 1
        setCount(newCount)
        onChange('increment', newCount)
    }

    const decrement = () => {
        const newCount = count - 1
        setCount(newCount)
        onChange('decrement', newCount)
    }

    return (
        <div>
            <h1>{ title }</h1>
            <button onClick={increment}>Increment</button>
                <div className="counter">{count}</div>
            <button onClick={decrement}>Decrement</button>
        </div>
    )    
}

export default FunctionalCounter