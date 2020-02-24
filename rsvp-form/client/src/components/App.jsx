import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      guests: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    event.preventDefault();
    // console.log('handleSubmit is called');
    if (this.handleValidation()) {
      // console.log('email is valid');
      axios.post('/rsvps', this.state)
        .then(() => {
          console.log('post request is successful');
        })
        .catch(() => {
          console.log('post request is unsuccessful');
        })
    } else {
      alert('enter a valid email!');
    }
}

  handleValidation() {
    const {firstName, lastName, email, guests} = this.state;
    if (!firstName || !lastName || !email || !guests) {
      return false;
    }
    const chars = email.split('');
    if (chars.includes('@') && chars.indexOf('@') > 0 && chars.indexOf('@') < chars.length - 1) {
      return true;
    }
    return false;
  }

  render() {
    return (
    <form>
        <label>First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={this.handleChange}></input>
        <label>Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={this.handleChange}></input>
        <label>Email Address</label>
        <input type="email" id="email" name="email" onChange={this.handleChange}></input>
        <label>Number of Guests</label>
        <input type="number" id="guests" name="guests" onChange={this.handleChange}></input>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
    </form>
    )
  }
}

export default App;
