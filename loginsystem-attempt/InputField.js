import React, { Component } from 'react'
import Input from '@material-ui/core/Input';

class InputField extends Component {
    render() {
        return (
            <div className="inputField">
                
                <Input
                    type={this.props.type}
                    placeholder={this.props.type}
                    value={this.props.value}
                    onChange={ (e) => this.props.onChange(e.target.value) }
                />

            </div>
        )
    }
}

export default InputField
