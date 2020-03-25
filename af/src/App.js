import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList"

function App() {
  return (
    <div className="App">
    
      <Router>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/' component={FriendList}/>
        {/* <Route path='/form' component={FriendForm}/> */}
 
      </Router>


    </div>
  );
}

export default App;
