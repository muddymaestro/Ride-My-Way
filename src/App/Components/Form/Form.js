import styled from 'styled-components';

const Form = styled.form`
    margin-top: 70px;
    border-radius: 5px;
    background-color: brown;
    padding: 20px;
    color: white;

    h1 {
        text-align: center;
    }
`;

const InputText = styled.input`
    width: auto;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const InputSubmit = styled.a`
    width: auto;
    background-color: blue;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: #45a049;
    }
`;

export {Form, InputText, InputSubmit}