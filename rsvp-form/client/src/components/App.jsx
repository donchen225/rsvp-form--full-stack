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
      <Form handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}>
      </Form>
    )
  }
}

export default App;
