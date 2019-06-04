import React from 'react';
import styled from 'styled-components';
import BoxShadow from '../BoxShadow/Box-shadow';
import { InputText } from '../Form/Form';

const RideOffer = styled.section``;

const Location = styled.div`
    float: left;
`;

const Time = styled.div`
    position: relative;
    left: 50px;
`;

const Price = styled.div`
    clear: both;
`;

const Button = styled.button`
    width: 99%;
    background-color: brown;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const MakeRideOffer = () => (
    <RideOffer>
        <h1>MAKE A RIDE OFFER</h1>
        <BoxShadow>
            <Location>
                    <label for="from"><strong>LOCATION</strong></label>
                    <p><strong>FROM</strong>: <InputText type="text" name="from" placeholder="Origin" />  <strong>TO</strong>: <InputText type="text" name="to" placeholder="Destination" /></p>
            </Location>
            <Time>
                <label for="time"><strong>TIME</strong></label>
                <p><InputText type="text" name="time" placeholder="starting time" /> - <InputText type="text" name="" placeholder="Ending Time" /></p>
            </Time>
            <Price>
                <label for="price"><strong>PRICE:</strong></label>
                <InputText type="text" name="price" placeholder="Enter your price" />
            </Price>
            <p><Button>Make Ride Offer</Button></p>
        </BoxShadow>
    </RideOffer>
);

export default MakeRideOffer;