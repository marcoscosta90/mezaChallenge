import styled from 'styled-components'

export const Main = styled.section`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    background: #ebebeb;   
`;

export const LeftContent = styled.div`
    background: #ebebeb;
`;

export const RightContent = styled.div`
    background: #ebebeb;
`;

export const Section = styled.div`
    display: flex;      
`;

export const TopContent = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;    
`;

export const Content = styled.div`        
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 130px repeat(2, 1fr) 200px; 
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    color: #CD8D84;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 20px;
`;

export const SubTitle = styled.div`
    font-size: 14px;
    text-align: justify;
    color: #676767;
    line-height: 20px;   
`;

export const Comments = styled.div`
    font-size: 13px;    
    max-width: 98%;    
    color: #676767;
    line-height: 20px;
`;

export const SmallCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;   
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);    
    width: 100%;
    height: 90%;    
    padding-left: 14px;
    margin-bottom: 20px;
    padding-bottom: 20px;   
`;

export const LongerCard = styled.div`
    background: #fff;
    margin-top: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);  
    grid-column-start: 1; 
    grid-column-end: 3;   
    padding-left: 14px;
    padding-top: 14px;         
`;

export const ImageCard = styled.div`
    background: url('./images/womanDryer.jpg') no-repeat;
    background-size: cover;
    background-position: center;    
    width: 100%;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    margin-left: 20px;     
`;

export const ImageTitle = styled.div`
    font-size: 15px;
    display: flex;
    align-items: center;    
    height: 40px;    
    padding-left: 14px;
    text-transform: uppercase;
    background-color: #CD8D84;
    color: #fff;
`;


export const EndLabel = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;    
    justify-content: center;
    align-items:center;
    background-color: #CD8D84;
    color: #fff;
    height: 50px;
    border-radius: 1px;  
    margin-bottom: 20px;
    grid-column-start: 1;    
    grid-column-end: 3;    
`;
