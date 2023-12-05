import React from "react";
import { Navbar, Nav, Button, InputGroup, FormControl, Container } from 'react-bootstrap';

function TopBar() {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                    <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
                        alt="instacart logo"
                        style={{ marginRight: "20px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <InputGroup>
                        <FormControl
                            id="search-bar-input"
                            type="text"
                            placeholder="Search products and stores"
                            aria-label="Search"
                            aria-describedby="search-term-accessibility-navigation-input"
                        />
                    </InputGroup>
                    <Nav.Link 
                        href="#LogIn" 
                        style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Log In
                    </Nav.Link>                        
                    <Button 
                        variant="success">
                        Sign Up
                    </Button>{' '}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default TopBar;
