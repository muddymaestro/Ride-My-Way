import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Table, Tr, Th, Td } from '../Table/Table';

const Wrapper = styled.section``;

const Table1 = styled(Table)`
width: 100%;
`;

const Name = styled.p`
   position: relative;
   left: 5px;
   bottom: 6px;
`;

const font = {
    position: "relative", 
    right: "5px"
}

const Image = styled.img`
    border-radius: 50%; 
    height: 50px;
    width: 50px;
    float: left;
`;

const Button = styled.a`
    background: brown;
    color: white;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: 0;
`;

const RideRequest = () => (
    <Wrapper>
        <h1>Your List of Ride Requests</h1>
        <Table1>
            <Tr>
                <Th>Driver</Th>
                <Th>Origin</Th>
                <Th>Destination</Th>
                <Th>Price</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th></Th>
            </Tr>
            <Tr>
                <Td><Image src={require("../../Assets/images/profile.jpg")} alt="" /> <Name>Mohamed Mdoe</Name></Td>
                <Td>Posta</Td>
                <Td>Mlimani City</Td>
                <Td>20,000 Tshs</Td>
                <Td>12/05/2019</Td>
                <Td>Completed</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td><Image src={require("../../Assets/images/driver.jpg")} alt="" /> <Name>Fadhili Peter</Name></Td>
                <Td>Buguruni</Td>
                <Td>Tabata</Td>
                <Td>54,000 Tshs</Td>
                <Td>12/05/2019</Td>
                <Td>Completed</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td><Image src={require("../../Assets/images/passenger.jpg")} alt="" /> <Name>Issa Juma</Name></Td>
                <Td>Masaki</Td>
                <Td>Mlimani City</Td>
                <Td>56,000 Tshs</Td>
                <Td>8/05/2019</Td>
                <Td>Rider Cancelled</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td><Image src={require("../../Assets/images/driver.jpg")} alt="" /> <Name>Juma Mwapa</Name></Td>
                <Td>Posta</Td>
                <Td>Mlimani City</Td>
                <Td>20,000 Tshs</Td>
                <Td>29/04/2019</Td>
                <Td>Driver Cancelled</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td><Image src={require("../../Assets/images/profile.jpg")} alt="" /> <Name>Mohamed Mdoe</Name></Td>
                <Td>Sinza</Td>
                <Td>Mbagala</Td>
                <Td>37,400 Tshs</Td>
                <Td>19/03/2019</Td>
                <Td>Completed</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
        </Table1>
    </Wrapper>
);

export default RideRequest;