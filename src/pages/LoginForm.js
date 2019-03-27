import React from 'react';

export default class LoginForm extends React.Component {
    state = {
        username: '',
        email: '',
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
            email: '',
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
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
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