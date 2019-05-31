import React from 'react';
import RideRequest from '../Components/DriverDashboard/Ride-request';
import Sidebar from '../Components/Sidebar/DriverSidebar';
import { Grid, Cell } from 'styled-css-grid';

const Ride_request = () => (
    <Grid columns={"20% 80%"} rows={"100%"}>
        <Cell style={{height: "100%"}} > <Sidebar /> </Cell>
        <Cell>
            <RideRequest />
        </Cell>
    </Grid>
);

export default Ride_request;