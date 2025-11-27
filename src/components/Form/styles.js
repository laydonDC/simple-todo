import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;

    @media (max-width: 420px) {
        flex-direction: column;

`;

export const Input = styled.input`
    width: 100%;
    background-color: #DBFCFF;
    padding: 8px;
    border: 1px solid #3DA5D9;
    border-radius: 8px;

    :focus {
        border: 3px solid #3DA5D9;
        outline: none;}
`;

export const Button = styled.button`
    background-color: #73BFB8;
    border-radius: 18px;
    border: 2px solid #73BFB8;
    color: black;
    margin-left: 1rem;
    padding: 8px 20px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;

    @media (max-width: 420px) {
        margin-top: 10px;
        margin-left: 0;
        width: 100%;
`;