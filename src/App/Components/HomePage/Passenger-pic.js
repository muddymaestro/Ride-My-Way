import React from 'react';
import styled from 'styled-components';

const PassengerPic = styled.section`
    img {
        margin-left: 80px;
        height: 400px;
        width: 550px;
    }
`;

const Passenger_Pic = () => (
    <PassengerPic>
        <img src={require("../../Assets/images/passenger.jpg")} alt="" />
    </PassengerPic>
);

export default Passenger_Pic;