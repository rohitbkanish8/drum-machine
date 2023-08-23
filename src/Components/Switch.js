import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Wrapper = styled.label`
position: relative;

`;

const SlideBar = styled.span`
display: flex;
cursor: pointer;
width: 4rem;
height: 2rem;
border-radius: 2rem;
background-color: #f00;
position: relative;
transition: background-color .2s;
border: .2rem solid #fff;
box-shadow: 2px 4px 4px 0 grey;

&: before {
    content: "";
    position: absolute;
    top: .05rem;
    left: .15rem;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 1rem;
    transition: .2s;
    background: #fff;
    box-shadow: 3px 0 3px 0 black;
}
`;

const Input = styled.input`
position: absolute;
left: -9999px;
top: -9999px;

&:checked + span {
    background-color: #0f0;

    &:before {
        left: 2rem;
    }
}
`;

const Switch = (props) => {
    return (
        <Wrapper>
            <Row>
                <Col className="mt-1">
                    <p>{props.switchType}</p>
                </Col>
                <Col>
                    <Input type="checkbox" onChange={props.onChange} />
                    <SlideBar />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Switch
