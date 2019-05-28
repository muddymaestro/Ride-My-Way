import React from 'react';
import styled from 'styled-components';

const DriverDetails = styled.section`
    font-size: 30px;
    margin-left: 80px
`;

const Driver_details = () => (
    <DriverDetails>
        <h1>As a driver you are in control</h1>
        <p>Plan and make your ride offers according to your needs and the passengers will request 
            for your services
        </p>  
    </DriverDetails>
);

export default Driver_details;