import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


// import Navbar from './components/layout/Navbar'
// import Account from './pages/Account';
// import Chat from './pages/Chat';
// import Support from './pages/Support';
// import Events from './pages/Events';
// import Footer from './components/Footer';
import Home from './pages/Home';








import React from 'react';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <Switch >
          <Route path='/' exact component={Home}/>
          </Switch>
          </Router>
          </div>
          </div>          
  )
}
export default App;