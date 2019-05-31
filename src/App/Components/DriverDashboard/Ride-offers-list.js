import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Table, Tr, Th, Td } from '../Table/Table';

const font = {
    position: "relative", 
    right: "5px"
}

const Wrapper = styled.section``;

const Button = styled.a`
    background: brown;
    color: white;
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    border: 0;
`;

const RideOffersList = () => (
    <Wrapper>
         <h1>YOUR RIDE OFFERS</h1>
        <Table>
            <Tr>
                <Th>Origin</Th>
                <Th>Destination</Th>
                <Th>Time</Th>
                <Th>Date</Th>
                <Th>Price</Th>
                <Th>Status</Th>
                <Th></Th>
            </Tr>
            <Tr>
                <Td>Posta</Td>
                <Td>Mlimani city</Td>
                <Td>09:00 AM</Td>
                <Td>01 June 2019</Td>
                <Td>12,000 tshs</Td>
                <Td>Awaiting</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td>Buguruni</Td>
                <Td>Kinondoni</Td>
                <Td>8:40 PM</Td>
                <Td>01 June 2019</Td>
                <Td>8,900 tshs</Td>
                <Td>Completed</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td>Kimara</Td>
                <Td>Mbagala</Td>
                <Td>11:34 PM</Td>
                <Td>27 May 2019</Td>
                <Td>34,000 tshs</Td>
                <Td>Completed</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td>Posta</Td>
                <Td>Mlimani city</Td>
                <Td>07:36 AM</Td>
                <Td>27 May 2019</Td>
                <Td>4,500 tshs</Td>
                <Td>Completed</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
            <Tr>
                <Td>Posta</Td>
                <Td>Mlimani city</Td>
                <Td>09:00 PM</Td>
                <Td>01 June 2019</Td>
                <Td>4,500 tshs</Td>
                <Td>Expired</Td>
                <Td><Button><FontAwesomeIcon style={font} icon={faTrashAlt} />Delete</Button></Td>
            </Tr>
        </Table>
    </Wrapper>
);

export default RideOffersList;