import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: #00008b;
    height: 40px;
    display: flex;
    
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export const LeftItem = styled.div`
    display: flex;  
`

export const CenterItem = styled.div`
    display: flex;
    position: relative;
`

export const RightItem = styled.div`
    display: flex;    
`

export const SignIn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

