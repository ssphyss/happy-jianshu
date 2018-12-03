import React, { Component } from 'react';
import Top from './components/LayoutComponents/Top';
import Footer from './components/LayoutComponents/Footer';
import Home from './components/JianshuComponents/Home';
import DetailArticle from './components/JianshuComponents/DetailArticle';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  	render() {
   		return (
			<Provider store={store}>
				<div>					
					<BrowserRouter>						
						<div>
							<Top />
							{/* <Home /> */}
							{/* <Route path='/' exact render={ () => <div>home</div> }></Route>    */}
							{/* <Route path='/detail' exact render={ () => <div>detail</div> }></Route> */}
							<Route path='/' exact component={Home}></Route>   
                            {/* <Route path='/detail' exact  component={DetailArticle}></Route> */}
							<Route path='/detail/:id' exact  component={DetailArticle}></Route>
						</div>						
					</BrowserRouter>
					<Footer />
				</div>			
			</Provider>
    	);
  	}
}

export default App;
