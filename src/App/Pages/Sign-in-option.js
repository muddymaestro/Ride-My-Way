import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import SignInDriver from '../Components/SignIn/Sign-in-driver';
import SignInPassenger from '../Components/SignIn/Sign-in-passenger';
import img from '../Assets/images/car.jpg';

const Body = styled.body`
  background: url(${img});
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const SignInOption = () => (
      <Body>
            <Grid columns={"50% 50%"} >
            <Cell left={1} top={4}> <SignInDriver /> </Cell>
            <Cell left={2} top={4} height={11}> <SignInPassenger /> </Cell>
            </Grid>
      </Body>
);

export default SignInOption;