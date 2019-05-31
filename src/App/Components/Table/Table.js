import styled from 'styled-components';

const Table = styled.table`
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    margin-top: 30px;
    width: 80%;
`;

const Tr = styled.tr``;

const Th = styled.th`
    border-bottom: 1px solid #ddd;
    background-color: brown;
    padding: 20px;
`; 

const Td = styled.td`
    border-bottom: 1px solid #ddd;
    padding: 20px;
`;

export { Table, Th, Tr, Td};