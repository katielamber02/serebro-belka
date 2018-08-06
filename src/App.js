import React, { Component } from 'react';


import Root from './components/Root'
import Counter from './components/Counter'

import {articles} from './fixtures'


class App extends Component {
  render() {
    return (
	      <div>
          <Counter />
          <Root articles={articles} />
		  </div>

    );
  }
}

export default App;