import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Sidebar from '../Components/Sidebar/PassengerSidebar';
import PassengerDetails from '../Components/PassengerDashboard/Profile';

const PassengerProfile = () => (
    <Grid columns={"20% 80%"} >
        <Cell style={{height: "100%"}} > <Sidebar /> </Cell>
        <Cell> <PassengerDetails /> </Cell>
    </Grid>
);

export default PassengerProfile;