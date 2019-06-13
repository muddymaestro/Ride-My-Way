import React from 'react';
import { Form, InputText, InputSubmit } from '../Form/Form';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import img from '../../Assets/images/passenger.jpg';

const Wrapper = styled.div``; 

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${img});
    background-size: cover;
    background-position: center;
  }
`;

const grid = {
    display: "grid",
    gridColumn: "2/3"
}

const Passenger_signup = () => (
    <Wrapper>
        <GlobalStyle />
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
            
            <InputSubmit href="/passenger/profile">Register</InputSubmit>
        </Form>
    </Wrapper>
);

export default Passenger_signup;