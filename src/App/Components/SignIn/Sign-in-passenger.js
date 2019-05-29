import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';


const PassengerLogin = styled.section`
    text-align: center;
    margin-right: 10px;
    color: white;
    font-size: 30px;
`;

const Passenger_login = () => (
    <PassengerLogin>
        <h1>Sign In As Passenger</h1>
        <p>Choose the best suitable ride offers from the drivers and reach your destination with comfort</p>
        <Button>Sign In</Button>
    </PassengerLogin>
);

export default Passenger_login;