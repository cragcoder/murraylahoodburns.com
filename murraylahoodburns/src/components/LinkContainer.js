import React from 'react';

const LinkContainer = ({children}) => {
  return (
    <div className="row my-2">
      <div className="col text-right">
        {children}
      </div>
    </div>
  );
}

export default LinkContainer;
