import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import img from '../Assets/images/passenger.jpg';
import { Form, InputText, InputSubmit } from '../Components/Form/Form';

const grid = {
    display: "grid",
    gridColumn: "2/3"
}

const Body = styled.body`
  background: url(${img});
  background-size: cover;
  background-position: center;
`; 

const PassengerSignUp = () => (
    <Body>
        <Grid columns={3} >
            <Cell left={2} top={1} >
                <Form style={grid}>
                    <h1>Passenger Registration</h1>
                    <label for="fname">First Name</label>
                    <InputText type="text" id="fname" name="firstname" placeholder="Your name.." />
                
                    <label for="lname">Last Name</label>
                    <InputText type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="fname">Email</label>
                    <InputText type="email" id="fname" name="firstname" placeholder="Your email.." />
                
                    <label for="lname">Phone</label>
                    <InputText type="text" id="lname" name="lastname" placeholder="Your phone.." />

                    <label for="lname">Password</label>
                    <InputText type="password" id="lname" name="lastname" placeholder="Your password.." />
                    
                    <InputSubmit>Register</InputSubmit>
                </Form>
            </Cell>
        </Grid>
    </Body>
);

export default PassengerSignUp;