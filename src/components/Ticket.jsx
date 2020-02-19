import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return (
    <div>

      <h3 className="red-text">{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p className="green-text"><em>{props.issue}</em></p>
      <hr/>
      <style jsx>{`
      .red-text {
        color: red;
      }
      .green-text {
        color: green;
      }
      `}</style>
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};


export default Ticket;
