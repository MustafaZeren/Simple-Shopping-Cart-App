import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Shopping Cart App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                        </Nav>
                        <NavbarText>Thanks for this app :)</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
