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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('handleSubmit is called');
    if (this.handleValidateEmail(data.email)) {
      console.log('email is valid');
      axios.patch('/rsvps', data)
        .then(() => {
          console.log('patch request is successful');
        })
        .catch(() => {
          console.log('patch request is unsuccessful');
        })
    } else {
      alert('enter a valid email!');
    }
}

  handleValidateEmail(email) {
    const chars = email.split('');
    if (chars.includes('@') && chars.indexOf('@') > 0 && chars.indexOf('@') < chars.length - 1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
    <form>
        <label>First Name</label>
        <input type="text" id="first" name="first" onChange={this.handleChange}></input>
        <label>Last Name</label>
        <input type="text" id="last" name="last" onChange={this.handleChange}></input>
        <label>Email Address</label>
        <input type="email" id="email" name="email" onChange={this.handleChange}></input>
        <label>Number of Guests</label>
        <input type="text" id="guests" name="guests" onChange={this.handleChange}></input>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
    </form>
    )
  }
}

export default App;
