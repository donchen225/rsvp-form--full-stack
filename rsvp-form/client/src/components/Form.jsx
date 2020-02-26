import React from 'react';

const Form = ({handleChange, handleSubmit}) => (
  <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={handleChange}></input>
        <label>Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={handleChange}></input>
        <label>Email Address</label>
        <input type="email" id="email" name="email" onChange={handleChange}></input>
        <label>Number of Guests</label>
        <input type="number" id="guests" name="guests" onChange={handleChange}></input>
        <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
)

export default Form;