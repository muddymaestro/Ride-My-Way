import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const DriverRegistration = styled.section`
    text-align: center;
    color: white;
    font-size: 30px;
`;

const Driver_registration = () => (
    <DriverRegistration>
        <h1>Register As Driver</h1>
        <p>Earn money by providing your own ride offers to passengers</p>
        <Button>Register</Button>
    </DriverRegistration>
);

export default Driver_registration;