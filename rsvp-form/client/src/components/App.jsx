import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Form from './Form.jsx';
import List from './List.jsx';

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

  getAllAttendees() {
    axios.get('/rsvps')
      .then((res) => {
        const {firstName, lastName, email, guests} = res.data;
        this.setState({
          firstName: firstName
          lastName: lastName,
          email: email,
          guests: guests
        })
      })
      .catch((error) => {
        console.log('error in get request', error);
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    event.preventDefault();
    if (this.handleValidation()) {
      axios.post('/rsvps', this.state)
        .then(() => {
          console.log('post request is successful');
        })
        .catch((error) => {
          console.log('error in post request', error);
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
        <Form
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}>
        </Form>
    )
  }
}

export default App;
