import React from 'react';

const Title = ({children}) => {
  return (
    <div className="row my-5">
      <div className="col">
        <h1

          style={{float:"right", clear:"right", whiteSpace:"normal"}} 
          className="p-2 bg-primary text-white">
          {children}
        </h1>
      </div>
    </div>
  );
}

export default Title;
