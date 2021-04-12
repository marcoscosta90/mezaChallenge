import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
    background: #ebebeb;
`;

export const Empty = styled.div``;

export const RightContent = styled.div`
    padding-left: 90px;      
    display: flex; 
`;

export const ButtonPrimary = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    width: 200px;    
    margin: 1em;
    padding: 0.25em 1em;
    border: none;
    background-color: #fff;
    cursor: pointer;
    height: 30px;    
`;
