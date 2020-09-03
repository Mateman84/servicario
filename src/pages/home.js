import React from 'react'
import './home.css'

//Functional component = are smaller components presentational components since you don't have to write alot of code.
// In most cases they are reusable their focus should be on one thing.

    /*
    const Home = () => {
        return (
            <div className="container">
            <h1>I am Home page</h1>
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


    constructor(){
        super()
        this.state = {
            message: 'Super Message!!!!'
        }
    }
    


    //Lifecycle function, componentDidMount, is a lifecycle function that is called only once
    componentDidMount(){
        //debugger
        setTimeout(() => {
            // använd set state när du vill ändra på ett state. 
            this.setState({message: 'I am new message'})
        }, 1000)
    }

    /*
    Lifecycle function render
    is a lifecycle function that is called whenever a state is changed. 
    */
    render (){
        //debugger
        const { message } = this.state
        return (
            <div className="container">
            <h1>I am Home class page</h1>
            <p>{ message }</p>
            </div>
        )
    }
}


export default Home

