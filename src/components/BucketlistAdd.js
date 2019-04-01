import React from 'react';
import axios from 'axios';


class BucketlistAdd extends React.Component {
    state = {
        title: [],
        description: [],
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const jwt = localStorage.getItem('cool-jwt')
        const token = { headers: {'token': jwt} }; 
        // axios.post(`/api/v1/bucketlists/`,{
        //     token,
        //     title:this.state.title,
        //     description:this.state.description
        // }).then(res => {
        //     console.log (res.data)
        //     }       
        // )}
        axios({
            method: 'post',
            url: '/api/v1/bucketlists/',
            headers: jwt,
            data: {
              title: this.state.title,
              description: this.state.description,
            }}).then(res => {
                console.log (res.data)
            }
            )}

    render() {
        return (
            <div>
                <form>
                    <input
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={e => this.change(e)}
                    />                   
                </form>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </div>
        )
    }
}
export default BucketlistAdd;