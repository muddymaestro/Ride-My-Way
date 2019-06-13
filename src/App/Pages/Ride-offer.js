import React from 'react';
import styled from 'styled-components';
import MakeRideOffer from '../Components/DriverDashboard/Ride-offer';
import RideOfferList from '../Components/DriverDashboard/Ride-offers-list';
import Sidebar from '../Components/Sidebar/DriverSidebar';
import { Grid, Cell } from 'styled-css-grid';

const RideOfferContent = styled.section``;

const RideOffer = () => (
    <Grid columns={"20% 80%"} rows={"100%"}>
        <Cell style={{height: "100%"}} > <Sidebar /> </Cell>
        <Cell>
            <RideOfferContent>
                <MakeRideOffer />
                <RideOfferList />
            </RideOfferContent>
        </Cell>
    </Grid>
);

export default RideOffer;