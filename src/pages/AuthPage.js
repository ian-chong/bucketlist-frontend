import React from 'react';
import axios from 'axios';
import BucketlistAdd from '../components/BucketlistAdd';

class AuthPage extends React.Component {


    state = {
        words: []
    }

    componentDidMount() {
        // performing a GET request to '/api-end-point'
        const jwt = localStorage.getItem('cool-jwt')
        const token = { headers: {'token': jwt} }; 
        axios.get(`/api/v1/bucketlists/`, token)
        .then(result => {
          // If successful, we do stuffs with 'result'
          this.setState({
            test: result.data,
            words: result.data.message
          })
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
                Your current bucketlist: <br />
                {this.state.words}


                <hr />

                Create your Bucketlist Below:
                <BucketlistAdd />
                <hr />
                Would you like to add an item to your Bucketlist

            </div>
        )
    }
}
export default AuthPage;