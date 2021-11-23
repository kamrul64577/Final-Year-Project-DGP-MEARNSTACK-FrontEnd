import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Navigation.css'
import logo from "../../../images/freeLogo.png"
const Navigation = () => {

    const { user, logOut } = useAuth()


    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>

                    <Navbar.Brand href="#home" ><img className="img-fluid" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-ul">

                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/">হোম</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/services">সেবাসমূহ</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/dashboard">ড্যাশবোর্ড </NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/event">স্পোর্টস ইভেন্ট </NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/about-us">আমাদের সম্পর্কে</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/contact-us">যোগাযোগ</NavLink>
                        </Nav>
                        <Nav className=" ">

                            {user.email && <Button className="text-light  " onClick={logOut}><h6>লগআউট</h6></Button>}
                            {!user.email && <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/login" >লগইন</NavLink>}
                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Login</NavLink>  */}

                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Logout</NavLink> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
};

export default Navigation;