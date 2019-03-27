import React from 'react';
import AuthService from '../components/AuthService';

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
        console.log(this.state);
        this.setState({
            username: '',
            password: '',
        })
    };

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