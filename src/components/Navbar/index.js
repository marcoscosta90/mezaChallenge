import React from 'react'
import { Nav, NavLink, LeftItem, CenterItem, RightItem, SignIn, Logo } from './NavbarElements';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    return (
        <>
            <Nav>
                <LeftItem>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>

                    <NavLink style={{ marginLeft: 20 }} to="/about">
                        <GiHamburgerMenu style={{ marginRight: -10 }} />
                    </NavLink>
                    <NavLink to="/about">
                        CATEGORIAS
                </NavLink>

                </LeftItem>
                <CenterItem to="/about" >
                    <input type="text" placeholder="O que você procura?" name="search" style={{ fontSize: 16, display: 'flex', width: 600, paddingLeft: '8px', borderRadius: 2, border: 'none', height: 40, marginTop: 2 }} />
                    <button style={{ position: 'absolute', right: 0, top: 10, border: 'none', background: 'transparent' }}>
                        <AiOutlineSearch style={{ width: 24, height: 24, color: '#aaa9a9' }} />
                    </button>
                </CenterItem>
                <RightItem>
                    <SignIn>
                        <NavLink to="/about" >
                            <MdAccountCircle style={{ width: 24, height: 24, marginRight: -10 }} />
                        </NavLink>
                        <NavLink to="/about" >
                            Entrar
                    </NavLink>
                    </SignIn>
                    <NavLink to="/about" >
                        <FaShoppingBag style={{ color: '#00bfdf' }} />
                    </NavLink>
                </RightItem>
            </Nav>
        </>
    )
}

export default Navbar;
