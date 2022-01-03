import React, {useEffect, useState} from 'react'

import { useLocation, useNavigate } from 'react-router-dom';

import classes from "./PreparationTime.module.css"

const PreparationTime = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
    const [minutes, setMinutes] = useState(1)
    
    useEffect(() => {
       const id = window.setInterval(() => {
            setMinutes(minutes => minutes - 1)
        }, 1000)
        if(minutes === 0) {
            window.clearInterval(id)
            navigate("/summary", {state: {state}})
        }
        return () => window.clearInterval(id)
    }, [minutes, navigate, state])

    return (
        <div className={classes.PreparationTime}>
            <h1>Preparation Stage:</h1>
            <div className={classes.Timer}>{minutes}</div>
        </div>
    )
}

export default PreparationTime
