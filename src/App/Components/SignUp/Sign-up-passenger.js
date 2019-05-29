import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';


const PassengerRegistration = styled.section`
    text-align: center;
    margin-right: 10px;
    color: white;
    font-size: 30px;
`;

const Passenger_registration = () => (
    <PassengerRegistration>
        <h1>Register As Passenger</h1>
        <p>Choose the best suitable ride offers from the drivers and reach your destination with comfort</p>
        <Button>Register</Button>
    </PassengerRegistration>
);

export default Passenger_registration;