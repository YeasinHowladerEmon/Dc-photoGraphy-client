
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import LoginPage from './components/Login/LoginPage';
import { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { getDecodedUser } from './components/Login/LoginSetting';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BookModal from './components/Home/BookModal/BookModal';
import SidebarRoute from './components/Dashboard/SidebarRoute/SidebarRoute';
import axios from 'axios';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser)
  const [dataStore, setDataStore] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:5000/adminCheck?email=${loggedInUser?.email}`)
      .then((res) => {
        setIsAdmin(res.data)
      }).catch((err) => console.log(err))
  }, [loggedInUser?.email])
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isAdmin, dataStore, setDataStore }}>
      {/* <h1>{loggedInUser.email}</h1> */}
      <Router>
        <Toaster />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard" >
            <BookModal />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
