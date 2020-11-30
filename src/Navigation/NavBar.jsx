import React from "react";
import { useState } from "react";
import { Row,Col } from "react-bootstrap";
import Logo from "./Logo";
import "./NavBar.scss";
import NavItem from "./NavItem";

export default function NavBar() {
    const [active, setActive] = useState(1);

    return (
        <Row className="fluid navbar">
            <Col style={{width:'50%'}}>
                <Logo />
            </Col>
            <Col style={{width:'50%'}}>
                <div className="rightned">
                    <NavItem title="O mnie" />
                    <NavItem title="Projekty" />
                    <NavItem title="Kontakt" />
                </div>
            </Col>
        </Row>
    );
}
