import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  // constructor() {
  //   super()
  // }
  // componentWillMount() {
  //   this.getDataAxios()
  // }

  getData() {
    var xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
      console.log(xhr.responseText)
    })
    xhr.open('GET', 'http://localhost:3100/users/deleteAll')
    xhr.send()
  }

  // async getDataAxios() {
  //   const response =
  //     await axios.get("http://localhost:3100/users",
  //       { headers: { 'Content-Type': 'application/json' } }
  //     )
  //   console.log(response.data)
  // }

  // async deleteDataAxios() {
  //   const response =
  //     await axios.get("http://localhost:3100/users/delete?id=4",
  //       { headers: { 'Content-Type': 'application/json' } }
  //     )
  //   console.log(response.data)
  // }

  // handleClick() {
  //   axios.get('http://localhost:3100/users/deleteAll')
  //     .then(response => this.setState({ username: response.data.name }))
  // }

  render() {
    return (
      <div>
        <br></br>
        <center>
          <div class="alert alert-warning" role="alert">
            Delete All Data
          </div>

          <button className='btn btn-primary' onClick={this.getData()}>
            Click Me
          </button>


        </center>
      </div>
    )
  }
}
export default App;
