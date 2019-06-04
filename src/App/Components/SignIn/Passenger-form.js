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

const Passenger_login = () => (
    <Wrapper>
        <GlobalStyle />
        <Form style={grid}>
            <h1>Passenger Sign In</h1>

            <label for="fname">Email</label>
            <InputText type="email" id="fname" name="firstname" placeholder="Your email.." />

            <label for="lname">Password</label>
            <InputText type="password" id="lname" name="lastname" placeholder="Your password.." />
            
            <InputSubmit href="/passenger/profile">Sign In</InputSubmit>
        </Form>
    </Wrapper>
);

export default Passenger_login;