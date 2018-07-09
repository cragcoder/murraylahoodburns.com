import React from 'react';

import Header from './Header';
import LinkContainer from './LinkContainer';
import MyLink from './MyLink';

const Welcome = () => {
  return (
    <div className="container">
      <Header>
        Hello. <br/>
        How can I help you?
      </Header>
      <LinkContainer>
        <MyLink to="/who-am-i">
          Who are you?
        </MyLink>
        <MyLink to="/web-design">
          I'm thinking about getting a website...
        </MyLink>
        <MyLink to="/earthorizons">
          Aren't you the radon guy?
        </MyLink>
      </LinkContainer>

    </div>
  );
}

export default Welcome;
