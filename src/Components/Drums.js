import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useSound from 'use-sound';

const Drums = (props) => {

    const handleKeyPress = (event) => {
        console.log(event.key)
        if(event.key === props.elem.keyTrigger){
            props.tuneValue(props.elem.id);
            play();
        }            
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        }
    })

    console.log( props.volume);
    const [play] = useSound(props.elem.url, {volume: props.volume}); 
    return (
        <>
            <Button variant="secondary" size="lg" onClick={(e) =>{props.tuneValue(props.elem.id); play()}}>  
                {props.elem.keyTrigger.toUpperCase()}
            </Button>
        </>
    )
}

export default Drums
