import React from 'react';
import axios from 'axios';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      guests: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    const data = {
      first: this.state.first,
      last: this.state.last,
      email: this.state.email,
      guests: this.state.guests
    };
    if (this.handleValidateEmail(data.email)) {
      axios.post('/rsvps', data)
        .then(() => {
          console.log('post request is successful');
          this.setState({
            first: '',
            last: '',
            email: '',
            guests: ''
          })
        })
        .catch(() => {
          console.log('post request is unsuccessful');
        })
    }
}

  handleValidateEmail(email) {
    const chars = email.split('');
    if (characters.include('@') && chars.indexOf('@') > 0 && chars.indexOf('@') < chars.length - 1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
    <form>
        <label>First Name</label>
        <input type="text" id="first" name="first" onChange={(e) => {this.handleChange(e)}}></input>
        <label>Last Name</label>
        <input type="text" id="last" name="last" onChange={(e) => {this.handleChange(e)}}></input>
        <label>Email Address</label>
        <input type="email" id="email" name="email" onChange={(e) => {this.handleChange(e)}}></input>
        <label>Number of Guests</label>
        <input type="text" id="guests" name="guests" onChange={(e) => {this.handleChange(e)}}></input>
        <button type="button" onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
    </form>
    )
  }
}

export default App;
