import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Welcome from './components/Welcome';
import WhoAmI from './components/WhoAmI';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/who-am-i" component={WhoAmI}/>
          <Route exact path="/" component={Welcome}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
