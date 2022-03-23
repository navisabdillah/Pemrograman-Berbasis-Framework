import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation 
} from "react-router-dom";

export default function BasicExample() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <hr />
    
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
                </Route> 
              <Route path="/dashboard">
                <Dashboard /> 
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    // Anda dapat menganggap komponen ini sebagai "halaman (konten)" di situs Anda.
    
    function Home() {
      return (
        <div>
          <h2>Home</h2>
        </div>
      );
    }
    
    function About() {
      return (
        <div>
          <h2>About</h2>
        </div>
      );
    }
    
    function Dashboard() {
       return (
         <div>
           <h2>Dashboard</h2>
         </div>
       );
    }
  