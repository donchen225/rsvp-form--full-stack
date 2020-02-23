import React from 'react';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   first = '',
    //   last = '',
    //   email = '',
    //   guests = ''
    // }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleChange.bind(this);
  }

  render() {
    return (
    <form>
        <label>First Name</label>
        <input type="text" id="first" name="first"></input>
        <label>Last Name</label>
        <input type="text" id="last" name="last"></input>
        <label>Email Address</label>
        <input type="email" id="email" name="email"></input>
        <label>Number of Guests</label>
        <input type="text" id="guests" name="guests"></input>
        <button type="button" onClick={(e) => this.handleSubmit(e)}>Submit</button>
    </form>
    )
  }
}

export default App;
