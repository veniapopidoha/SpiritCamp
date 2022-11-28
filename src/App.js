import React from "react";
import "./App.css";
import HamburgerMenu from "./pages/HamburgerMenu";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Registration from "./pages/Registation";
import Zvit from "./pages/Zvit"
import { MainPage } from './modules/MainPage';
import { AboutCamp } from './modules/AboutCamp';
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Routine } from './modules/Routine';
import { Support } from './modules/Support';
import { Profile } from './modules/Profile';
import { Success } from './modules/Success';
import { Error } from './modules/Error';
import Holovna from './pages/holovna';
import { Ticket } from './modules/Ticket/ticket';

class App extends React.Component {
  state = {
    count: 0,
    data: [],
    sw: [],
  };

  render() {
    return (
        <Router>
          <HamburgerMenu />
          <Header/>
          <Routes>
            <Route exact path="/" element={<Holovna/>} />
            <Route exact path="/registration" element={<Registration/>} />
            <Route exact path="/about" element={<AboutCamp/>} />
            <Route exact path="/program" element={<Routine/>} />
            <Route exact path="/donate" element={<Support/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/success" element={<Success/>} />
            <Route exact path="/error" element={<Error/>} />
          </Routes>
          <Footer/>
        </Router>
    );
  }
}
export default App;