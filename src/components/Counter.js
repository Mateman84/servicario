import React from "react"

class Counter extends React.Component {

    state = {
        count: 0
    }

    //This function is executed everytime your state or props are changed
    componentDidUpdate(prevProps, prevState){
        /*debugger
        console.log(prevProps)
        console.log(prevState)*/
    }

    increment = () => {
        const { count } = this.state
        const { onChange } = this.props
        this.setState({count: count + 1})
        onChange('increment', count + 1)
    }
    decrement = () => {
        const { count } = this.state
        const { onChange } = this.props
        this.setState({count: count - 1})
        onChange('decrement', count - 1)
    }

    render(){
        const { count } = this.state
        const { title } = this.props
        return(
            <div>
                <h1>{ title }</h1>
                <button onClick={this.increment}>Increment</button>
                 <div className="counter">{count}</div>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter