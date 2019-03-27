import React from 'react';
import axios from 'axios';

    class HomePage extends React.Component {

        state = {
            words: []
        }

        componentDidMount() {
            // performing a GET request to '/api-end-point'
            axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(result => {
              // If successful, we do stuffs with 'result'
              this.setState({
                test: result.data,
                words: result.data.value
              })
              console.log (result.data)
            })
            .catch(error => {
              // If unsuccessful, we notify users what went wrong
              console.log('ERROR: ', error)
            })
        }
        render(){
        return (
            <div className='App'>
              <h1>Welcome to Bucket List</h1>
              <p> Please enjoy the quote of the day by ChuckNorris:</p>
              <p>{this.state.words}</p>
            </div>
        )
        }
    }

export default HomePage;