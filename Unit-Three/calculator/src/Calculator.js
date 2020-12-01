import React, { Component } from 'react'
import './Calc.css'

class Calculator extends Component {

    state ={
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',
        num7: '',
        num8: '',
        addTotal:'',
        subTotal:'',
        divTotal:'',
        multTotal:''

    }


    handlenum1= (event)=>{
        this.setState({
            num1: event.target.value
        })
    }
    
    handlenum2= (event)=>{
        this.setState({
            num2: event.target.value
        })
    }
    

    handlenum3= (event)=>{
        this.setState({
            num3: event.target.value
        })
    }

    handlenum4= (event)=>{
        this.setState({
            num4: event.target.value
        })
    }

    handlenum5= (event)=>{
        this.setState({
            num5: event.target.value
        })
    }

    handlenum6= (event)=>{
        this.setState({
            num6: event.target.value
        })
    }

    handlenum7= (event)=>{
        this.setState({
            num7: event.target.value
        })
    }

    handlenum8= (event)=>{
        this.setState({
            num8: event.target.value
        })
    }

    addition = (event)=>{
        event.preventDefault()
        this.setState({
            addTotal: parseInt(this.state.num1) + parseInt(this.state.num2)
           
        })
    }

    subtraction = (event)=>{
        event.preventDefault()
        this.setState({
            subTotal: parseInt(this.state.num3) - parseInt(this.state.num4)
           
        })
    }

   division = (event)=>{
        event.preventDefault()
        this.setState({
            divTotal: parseInt(this.state.num5) / parseInt(this.state.num6)
           
        })
    }
    
    multiplication = (event)=>{
        event.preventDefault()
        this.setState({
            multTotal: parseInt(this.state.num7) * parseInt(this.state.num8)
           
        })
    }

    render (){
        return(

        <div className="container">
            
​
            <div className="add">
                <h1>Add with React!</h1>
                <input type="text" value={this.state.num1} onChange={this.handlenum1}/>
                <span>+</span>
                <input type="text" value={this.state.num2} onChange={this.handlenum2}/>
                <button onClick={this.addition}>=</button>
                <h3>{this.state.addTotal}</h3>
            </div>

            
​
            <div className="subtract">
                <h1>Subtract with React!</h1>
                <input type="text" value={this.state.num3} onChange={this.handlenum3}/>
                <span>-</span>
                <input type="text" value={this.state.num4} onChange={this.handlenum4}/>
                <button onClick={this.subtraction}>=</button>
                <h3>{this.state.subTotal}</h3>
            </div>

            
​
            <div className="divide">
                <h1>Divide with React!</h1>
                <input type="text" value={this.state.num5} onChange={this.handlenum5}/>
                <span>/</span>
                <input type="text" value={this.state.num6} onChange={this.handlenum6}/>
                <button onClick={this.division}>=</button>
                <h3>{this.state.divTotal}</h3>
            </div>

           
            <div className="multiply">
                <h1>Multiply with React!</h1>
                <input type="text" value={this.state.num7} onChange={this.handlenum7}/>
                <span>*</span>
                <input type="text" value={this.state.num8} onChange={this.handlenum8}/>
                <button onClick={this.multiplication}>=</button>
                <h3>{this.state.multTotal}</h3>
            </div>
        </div>

        )
    }
}

export default Calculator