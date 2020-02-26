import React from 'react';
import Attendee from './Attendee.jsx';

const List = ({attendeesList}) => (
  <div id='List'>
    {attendeesList.map((attendee, i) => <Attendee attendee={attendee} key={i}/>)}
  </div>
)

export default List;