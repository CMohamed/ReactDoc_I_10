import React from 'react';
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        console.log(e);
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in C° :</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict
                    celsuis={parseFloat(temperature)}
                />
            </fieldset>
        )
    }
}

export default Calculator;