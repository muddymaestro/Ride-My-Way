import React from 'react';
import styled from 'styled-components';

// Styling Navbar Component
const NavWrapper = styled.nav`
  background-color: brown;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
`;

const NavItem = styled.li`
  
  a {
      display: block;
      text-decoration: none;
      padding: 0.8rem;
      text-align: center;
      color: white;
      font-size: 1.1rem;

      &:hover {
        color: black;
      }
}
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  float: left;
  position: relative;
  top: 10px;
`;

// Defining navbar component
const Nav = () => (
    <NavWrapper>
        <NavList>
            <NavItem style={{backgroundColor: 'black'}}>
              <Image src={require('../../Assets/images/ride-my-way.jpg')} alt="" /><a href="/">RIDE MY WAY</a>
            </NavItem>

            <NavItem>
              <a href="/">HOME</a>
            </NavItem>

            <NavItem>
              <a href="#">ABOUT US</a>
            </NavItem>

            <NavItem>
              <a href="#">CONTACT US</a>
            </NavItem>

            <NavItem style={{marginLeft: 'auto'}}>
              <a href="/sign-up">SIGN UP</a>
            </NavItem>

            <NavItem>
              <a href="/sign-in">SIGN IN</a>
            </NavItem>

        </NavList>
    </NavWrapper>
);

export default Nav;
