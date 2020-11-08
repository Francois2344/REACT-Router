import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';
import './styles.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
          <Link to="/"> Home</Link>
          </li>
          <li>
          <Link to="/my-profile"> MyProfile</Link>
          </li>
            <li>    
          <Link to="/user-Profile/Francois2344">My GitHub</Link>
          </li>
          <li>
          <Link to="/user-Profile/Loicbdev">Github Loic</Link>
          </li>
          <li>
          <Link to="/user-Profile/thomas37000">Github Thomas</Link>
          </li>
        </ul>
      </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-profile">
          <MyProfile />
          </Route>
          <Route path="/user-Profile/:githubLogin" component={UserProfile}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
