import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';

class Navigation extends React.Component {
    state = {
        isOpen: false
    };

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
        return (
            <Navbar dark color="dark" expand="md" className="mb-2">
                <Container>
                    <NavbarBrand to="/" tag={RouterNavLink} >Pantry</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink to="/new" tag={RouterNavLink}>Nowy produkt</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/shopping-list" tag={RouterNavLink}>Lista zakupów</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/settings" tag={RouterNavLink}>Ustawienia</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;