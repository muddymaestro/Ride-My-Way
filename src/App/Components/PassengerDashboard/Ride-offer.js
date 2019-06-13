import React from 'react';
import styled from 'styled-components';
import BoxShadow from '../BoxShadow/Box-shadow';

const RideOffers = styled.section``;

const DriverName = styled.p`
    position: relative;
    top: 15px;
    left: 10px;
`;

const Clear = styled.div`
    clear: both;
    padding-top: 5px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    float: left;
    border-radius: 50%;
`;

const RequestButton = styled.button`
    width: 99%;
    background-color: brown;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const RideOffer = () => (
    <RideOffers>
        <h1>Available Ride Offers</h1>
        <BoxShadow>
            <p><strong>DRIVER</strong></p>
            <p><Image src={require("../../Assets/images/driver.jpg")} alt="" /></p>
            <DriverName><strong>Elifadhili Daniel</strong></DriverName>
            <Clear>
                <p><strong>TRIP:</strong> From <strong>Posta</strong> To <strong>Mlimani City</strong></p>
                <p><strong>TIME:</strong> 09:00AM - 3:00PM</p>
                <p><strong>PRICE:</strong> 20,000Tshs</p>
                <RequestButton>Request Ride</RequestButton>
            </Clear>
        </BoxShadow>

        <BoxShadow>
            <p><strong>DRIVER</strong></p>
            <p><Image src={require("../../Assets/images/driver.jpg")} alt="" /></p>
            <DriverName><strong>Mngoya Mdoe</strong></DriverName>
            <Clear>
                <p><strong>TRIP:</strong> From <strong>Posta</strong> To <strong>Mlimani City</strong></p>
                <p><strong>TIME:</strong> 09:00AM - 3:00PM</p>
                <p><strong>PRICE:</strong> 20,000Tshs</p>
                <RequestButton>Request Ride</RequestButton>
            </Clear>
        </BoxShadow>

        <BoxShadow>
            <p><strong>DRIVER</strong></p>
            <p><Image src={require("../../Assets/images/driver.jpg")} alt="" /></p>
            <DriverName><strong>John Snow</strong></DriverName>
            <Clear>
                <p><strong>TRIP:</strong> From <strong>Posta</strong> To <strong>Mlimani City</strong></p>
                <p><strong>TIME:</strong> 09:00AM - 3:00PM</p>
                <p><strong>PRICE:</strong> 20,000Tshs</p>
                <RequestButton>Request Ride</RequestButton>
            </Clear>
        </BoxShadow>
    </RideOffers>
);

export default RideOffer;

    

