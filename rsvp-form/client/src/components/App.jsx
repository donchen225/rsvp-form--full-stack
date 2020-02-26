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
      currAttendee: null,
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
      .catch((err) => {
        console.log('error in get request', err);
      })
  }

  handleSubmit(attendee) {
    axios.post('/rsvps', attendee)
      .then((res) => {
        this.setState({
          currAttendee: attendee,
          statusCode: res.status
        })
        this.getAllAttendees();
      })
      .catch((error) => {
        console.log('error in post request', error);
      })
  }

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit.bind(this)}>
        </Form>
        <List
          attendeesList={this.state.attendeesList}>
        </List>
        <div id='confirmation'>
          {this.state.statusCode === 201 ?
          <InsertConfirmation rsvp={this.state.currAttendee}/> : (this.state.statusCode === 200 ?
          <UpdateConfirmation rsvp={this.state.currAttendee}/> : '') }
        </div>
      </div>
    )
  }
}

export default App;
