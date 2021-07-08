import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Board} from './Pages/Board';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import Navbar from './components/NavigationBar/Navbar';
import Footer from './components/Footer/Footer';

function App(){
  return(
    <div className="App">
    <React.Fragment>
    <Navbar/>
    <Layout>
      <Router>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/board" component={Board} />
          <Route componet = {NoMatch} />
        </Switch>
      </Router>
      </Layout>
    <Footer/>
  </React.Fragment>
  </div>
  );
}

export default App;