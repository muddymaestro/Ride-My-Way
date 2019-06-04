import React from 'react';
import styled from 'styled-components';

const DriverLogin = styled.section`
    text-align: center;
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

const Driver_login = () => (
    <DriverLogin>
        <h1>Sign In As Driver</h1>
        <p>Earn money by providing your own ride offers to passengers</p>
        <Button  href="/sign-in/driver">Sign In</Button>
    </DriverLogin>
);

export default Driver_login;