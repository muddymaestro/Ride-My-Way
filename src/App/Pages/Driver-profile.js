import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Sidebar from '../Components/Sidebar/DriverSidebar';
import DriverDetails from '../Components/DriverDashboard/Profile';

const DriverProfile = () => (
    <Grid columns={"20% 80%"} >
        <Cell> <Sidebar /> </Cell>
        <Cell> <DriverDetails /> </Cell>
    </Grid>
);

export default DriverProfile;