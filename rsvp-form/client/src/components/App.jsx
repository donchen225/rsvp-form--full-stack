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
      currAttendee: {
        firstName: '',
        lastName: '',
        email: '',
        guests: 0
      },
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
      currAttendee[e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      axios.post('/rsvps', this.state.currAttendee)
        .then((status) => {
          this.setState({
            statusCode: status
          })
          this.getAllAttendees();
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
        {/*{this.state.statusCode === 400 ? <InsertConfirmation attendee={currAttendee}/> : <UpdateConfirmation attendee={currAttendee}/>}*/}
      </div>
    )
  }
}

export default App;
