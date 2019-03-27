import React from 'react';
import AuthService from '../components/AuthService';
import axios from 'axios';

export default class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post(`/api/v1/auth/login/`, {
            username:this.state.username,
            password:this.state.password
        }).then(res => localStorage.setItem('cool-jwt', res.data))
        }

    render() {
        return (
            <div>
                SignIn Below
                <form>
                    <input
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.change(e)}
                    />                   
                </form>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </div>
        )
    }
}