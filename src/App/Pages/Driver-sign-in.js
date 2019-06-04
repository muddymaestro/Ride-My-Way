import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import DriverLogin from '../Components/SignIn/Driver-form';

const DriverSignIn = () => (
    <Grid columns={3} >
        <Cell left={2} top={1} >
            <DriverLogin />
        </Cell>
    </Grid>
);

export default DriverSignIn;