import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './Pages/Home';
import Register from './Pages/Sign-up-option';
import Login from './Pages/Sign-in-option';
import DriverRegister from './Pages/Driver-sign-up';
import DriverLogin from './Pages/Driver-sign-in';
import PassengerRegister from './Pages/Passenger-sign-up';
import PassengerLogin from './Pages/Passenger-sign-in';
import PassengerProfile from './Pages/Passenger-profile';
import PassengerRideOffer from './Pages/Passenger-ride-offer';
import PassengerRequest from './Pages/Passenger-ride-request';
import DriverProfile from './Pages/Driver-profile';
import RideOffer from './Pages/Ride-offer';
import RideRequest from './Pages/Ride-request';

const Main =  () => (
    <Switch>
      <Route exact={true} path="/" component={Home} />  
      <Route path="/home" component={Home} />
      <Route path="/sign-up/driver" component={DriverRegister} />
      <Route path="/sign-in/driver" component={DriverLogin} />
      <Route path="/sign-up/passenger" component={PassengerRegister} />
      <Route path="/sign-up" component={Register} />
      <Route path="/sign-in/passenger" component={PassengerLogin} />
      <Route path="/passenger/profile" component={PassengerProfile} />
      <Route path="/passenger/ride-offers" component={PassengerRideOffer} />
      <Route path="/passenger/ride-requests" component={PassengerRequest} />
      <Route path="/sign-in" component={Login} />
      <Route path="/driver/profile" component={DriverProfile} />
      <Route path="/driver/ride-offers" component={RideOffer} />
      <Route path="/driver/ride-requests" component={RideRequest} />         
    </Switch>
);

export default Main;