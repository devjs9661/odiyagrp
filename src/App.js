import './App.css';
import NavBar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import {About} from './components/About';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Event', link: '/events' },
 /* { 
    name: 'Services', 
    link: '/services', 
    subMenu: [
      { name: 'Web Development', link: '/services/web' },
      { name: 'App Development', link: '/services/app' },
    ]
  },
  ,
  { name: 'Contact', link: '/contact' }*/
];

//          <Route path="/login"  exact component={Login } /><Route path="/register"  exact component={Register } />

function App() {
  return (

    <div className="App">

        <Router>
          <NavBar menuItems={menuItems} />
          <Switch>
          <Route path="/"  exact component={Home } />
          <Route path="/events" exact component={About} />
          </Switch>
      </Router>
    
    </div>
  );
}

export default App;
