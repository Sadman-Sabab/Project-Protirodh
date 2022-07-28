import React, { useState, createContext, useReducer } from "react";
import './App.css';
import axios from "axios";
import Test_header from "./Test_header";
import Home from "./Home";
import Registration from "./Registration";
import NID_Reg from "./NID_Reg";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Birth_Reg from "./Birth_Reg";
import Passport_Reg from "./Passport_Reg";
import Login from './Login'
import Logout from "./Logout";
import { initialState, reducer } from "../Reducer/UseReducer"
import Profile from "./Profile"
import ListOffUsers from "./ListOffUsers"
import Footer from "./Footer"
import CookieChecker from "./CookieChecker"
import AdminPanel from "./AdminPanel"
import AddAdmin from "./AddAdmin";
import ErrorPage from "./ErrorPage"

axios.defaults.withCredentials = true;

export const UserContext = createContext();

function App() {

  const [user, setLoggedinUser] = useState({})
  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <>
      <UserContext.Provider value={{ state, dispatch, user }}>
        <Router>
          <div className="App">

            {console.log(user)}
            <Test_header passUserData={user} />

            <Switch>

              <Route path="/listOfUsers">
                {/* <CookieChecker setLoggedinUser={setLoggedinUser} /> */}
                <ListOffUsers />
              </Route>
              <Route path="/profile">
                {/* <CookieChecker setLoggedinUser={setLoggedinUser} /> */}
                {state ? <Profile passUserData={user} /> : <Login setLoggedinUser={setLoggedinUser} />}

              </Route>
              <Route path='/logout'>
                {/* <CookieChecker setLoggedinUser={setLoggedinUser} /> */}
                <Logout setLoggedinUser={setLoggedinUser} />
              </Route>
              <Route path='/nid'>

                <NID_Reg />
              </Route>
              <Route path='/birth_reg'>

                <Birth_Reg />
              </Route>
              <Route path='/passport'>

                <Passport_Reg />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/login">
                {state ?

                  <ErrorPage />
                  :
                  <Login setLoggedinUser={setLoggedinUser} />
                }
              </Route>
              <Route path="/">
                {/* <CookieChecker setLoggedinUser={setLoggedinUser} /> */}
                <Home />

              </Route>

            </Switch>
            <Footer />

          </div>
        </Router>
      </UserContext.Provider>

    </>



  );
}

export default App;
