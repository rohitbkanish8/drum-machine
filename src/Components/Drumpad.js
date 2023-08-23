import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Drums from './Drums';
//import useSound from 'use-sound';
//import Sound from 'react-sound';

const Wrapper = styled.label`
position: relative;
box-shadow: inset 2px 0 4px #000000;
padding: 1rem;
border-radius: 1rem;
`;

const rohit = {
    trackOne:
        [
            {
                keyCode: 81,
                keyTrigger: 'q',
                id: 'Heater-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            },
            {
                keyCode: 87,
                keyTrigger: 'w',
                id: 'Heater-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            },
            {
                keyCode: 69,
                keyTrigger: 'e',
                id: 'Heater-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            {
                keyCode: 65,
                keyTrigger: 'a',
                id: 'Heater-4',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            },
            {
                keyCode: 83,
                keyTrigger: 's',
                id: 'Clap',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            },
            {
                keyCode: 68,
                keyTrigger: 'd',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            },
            {
                keyCode: 90,
                keyTrigger: 'z',
                id: "Kick-n'-Hat",
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            },
            {
                keyCode: 88,
                keyTrigger: 'x',
                id: 'Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            },
            {
                keyCode: 67,
                keyTrigger: 'c',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            }
        ],
    trackTwo:
        [
            {
                keyCode: 81,
                keyTrigger: 'q',
                id: 'Chord-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            },
            {
                keyCode: 87,
                keyTrigger: 'w',
                id: 'Chord-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            },
            {
                keyCode: 69,
                keyTrigger: 'e',
                id: 'Chord-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            },
            {
                keyCode: 65,
                keyTrigger: 'a',
                id: 'Shaker',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            },
            {
                keyCode: 83,
                keyTrigger: 's',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            },
            {
                keyCode: 68,
                keyTrigger: 'd',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            },
            {
                keyCode: 90,
                keyTrigger: 'z',
                id: 'Punchy-Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            },
            {
                keyCode: 88,
                keyTrigger: 'x',
                id: 'Side-Stick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            },
            {
                keyCode: 67,
                keyTrigger: 'c',
                id: 'Snare',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            }
        ]
};



const Drumpad = (props) => {
    // const playSound = (source) => {
    //     console.log('here');
    //     <Sound
    //         url={source}
    //         playStatus={Sound.status.PLAYING}
    //         playFromPosition={300 /* in milliseconds */}
    //     />
    // };

    return (
        <Wrapper>
            <Row>
                <h5 className="bg-warning text-uppercase">{props.activeTrack}</h5>
                {
                    rohit[props.activeTrack].map((curElem) => {
                        console.log(props.vol);
                        return (                            
                            <Col className="col-4 mb-2" key={curElem.keyCode}>
                                {/* <Button variant="secondary" size="lg" url={curElem.url} key={curElem.keyCode} id={curElem.id}>
                                    {curElem.keyTrigger}
                                </Button> */}
                                <Drums elem={curElem} tuneValue={props.tuneValue} volume={props.vol} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Wrapper>
    )
}

export default Drumpad
