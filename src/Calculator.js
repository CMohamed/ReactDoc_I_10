import React from 'react';
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, unit) {
        this.setState({
            temperature: e,
            scale: unit
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput temperature={celsius} scale={'c'} onChange={(e) => this.handleChange(e, 'c')} />
                <TemperatureInput temperature={fahrenheit} scale={'f'}  onChange={(e) => this.handleChange(e, 'f')} />
            </div>
        )
    }
}

export default Calculator;