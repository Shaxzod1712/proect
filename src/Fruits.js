import React from 'react'
import './Fruits.css'

class Fruits extends React.Component{
    constructor(){
        super()
            this.state={
                count: 0
            }
    }
    
    decraement =()=>{
        if(this.state.count>0){
        this.setState({
            count: this.state.count -1
        
        })
    }
    }
    incraement=()=>{
        this.setState({
            
            count: this.state.count +1
        })
    }
    render(){
        return(
            <div className='container'>
                <div className='container1'>
                <h1 onClick={this.decraement} className='decraement'>-</h1>
                <h1 className='count'>{this.state.count}</h1>
                <h1 onClick={this.incraement} className='incraement'>+</h1>
                </div>
            </div>
        )
    }
}


export default Fruits