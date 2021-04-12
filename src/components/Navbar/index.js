import React from 'react'
import { Nav, NavLink, LeftItem, CenterItem, RightItem, SignIn } from './NavbarElements';
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
                        <img src="./images/logo.jpg" alt="" style={{width: 150}} />
                    </NavLink>

                    <NavLink style={{ marginLeft: 20 }} to="/about">
                        <GiHamburgerMenu style={{ marginRight: -10 }} />
                    </NavLink>
                    <NavLink to="/about">
                        Categorias
                </NavLink>

                </LeftItem>
                <CenterItem to="/about" >
                    <input type="text" placeholder="O que você procura..." name="search" style={{ width: 400, padding: '1rem' }} />
                    <button style={{ position: 'absolute', right: 0, top: 6, border: 'none', background: 'transparent' }}>
                        <AiOutlineSearch style={{ width: 22, height: 22 }} />
                    </button>
                </CenterItem>
                <RightItem>
                    <SignIn>
                        <NavLink to="/about" >
                            <MdAccountCircle style={{ width: 20, height: 20, marginRight: -10 }} />
                        </NavLink>
                        <NavLink to="/about" >
                            Entrar
                    </NavLink>
                    </SignIn>
                    <NavLink to="/about" >
                        <FaShoppingBag />
                    </NavLink>
                </RightItem>
            </Nav>
        </>
    )
}

export default Navbar;
