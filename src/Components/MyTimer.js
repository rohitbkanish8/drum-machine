import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import useSound from 'use-sound';

const Clock = styled.span`
font-size: 2rem;
color: #fff;
background: #59575b;
padding: 1rem;
border-radius: 1rem;
`

const MyTimer = (props) => {

    const [play] = useSound("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");

    const { sessiontime, resettime, breaktime, typeVal, typeTime, autostart, setAutoStart } = props;

    let expiry = sessiontime;
    let {
        seconds,
        minutes,
        isRunning,
        start,
        resume,
        pause,
        restart,
    } = useTimer({ expiryTimestamp: sessiontime, autoStart: autostart, onExpire: () => { console.log('hee'); setAutoStart(true); ExpireFunction(); } });

    const ExpireFunction = async () => {
        if (typeTime === 'session') {
            play();
            typeVal('break');
            const time = new Date();
            time.setSeconds(time.getSeconds() + breaktime * 60); console.log("y");
            restart(time);
        }
        else {
            play();
            typeVal('session');
            const time = new Date();
            time.setSeconds(time.getSeconds() + resettime * 60); console.log("x");
            restart(time);
        }
    };

    // const LeadingZero = (num, size) => {
    //     console.log(num);
    //     let val = num;
    //     while(num.length < size) val = '0'+val;
    //     return val;
    // }

    useEffect(() => {
        console.log("Mounted");
    }, [])

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <div className="fw-bold">
                    {console.log(minutes.toString.length) }
                    <Clock>{('0'+minutes).slice(-2)}</Clock><span className="fs-1"> : </span><Clock>{('0'+seconds).slice(-2)}</Clock>
                </div>
                {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
                {
                    console.log(minutes, seconds)
                }

                <div className="mt-3">
                    {
                        isRunning ?
                            <Button variant="outline-primary m-3" size="sm" onClick={() => {
                                const time1 = new Date();
                                time1.setSeconds(time1.getSeconds() + resettime * 60)
                                restart(time1)
                            }}>Reset</Button>
                            :
                            <Button variant="outline-primary m-3" size="sm" onClick={start}>Start</Button>
                    }

                    {
                        isRunning ?
                            <Button variant="outline-primary m-3" size="sm" onClick={pause}>Pause</Button>
                            :
                            <Button variant="outline-primary m-3" size="sm" onClick={resume}>Resume</Button>
                    }
                </div>

            </div>
        </>
    );
}

export default MyTimer