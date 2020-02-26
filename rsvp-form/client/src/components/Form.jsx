import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      guests: 0
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      this.props.handleSubmit(this.state);
    } else {
      alert('Enter a valid email!');
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
      <form onSubmit={this.onSubmit}>
        <label>First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={this.onChange}></input>
        <label>Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={this.onChange}></input>
        <label>Email Address</label>
        <input type="email" id="email" name="email" onChange={this.onChange}></input>
        <label>Number of Guests</label>
        <input type="number" id="guests" name="guests" onChange={this.onChange}></input>
        <input type="submit" id="submit" value="Submit"></input>
      </form>
    )
  }
}

export default Form;