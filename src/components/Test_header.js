import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Test_header.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "./App"


function Test_header(props) {

    const { state, user } = useContext(UserContext)
    // const [isAdmin, setIsAdmin] = useState(false)

    // console.log(user)

    // useEffect(() => {
    //     fetch("http://localhost:4000/app/isAdmin", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ email: user.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsAdmin(data)
    //             console.info("data = ")
    //             console.info(data)
    //         })
    // }, [])

    // console.log("isAdmin = ")
    // console.log(isAdmin)


    return (
        <>
            {console.log(props)}
            {console.log("user Id = ", props.passUserData._id)}
            {console.log("user email = ", props.passUserData.email)}

            {
                console.log(`printing state = ${state}`)
            }
            <div className='header'>
                {console.log({ "printing header logic": props.passUserData })}
                {state ?
                    <div>
                        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='mb-5'>
                            <Container>
                                <NavLink to='/' style={{ textDecoration: 'none' }}>
                                    <Navbar.Brand href="#home">Protirodh</Navbar.Brand>

                                </NavLink>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto ">
                                        <Nav.Item>
                                            <NavLink to='/' style={{ textDecoration: 'none' }}>
                                                <Nav.Link href="#home">Home</Nav.Link>
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <NavLink to='/profile' style={{ textDecoration: 'none' }}>
                                                <Nav.Link href="#Profile">Profile</Nav.Link>

                                            </NavLink>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <NavLink to='/logout' style={{ textDecoration: 'none' }}>
                                                <Nav.Link href="#LogOut">Logout</Nav.Link>

                                            </NavLink>
                                        </Nav.Item>
                                        {user.isAdmin &&
                                            <Nav.Item>
                                                <NavLink to='/listOfUsers' style={{ textDecoration: 'none' }}>
                                                    <Nav.Link href="#Registered List">Registered List</Nav.Link>

                                                </NavLink>
                                            </Nav.Item>

                                        }


                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    :
                    <div>
                        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='mb-5'>
                            <Container>
                                <NavLink to='/' style={{ textDecoration: 'none' }}>
                                    <Navbar.Brand href="#home">Protirodh</Navbar.Brand>

                                </NavLink>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto ">
                                        <Nav.Item>
                                            <NavLink to='/' style={{ textDecoration: 'none' }}>
                                                <Nav.Link href="#home">Home</Nav.Link>
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <NavLink to='/registration' style={{ textDecoration: 'none' }}>
                                                <Nav.Link href="#registration">Registration</Nav.Link>
                                            </NavLink>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <NavLink to='/login' style={{ textDecoration: 'none' }}>
                                                <Nav.Link href="#LogIn">Login</Nav.Link>
                                            </NavLink>
                                        </Nav.Item>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                }

            </div>
        </>
    )
}

export default Test_header