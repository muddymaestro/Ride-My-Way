import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import PassengerSignUp from '../Components/SignUp/Passenger-form';

const Passenger_signup = () => (
    <Grid columns={3} >
        <Cell left={2} top={1} >
            <PassengerSignUp />
        </Cell>
    </Grid>
);

export default Passenger_signup;