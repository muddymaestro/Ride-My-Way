import React from 'react';
import styled from 'styled-components';

const Footer1 = styled.footer`
    background: brown;
    color: white;
    text-align: center;
    padding: 1rem;
`;

const Footer = () => (
    <Footer1>
        <p>Ride My Way &copy;2019</p>
    </Footer1>
);

export default Footer;