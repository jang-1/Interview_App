import React from 'react'

import { useLocation } from 'react-router-dom';

const Questions = () => {
    const { state } = useLocation();

    return (
        <div>
            {state}
        </div>
    )
}

export default Questions
