import React from 'react';

const Header = ({children, className}) => {
  return (
    <div className="row my-5">
      <div className="col">
        <h1 className={className + " text-info"}>
          <b>
            {children}
          </b>
        </h1>
      </div>
    </div>
  );
}

export default Header;
