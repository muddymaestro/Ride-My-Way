import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Table, Tr, Th, Td } from '../Table/Table';

const Button = styled.a`
    background: brown;
    color: white;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: 0;
`;

const PersonImage = styled.img` 
    border-radius: 50%; 
    height: 100px;
    width: 100px;
    float: left;
`;

const PersonName = styled.h3`
    position: relative;
    top: 20px;
    left: 5px;
`;

const font = {
    position: "relative", 
    right: "5px"
}

const PassengerDetails = () => (
    <Table>
        <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
        </Tr>
        <Tr>
            <Td>
                <PersonImage src={require("../../Assets/images/profile2.jpg")} alt="" />
                <p><PersonName>Naimaya Mdoe</PersonName></p>
            </Td>
            <Td></Td>
            <Td><Button><FontAwesomeIcon style={font} icon={faEdit} />Edit</Button></Td>
        </Tr>
        <Tr>
            <Td><strong>Email</strong></Td>
            <Td>naimaya@gmail.com</Td>
            <Td><Button><FontAwesomeIcon style={font} icon={faEdit} />Edit</Button></Td>
        </Tr>
        <Tr>
            <Td><strong>Phone</strong></Td>
            <Td>0654907719</Td>
            <Td><Button><FontAwesomeIcon style={font} icon={faEdit} />Edit</Button></Td>
        </Tr>
        <Tr>
            <Td><strong>Password</strong></Td>
            <Td>.........</Td>
            <Td><Button><FontAwesomeIcon style={font} icon={faEdit} />Edit</Button></Td>
        </Tr>
        <Tr>
            <Td><strong>City</strong></Td>
            <Td>Dar es salaam</Td>
            <Td><Button><FontAwesomeIcon style={font} icon={faEdit} />Edit</Button></Td>
        </Tr>
    </Table>
);

export default PassengerDetails;