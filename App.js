import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            randomNum: Math.floor(Math.random() * 1001)
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.reset = this.reset.bind(this)
    }
    
    reset() {
        this.setState(prevState => {
            return {
                count: 0,
                randomNum: Math.floor(Math.random() * 1001)
            }
        })
    }
    handleClick1() {
        this.setState(prevState => {
            return {
                count: prevState.count + 100,
            }
        })
        if (this.state.count + 100 < this.state.randomNum) {
            console.log("Too low!")
        } else if (this.state.count + 100 > this.state.randomNum) {
            console.log("Too high!")
        } else {
            console.log("Correct!")
        }
    }
    handleClick2() {
        this.setState(prevState => {
            return {
                count: prevState.count + 10
            }
        })
        if (this.state.count + 10 < this.state.randomNum) {
            console.log("Too low!")
        } else if (this.state.count + 10 > this.state.randomNum) {
            console.log("Too high!")
        } else {
            console.log("Correct!")
        }
    }
    handleClick3() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
        if (this.state.count + 1 < this.state.randomNum) {
            console.log("Too low!")
        } else if (this.state.count + 1 > this.state.randomNum) {
            console.log("Too high!")
        } else {
            console.log("Correct!")
        }
    }
    handleClick4() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
        if (this.state.count - 1 < this.state.randomNum) {
            console.log("Too low!")
        } else if (this.state.count - 1 > this.state.randomNum) {
            console.log("Too high!")
        } else {
            console.log("Correct!")
        }
    }
    handleClick5() {
        this.setState(prevState => {
            return {
                count: prevState.count - 10
            }
        })
        if (this.state.count - 10 < this.state.randomNum) {
            console.log("Too low!")
        } else if (this.state.count - 10 > this.state.randomNum) {
            console.log("Too high!")
        } else {
            console.log("Correct!")
        }
    }
    handleClick6() {
        this.setState(prevState => {
            return {
                count: prevState.count - 100
            }
        })
        if (this.state.count - 100 < this.state.randomNum) {
            console.log("Too low!")
        } else if (this.state.count - 100 > this.state.randomNum) {
            console.log("Too high!")
        } else {
            console.log("Correct!")
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick1}>+100</button>
                <button onClick={this.handleClick2}>+10</button>
                <button onClick={this.handleClick3}>+1</button>
                <button onClick={this.handleClick4}>-1</button>
                <button onClick={this.handleClick5}>-10</button>
                <button onClick={this.handleClick6}>-100</button>
                <button onClick={this.reset}>Reset</button>  
            </div>
        )
    }
}

export default App
