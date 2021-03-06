import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeConfig } from './redux/storeConfig';

const store = storeConfig();

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Main/>
					</div>
				</BrowserRouter>
		    </Provider>
		);
  	}
}

export default App;
