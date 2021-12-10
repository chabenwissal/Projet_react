import React from 'react';

import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';


function App () {
        return ( 
    
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/products" component={Products}/>
         <Route exact path="/products/:id" component={Product}/>
       </Switch>
       </Router>
   
  )

  
}

export default App;
