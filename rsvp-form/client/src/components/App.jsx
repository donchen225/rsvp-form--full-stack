import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Form from './Form.jsx';
import List from './List.jsx';
import InsertConfirmation from './InsertConfirmation.jsx';
import UpdateConfirmation from './UpdateConfirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeesList: [],
      firstName: '',
      lastName: '',
      email: '',
      guests: 0,
      statusCode: null
    }
  }

  componentDidMount() {
    this.getAllAttendees();
  }

  getAllAttendees() {
    axios.get('/rsvps')
      .then((res) => {
        this.setState({
          attendeesList: res.data
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
    e.preventDefault();
    if (this.handleValidation()) {
      axios.post('/rsvps', this.state)
        .then((res) => {
          this.getAllAttendees();
          // how to conditionally render based on the res object's status. if status is 400 render InsertConfirmation. Else, render UpdateConfirmation. Problem here is status 400 comes out as an Error rather than number
          this.setState({
            statusCode: res.status
          })
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
      <div>
        <Form
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}>
        </Form>
        <List
          attendeesList={this.state.attendeesList}>
        </List>
        {/*{this.state.statusCode === 400 ? <InsertConfirmation/> : <UpdateConfirmation/>}*/}
      </div>
    )
  }
}

export default App;
