import React, {useEffect, useState} from 'react'

import { useLocation, useNavigate } from 'react-router-dom';

const PreparationTime = () => {
    const {state} = useLocation();

    const [minutes, setMinutes] = useState(30)
    
    useEffect(() => {
       const id = window.setInterval(() => {
            setMinutes(minutes => minutes - 1)
        }, 1000)
        if(minutes === 0) {
            window.clearInterval(id)
            console.log("hi");
        }
        return () => window.clearInterval(id)
    },[minutes])

    return (
        <div>
            <h1>Preparation Stage: Wait 30 minutes!</h1>
            {minutes}
        </div>
    )
}

export default PreparationTime
