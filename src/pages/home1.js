
import React, {useState, useEffect} from 'react'
//import Counter from'components/Counter.js'
import Counter from 'components/FunctionalCounter'
import 'pages/home.css'


//Functional component = are smaller components presentational components since you don't have to write alot of code.
// In most cases they are reusable their focus should be on one thing.

    
/*
    const Home = () => {
        
        
        const [message, setMessage] = useState("Super Message via Functional component")
        const [count, setCount] = useState(0)
        //const [test, setTest] = useState(0)
        //Use state function returns an array the first element in this array is your state value, or in my case, "message"
        // The second value is a function that is used for mutating the the state, in my case, "setMessage". These are only
        //names and it is recommended you choose descriptive names. Another way but more convuluted way of writing can be done as follows: 
        
        //const messageState = useState("Super Message via Functional component 2")
        //const message = messageState[0]
        //const setMessage = messageState[1]

        //"useEffect" is called after the component is initialized and when the component is updated

        useEffect(() => {
            alert("Hello world")
            setTimeout(() => {
                setMessage("setMessage with useEffect after a millisecond")
            }, 1000)
        }, [])

        const increment = () => {
            setCount(count + 1)
            //setTest(test + 1)
        }

        const decrement = () => {
             setCount(count - 1)
        }

        return (
            <div className="container">
            <h1>I am Home page</h1>
            <p>{message}</p>
            <button onClick={increment}>Increment</button>
            <div className="counter">{count}</div>
            <button onClick={decrement}>Decrement</button>
            </div>
            
    //Om man lägger två element bredvid varandra:

    // <h1>I am Home page</h1>
    // <h2>asdasdasds</h2> 

    //så gillar React inte detta. Det man måste gör då är att "wrappa" elementen 
    // antingen i en div eller ett React.Fragment. React.Fragment kan man antingen skriva ut såhär:

    // <React.Fragment>

    // eller: 

    // <>
        )
    }
    */

//Class Component = Are larger components container components that contain other components, easier to handle alot of states.
// More boilerplate, and access to lifecycle functions 

class Home extends React.Component {

    state = {
        message: 'Super Message!!!!',
        testNumber: 99
    }

   /* 
   constructor(props){
        super(props)
        this.state = {
            message: 'Super Message!!!!',
            count: 0
        }

        this.decrement = this.decrement.bind(this)
     }*/

    //Lifecycle function, componentDidMount, is a lifecycle function that is called only once
    componentDidMount(){
        //debugger
        setTimeout(() => {
            // använd set state när du vill ändra på ett state. 
            this.setState({message: 'I am new message'})
        }, 1000)
    }

    displayMessage = (type, count) => {
        if(type === "increment"){
            //alert(`Your number was incremented! Current value: ${ count }`)
            return
        }
        //alert(`Your number was decremented! Current value: ${ count }`)
    }

    
    /*increment = () => {
        const { count } = this.state
        this.setState({count: count + 1})
    }
    // Difference between "increment" and "decrement functions is where it is an arrow function. "decrements" arrow function is
    // called in the onClick event down in the renderer. A few ways to call it is illustrated aswell on the "onClick functions"
    decrement() {
        const { count } = this.state
        this.setState({count: count - 1})
    }*/

    //Lifecycle function render
    //is a lifecycle function that is called whenever a state is changed. 

    render (){
        //debugger
        const { message, testNumber/*, count*/ } = this.state
        return (
            <div className="container">
                <h1>I am Home page</h1>
                <p>{message}</p>
                <button onClick={() => this.setState({testNumber: testNumber + 1})}>TestingIncrement</button>
                <Counter
                testNumber = {testNumber} 
                onChange = {this.displayMessage}
                title="I'm the counter"/>
                {/*<button onClick={this.increment}>Increment</button>
                <div className="counter">{count}</div>
                 <button onClick={() => this.decrement()}>Decrement</button> 
                <button onClick={this.decrement.bind(this)}>Decrement</button>
                <button onClick={this.decrement}>Decrement</button>*/ }
            </div>
        )
    }
}  

export default Home 