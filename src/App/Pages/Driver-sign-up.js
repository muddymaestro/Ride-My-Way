import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import DriverSignUp from '../Components/SignUp/Driver-form';

const Driver_signup = () => (
    <Grid columns={3} >
        <Cell left={2} top={1} >
            <DriverSignUp />
        </Cell>
    </Grid>
);

export default Driver_signup;