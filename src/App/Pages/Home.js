import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Navbar from '../Components/HomePage/Nav';
import Header from '../Components/HomePage/Header';
import AboutUs from '../Components/HomePage/About-us';
import DriverPic from '../Components/HomePage/Driver-pic';
import DriverDetails from '../Components/HomePage/Driver-details';
import PassengerPic from '../Components/HomePage/Passenger-pic';
import PassengerDetails from '../Components/HomePage/Passenger-details';
import Footer from '../Components/HomePage/Footer';

const Home = () => (
      <Grid
          columns={"50% 50%"}
            areas={[
               "navbar navbar",
               "header header",
               "about_us about_us",
               "passenger_pic passenger_details",
               "driver_details driver_pic",
               "footer footer"
        ]}>
            <Cell area="navbar"> <Navbar /> </Cell>
            <Cell area="header"> <Header /> </Cell>
            <Cell area="about_us"> <AboutUs /> </Cell>
            <Cell area="passenger_pic"> <PassengerPic /> </Cell>
            <Cell area="passenger_details"> <PassengerDetails /> </Cell>
            <Cell area="driver_details"> <DriverDetails /> </Cell>
            <Cell area="driver_pic"> <DriverPic /> </Cell>
            <Cell area="footer"> <Footer /> </Cell>
      </Grid>
);

export default Home;