import React, { useState } from 'react'
import MyTimer from './MyTimer';
import styled from 'styled-components'
import { Col, Row, Button, Card } from 'react-bootstrap';
import * as FaIcon from 'react-icons/fa';

const Container = styled.div`
background-color: #fff;
box-shadow: 8px 8px 5px 5px rgba(0, 0, 0, 0.2);
max-width: 80%;
justify-content: center;
margin-top: 5% !important;
margin: auto;
text-align: center;
border-radius: 1rem;
padding: 1rem;
`;

const Header = styled.header`
box-shadow: 2px 4px 2px 5px rgba(255, 255, 255, 0.2);
background: lightsteelblue;
`;

const StopWatch = () => {

    const [typeTime, setType] = useState('session');
    const [sessiontime, setSession] = useState(1);
    const [breaktime, setBreak] = useState(1);
    const [autostart, setAutoStart] = useState(false);

    const time1 = new Date();
    time1.setSeconds(time1.getSeconds() + sessiontime * 60);

    const handleIncrement = (val) => {
        if (val === 'session') {
            if (sessiontime < 60) {
                setSession(sessiontime + 1);
                setAutoStart(false);
            }
        }
        else {
            if (breaktime < 60) {
                setBreak(breaktime + 1);
                setAutoStart(false);
            }
        }
    }

    const handleDecrement = (val) => {
        if (val === 'session') {
            if (sessiontime > 1) {
                setSession(sessiontime - 1);
                setAutoStart(false);
            }
        }
        else {
            if (breaktime > 1) {
                setBreak(breaktime - 1);
                setAutoStart(false);
            }
        }
    }

    console.log(time1);
    return (
        <>
            <Header className="text-center p-3 text-white fw-bold fs-1">Countdown Timer</Header>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Session</Card.Title>
                                <Button variant="outline-success" onClick={() => handleIncrement('session')}><FaIcon.FaPlus /></Button>
                                <span className="m-3" border="dark">{sessiontime}</span>
                                <Button variant="outline-danger" onClick={() => handleDecrement('session')}><FaIcon.FaMinus /></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <span className="text-center fs-1 fw-bold">{typeTime.toUpperCase()} TIME</span>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Break</Card.Title>
                                <Button variant="outline-success" onClick={() => handleIncrement('break')}><FaIcon.FaPlus /></Button>
                                <span className="m-3">{breaktime}</span>
                                <Button variant="outline-danger" onClick={() => handleDecrement('break')}><FaIcon.FaMinus /></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MyTimer key={typeTime + sessiontime} sessiontime={time1} typeVal={setType} typeTime={typeTime} autostart={autostart} setAutoStart={setAutoStart} resettime={sessiontime} breaktime={breaktime} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StopWatch
