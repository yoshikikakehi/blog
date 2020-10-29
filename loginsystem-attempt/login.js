import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import UserStore from '../stores/UserStore';
import LoginForm from '../component/LoginForm';

class login extends Component {
    async componentDidMount() {
        try {
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();
            if(result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            } else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }

        catch(e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }

    }

    async doLogout() {
        try {
            let res = await fetch('/loggout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();
            if(result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
        }

        catch(e) {
            console.log(e);
        }

    }
    
    render() {
        if (UserStore.loading) {
            return (
                <div className="loginPage">
                    <div className="container">
                        Loading, please wait...
                    </div>
                </div>
            );
        } else {
            if (UserStore.isLoggedIn) {
                return (
                    <div className="loginPage">
                        <div className="container">
                            window.location.href="/home";
                        </div>
                    </div>
                )
            }
            
            return (
                <div className="loginPage">
                    <div className="container">
                        <LoginForm />
                    </div>
                </div>
            )
        }
    }
}

export default Observer(login);
