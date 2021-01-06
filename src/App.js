import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';

class App extends React.Component {
  render(){
    return (
      <HashRouter>
        <Navigation />
        <Route path="/about" component={About}/>
        <Route path="/"  exact={true} component={Home} />
        <Route path="/movie-detail" component={Detail} />
      </HashRouter>
    );
  }
}

export default App;