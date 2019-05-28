import React from 'react';
import styled from 'styled-components';
import img from '../../Assets/images/car.jpg';

// Styling Head component
const Head = styled.header`
    hieght: 100%;
    min-height: 400px;
    background: url(${img});
    background-size: cover;
    background-position: center;
    padding: 3rem;
    text-align: center;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const Center = styled.section`
    margin: auto;
`;

const Button = styled.a`
    background: brown;
    color: white;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: 0;
`;

const Header = () => (
    <Head>
        <Center>
            <h2>REACH YOUR DESTINATION WITH COMFORT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamu
                s veniam facere tempora libero eum beatae provident quibusdam iure ad quas!</p>
            <Button>Learn More</Button>
        </Center>
    </Head>
);

export default Header;

