import React from 'react';
import axios from 'axios';

export default class RegisterForm extends React.Component {
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
        axios({
            method: 'post',
            url: '/api/v1/auth/register/',
            data: { 
                username: this.state.username,
                password: this.state.password
            }
        }).then(result => {
            // If successful, we do stuffs with 'result'
            console.log (result.data)
          })
          .catch(error => {
            // If unsuccessful, we notify users what went wrong
            console.log('ERROR: ', error)
          })
      }
    render() {
        return (
            <div>
                SignUp Below
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