import React from "react";
import './onstate.css'





class Dars extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            count: 0
        }

    }
    render(){
        const decremaent = ()=>{
            if(this.state.count> 0){

                this.setState({
                    count: this.state.count -1
                })
            }
        }
        const incremaent = ()=>{
            this.setState({
                count: this.state.count +1
            })
        }
        return(
            <div className="container">
                <h1 onClick={decremaent} className='decrement'>-</h1>
                <h1 className="count">{this.state.count}</h1>
                <h1 onClick={incremaent} className='increment'>+</h1>
            </div>
        )
    }
}

export default Dars