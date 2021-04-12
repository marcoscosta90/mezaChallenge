import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const Image = styled.div`
    background: url("./images/model.jpg") no-repeat;
    background-size: contain;
    width: 100%;
    height: 300px;
`

export const RightContent = styled.div`
    background: #DE8E85;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    padding-left: 50px;
`

export const Title = styled.div`
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
`;

export const Subtitle = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    margin-top: -10px;
`;

export const Comment = styled.div`
    margin-top: 3px;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    font-weight: bold;
    max-width: 500px;
`;
