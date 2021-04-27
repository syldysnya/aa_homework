import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: 0, num1: "", num2: "" };
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.click = this.click.bind(this);
        this.clear = this.clear.bind(this);
    }

    setNum1(e) {
        const num1 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num1 });
    }

    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num2 });
    }
    // debugger
    click(e) {
        e.preventDefault();
        // debugger
        let n1 = this.state.num1;
        let n2 = this.state.num2;

        if (e.target.innerHTML === "/") {
            let res = n1 / n2;
            this.setState({ result: res })
        } else if (e.target.innerHTML === "*") {
            let res = n1 * n2;
            this.setState({ result: res })
        } else if (e.target.innerHTML === "+") {
            let res = n1 + n2;
            this.setState({ result: res })
        } else if (e.target.innerHTML === "-") {
            let res = n1 - n2;
            this.setState({ result: res })
        }
    }

    clear(e) {
        e.preventDefault();
        this.setState({ result: 0, num1: "", num2: "" })
    }
    
    render() {
        return (
            <div>
                <input onChange={this.setNum1} value={this.state.num1} />
                <input onChange={this.setNum2} value={this.state.num2} />
                <button onClick={this.click}>/</button>
                <button onClick={this.click}>*</button>
                <button onClick={this.click}>+</button>
                <button onClick={this.click}>-</button>
                <button onClick={this.clear}>clear</button>
                <h1>{this.state.result}</h1>
            </div>
        );
    }
}

export default Calculator;