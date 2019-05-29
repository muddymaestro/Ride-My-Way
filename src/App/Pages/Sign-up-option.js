import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import SignUpDriver from '../Components/SignUp/Sign-up-driver';
import SignUpPassenger from '../Components/SignUp/Sign-up-passenger';
import img from '../Assets/images/car.jpg';

const Body = styled.body`
  background: url(${img});
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const SignUpOption = () => (
      <Body>
            <Grid columns={"50% 50%"} >
            <Cell left={1} top={4}> <SignUpDriver /> </Cell>
            <Cell left={2} top={4} height={11}> <SignUpPassenger /> </Cell>
            </Grid>
      </Body>
);

export default SignUpOption;