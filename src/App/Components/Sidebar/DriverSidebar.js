import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    height: 100%;
`;

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 200px;
    background-color: black;
`;

const NavItem = styled.li`

a {
    display: block;
    color: white;
    padding: 8px 0 8px 16px;
    text-decoration: none;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
}

a.active {
    background-color: #4CAF50;
    color: white;
}

a:hover:not(.active) {
    background-color: brown;
    color: white;
}
`;

const Sidebar = () => (
    <NavWrapper>
            <NavList>
                <NavItem><a href="/driver/profile">PROFILE</a></NavItem>
                <NavItem><a href="/driver/ride-offers">RIDE OFFERS</a></NavItem>
                <NavItem><a href="/driver/ride-requests">RIDE REQUESTS</a></NavItem>
                <NavItem><a href="/sign-in/driver">LOG OUT</a></NavItem>    
            </NavList>
        </NavWrapper>
);

export default Sidebar;