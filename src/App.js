import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Acerca from './components/pages/Acerca';
import Servicios from './components/pages/Servicios';
import Blog2 from './components/pages/Blog2';
import Contacto from './components/pages/Contacto';





function App(){
    return(
        <>
        {/* <div className="page-container">
        <div className = "content-wrap"> */}
        <Router>
            
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Acercade' exact component={Acerca}/>
                <Route path='/Servicios' exact component={Servicios}/>
                <Route path='/Blog' exact component={Blog2}/>
                <Route path='/Contactenos' exact component={Contacto}/>



            </Switch>
        </Router>
        {/* </div>

        <Footer />
        </div> */}
            
            
        </>
    );
}
export default App;