import React, { Component } from 'react';
import Top from './components/LayoutComponents/Top';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<Top />
		</Provider>
    );
  }
}

export default App;
