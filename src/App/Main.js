import React from 'react';
import { Route } from 'react-router-dom';

// Import Pages
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Register from './Pages/Sign-up';
import Login from './Pages/Sign-in';

const Main =  () => (
      <div>
          <Route exact={true} path="/" component={Home} /> 
          <Route path="/about-us" component={About} /> 
          <Route path="/contact-us" component={Contact} /> 
          <Route path="/home" component={Home} />
          <Route path="/sign-up" component={Register} />
          <Route path="/sign-in" component={Login} /> 
      </div>
    )

export default Main;