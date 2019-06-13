import React from 'react';
import styled from 'styled-components';

const About = styled.section`
    position: relative;
    bottom: 8px;
    text-align: center;
    margin-bottom: 30px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 30px;
    background-color: #eeeeee;
`;

const AboutUs = () => (
    <About>
        <h3>ABOUT RIDE MY WAY</h3>
            <p>Ride My Way provides drivers with the 
            ability to create ride offers and passengers to join available ride offers.We enable everyday people to drive their own personal vehicles to take you on trips from one place to another. Because of the low overhead, Ride My Way tend to 
            be less expensive than other transportation services like Uber and Taxify
            </p>
    </About>
);

export default AboutUs;