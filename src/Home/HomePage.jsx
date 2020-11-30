import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './HomePage.scss';

export default function HomePage(){

    return(
        <Row className='home'>
            <Col sm='7'>
                <span className='bigFont'>Hi</span>,my name <br/>
                is <span className='bigFont'>Arek</span><br/>
                <span>Fullstack Developer</span>
            </Col>
            <Col sm='5'>
                LOGO
            </Col>
        </Row>
    )
}