import React from 'react';
import {Link} from 'react-router-dom';

const MyLink = ({children, to, className}) => {
  return (
    <Link 
      style={{float:"right", clear:"right", whiteSpace:"normal"}} 
      className={className + " btn btn-primary m-1"} to={to}>
      {children}
    </Link>
  );
}

export default MyLink;
