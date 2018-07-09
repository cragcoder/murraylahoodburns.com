import React from 'react';

const Text = ({children, className}) => {
  return (
    <div className="row my-5">
      <div className="col">
        <h4 className={className + " text-info"}>
          <b>
            {children}
          </b>
        </h4>
      </div>
    </div>
  );
}

export default Text;
