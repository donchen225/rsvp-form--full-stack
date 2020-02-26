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
      attendeesList: null,
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
      .catch((error) => {
        console.log('error in get request', error);
      })
  }

  handleSubmit(attendee) {
    axios.post('/rsvps', attendee)
      .then((status) => {
        this.setState({
          currAttendee: attendee,
          statusCode: status
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
        {this.state.statusCode === 201 ?
          <InsertConfirmation attendee={currAttendee}/> : <UpdateConfirmation attendee={currAttendee}/>}
      </div>
    )
  }
}

export default App;
