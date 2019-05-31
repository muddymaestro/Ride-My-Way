import React from 'react';
import styled from 'styled-components';
import boxShadow from '../BoxShadow/Box-shadow';
import { Table, Tr, Th, Td } from '../Table/Table';

const RideRequest = styled.section``;

const RequestButtons = styled.div`
     position: relative;
     left: 700px;
     bottom: 10px;
`;

const AcceptButton = styled.button`
    background-color: brown;
    padding: 0.6rem 1.3rem;
    border: 0;
    color: white;
`;

const CancelButton = styled(AcceptButton)`
    background-color: black;
`;

const BoxShadow = styled(boxShadow)`
    img {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    h4 {
        position: relative;
        left: 5px;
        bottom: 10px;
    }
`;

const TripDetails = styled.div`
     border: 1px solid grey;
     border-radius: 25px;
     margin-left: 50px;
     margin-bottom: 30px;
     width: 80%;

     ${Table} {
         margin-left: 10px;
     }
`;

const Ride_request = () => (

    <RideRequest>
        <h1>PASSENGERS RIDE REQUESTS</h1>
        <BoxShadow>
            <img src={require("../../Assets/images/driver.jpg")} alt="" />
            <p><h4>Asha Mdoe has requested your offer</h4></p>
            <TripDetails>
                <Table>
                    <Tr>
                        <Th>Origin</Th>
                        <Th>Destination</Th>
                        <Th>Time</Th>
                        <Th>Date</Th>
                        <Th>Price</Th>
                    </Tr>
                    <Tr>
                        <Td>Posta</Td>
                        <Td>Mlimani city</Td>
                        <Td>09:00 AM</Td>
                        <Td>01 June 2019</Td>
                        <Td>12,000 tshs</Td>
                    </Tr>
                </Table>
            </TripDetails>
            <RequestButtons>
                <AcceptButton>Accept</AcceptButton> 
                <CancelButton>Cancel</CancelButton>
            </RequestButtons>
        </BoxShadow>

        <BoxShadow>
            <img src={require("../../Assets/images/driver.jpg")} alt="" />
            <p><h4>Athumani Hassan has requested your offer</h4></p>
            <TripDetails>
                <Table>
                    <Tr>
                        <Th>Origin</Th>
                        <Th>Destination</Th>
                        <Th>Time</Th>
                        <Th>Date</Th>
                        <Th>Price</Th>
                    </Tr>
                    <Tr>
                        <Td>Posta</Td>
                        <Td>Mlimani city</Td>
                        <Td>09:00 AM</Td>
                        <Td>01 June 2019</Td>
                        <Td>12,000 tshs</Td>
                    </Tr>
                </Table>
            </TripDetails>
            <RequestButtons>
                <AcceptButton>Accept</AcceptButton> 
                <CancelButton>Cancel</CancelButton>
            </RequestButtons>
        </BoxShadow>

        <BoxShadow>
            <img src={require("../../Assets/images/driver.jpg")} alt="" />
            <p><h4>Fadhili Paulo has requested your offer</h4></p>
            <TripDetails>
                <Table>
                    <Tr>
                        <Th>Origin</Th>
                        <Th>Destination</Th>
                        <Th>Time</Th>
                        <Th>Date</Th>
                        <Th>Price</Th>
                    </Tr>
                    <Tr>
                        <Td>Posta</Td>
                        <Td>Mlimani city</Td>
                        <Td>09:00 AM</Td>
                        <Td>01 June 2019</Td>
                        <Td>12,000 tshs</Td>
                    </Tr>
                </Table>
            </TripDetails>
            <RequestButtons>
                <AcceptButton>Accept</AcceptButton> 
                <CancelButton>Cancel</CancelButton>
            </RequestButtons>
        </BoxShadow>
    </RideRequest>
);

export default Ride_request;