import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from './Switch';
import { Row, Col, Image } from 'react-bootstrap';
import Drumpad from './Drumpad';

const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #f00 0%, #0f0 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #fff 40%, #fff 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.div`
background-color: #fff;
box-shadow: 8px 8px 5px 5px rgba(0, 0, 0, 0.2);
max-width: 80%;
justify-content: center;
margin-top: 5% !important;
margin: auto;
text-align: center;
border-radius: 1rem;
`;

const Header = styled.header`
box-shadow: 2px 4px 2px 5px rgba(255, 255, 255, 0.2);
background: lightsteelblue;
`;

const Tune = styled.div`
padding: 1rem;
span{
background: grey;
width: 100%;
padding: 1rem;
}
`

const DrumMachine = () => {

  const [switchb, setSwitch] = useState(false);
  const [track, setTrack] = useState(false);
  const [svalue, setValue] = useState(50);
  const [dvolume, setDrumVolume] = useState(0.5);
  const [tune, setTune] = useState();

  const changeVol = (event) => {
    setValue(event.target.value);
    if (svalue === 0)
      setDrumVolume(0.0);
    else if (svalue > 0 && svalue <= 10)
      setDrumVolume(0.1);
    else if (svalue > 10 && svalue <= 20)
      setDrumVolume(0.2);
    else if (svalue > 20 && svalue <= 30)
      setDrumVolume(0.3);
    else if (svalue > 30 && svalue <= 40)
      setDrumVolume(0.4);
    else if (svalue > 40 && svalue <= 50)
      setDrumVolume(0.5);
    else if (svalue > 50 && svalue <= 60)
      setDrumVolume(0.6);
    else if (svalue > 60 && svalue <= 70)
      setDrumVolume(0.7);
    else if (svalue > 70 && svalue <= 80)
      setDrumVolume(0.8);
    else if (svalue > 10 && svalue <= 20)
      setDrumVolume(0.9);
    else
      setDrumVolume(1.0);
  };

  const tuneName = (tune) => {
    setTune(tune);
  };

  return (
    <>
      <Header className="text-center p-3 text-white fw-bold fs-1">DRUM-MACHINE</Header>
      <Container className="p-5">
        <Row>
          <Col className="mt-2 mb-2" sm="12" md="6">
            {
              switchb === true ?
                <Drumpad activeTrack={track ? "trackTwo" : "trackOne"} vol={dvolume} tuneValue={tuneName} /> :
                (<>
                  <Image className="w-50 border" src="../image.png" rounded />
                  <p className="fw-bold">Power On please!</p>
                </>)
            }
          </Col>
          <Col className="mt-2" sm="12" md="6">
            <Row>
              <Switch switchType="Power" onChange={(event) => { setSwitch(event.target.checked); setTune();}} />
            </Row>
            <Row>
              <Switch switchType="Track" onChange={(event) => { setTrack(event.target.checked); console.log(track) }} />
            </Row>
            <Row className="mt-3">
              <Col sm="12" md="4" className="ms-auto">
                <p>Volume </p>
              </Col>
              <Col sm="12" md="8" className="">
                <Slider value={svalue} onChange={changeVol} />
              </Col>
            </Row>
            <Row>
              <Tune>
                <span>{tune}</span>
              </Tune>
            </Row>
            <Row>
              <Col className="text-secondary mt-3">
                <h4>Made By:  </h4>
                <p>Rohit Bhardwaj</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DrumMachine;
