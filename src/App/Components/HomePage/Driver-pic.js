import React from 'react';
import styled from 'styled-components';

const DriverPic = styled.section`
    img {
        height: 400px;
        width: 550px;
    }
`;

const Driver_pic = () => (
    <DriverPic>
        <img src={require("../../Assets/images/driver.jpg")} alt="" />
    </DriverPic>
);

export default Driver_pic;