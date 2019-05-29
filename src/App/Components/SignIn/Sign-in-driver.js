import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const DriverLogin = styled.section`
    text-align: center;
    color: white;
    font-size: 30px;
`;

const Driver_login = () => (
    <DriverLogin>
        <h1>Sign In As Driver</h1>
        <p>Earn money by providing your own ride offers to passengers</p>
        <Button>Sign In</Button>
    </DriverLogin>
);

export default Driver_login;