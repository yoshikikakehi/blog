import React, { Component } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from '../stores/UserStore';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false,
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }

        this.setState({
            [property]: val
        });
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false,
        })
    }

    async doLogin() {
        
        if (!this.state.username) {
            return;
        }
        if(!this.state.password) {
            return;
        }
        
        this.setState({
            buttonDisabled: true
        })

        try{
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }

            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }

        catch(e) {
            console.log(e);
            this.resetForm();
        }

    }

    render() {
        return (
            <div className="loginForm">
                Login
                <InputField
                    type='text'
                    placeholder='Username'
                    value={this.state.username ? this.state.username : ''}
                    onChange={ (val) => this.setInputValue('username', val)  }
                />
                <InputField
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={ (val) => this.setInputValue('password', val)  }
                />

                <SubmitButton
                    text='Login'
                    disabled={this.state.buttonDisabled}
                    onClick={ () => this.doLogin() }
                    style={{
                        width: '100%',
                        minWidth: '280px',
                        color: '#565656',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        border: 'solid 2px #1189de',
                        borderRadius: '4px',
                        background: '#fff',
                        cursor: 'pointer',
                    }}
                />
            </div>
        )
    }
}

export default LoginForm
