import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <h1 className="headerClass">Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <style jsx>{`
    .headerClass {
      color: blue;
    }
    `}</style>
    </div>

  );
}

export default Header;