import React from 'react';
import RideRequests from '../Components/PassengerDashboard/Request';
import Sidebar from '../Components/Sidebar/PassengerSidebar';
import { Grid, Cell } from 'styled-css-grid';

const RideRequest = () => (
    <Grid columns={"20% 80%"} rows={"100%"}>
        <Cell style={{height: "100%"}} > <Sidebar /> </Cell>
        <Cell> <RideRequests /> </Cell>
    </Grid>
);

export default RideRequest;