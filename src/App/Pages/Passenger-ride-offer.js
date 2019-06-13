import React from 'react';
import RideOffers from '../Components/PassengerDashboard/Ride-offer';
import Sidebar from '../Components/Sidebar/PassengerSidebar';
import { Grid, Cell } from 'styled-css-grid';

const RideOffer = () => (
    <Grid columns={"20% 80%"} rows={"100%"}>
        <Cell style={{height: "100%"}} > <Sidebar /> </Cell>
        <Cell> <RideOffers /> </Cell>
    </Grid>
);

export default RideOffer;