import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const NavItem = styled.li``;

const Link = {
    display: "block",
    color: "white",
    padding: "8px 0 8px 16px",
    textDecoration: "none",
    marginBottom: "20px",
    borderBottom: "1px solid white"
};

const Sidebar = () => (
    <NavWrapper>
            <NavList>
                <NavItem>
                    <NavLink to="/driver/profile" style={Link} activeStyle={{backgroundColor: "brown"}}>
                        PROFILE
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/driver/ride-offers" style={Link} activeStyle={{backgroundColor: "brown"}}>
                        RIDE OFFERS
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/driver/ride-requests" style={Link} activeStyle={{backgroundColor: "brown"}}>
                        RIDE REQUESTS
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/sign-in/driver" style={Link} activeStyle={{backgroundColor: "brown"}}>
                        LOGOUT
                    </NavLink>
                </NavItem>    
            </NavList>
        </NavWrapper>
);

export default Sidebar;