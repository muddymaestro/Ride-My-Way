import React from 'react';
import styled from 'styled-components';

const PassengerLogin = styled.section`
    text-align: center;
    margin-right: 10px;
    color: white;
    font-size: 30px;
`;

const Button = styled.a`
    background: brown;
    color: white;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: 0;
`;

const Passenger_login = () => (
    <PassengerLogin>
        <h1>Sign In As Passenger</h1>
        <p>Choose the best suitable ride offers from the drivers and reach your destination with comfort</p>
        <Button  href="/sign-in/passenger">Sign In</Button>
    </PassengerLogin>
);

export default Passenger_login;