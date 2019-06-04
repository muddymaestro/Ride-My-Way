import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import PassengerLogin from '../Components/SignIn/Passenger-form';
 
const PassengerSignIn = () => (
    <Grid columns={3} >
        <Cell left={2} top={1} >
            <PassengerLogin />
        </Cell>
    </Grid>
);

export default PassengerSignIn;