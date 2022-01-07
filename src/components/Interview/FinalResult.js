import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import classes from './FinalResult.module.css'

const FinalResult = () => {

    const {state} = useLocation()
    const navigate = useNavigate()
    const submitHandler = () => {
        navigate("/")
    }

    return (
        <div className={classes.ResultContainer}>
            <h1 className={classes.Result}>Final Results:</h1>
            <section className={classes.Container}>
                <h1>Bad answers:</h1>
                <h2>{state.badAnswers}</h2>
            </section>
            <section className={classes.Container}>
                <h1>Not fully understanded answers:</h1>
                <h2>{state.notFullyAnswers}</h2>
            </section>
            <section className={classes.Container}>
                <h1>Good answers:</h1>
                <h2>{state.goodAnswers}</h2>
            </section>
            <section className={classes.Container}>
                <h1>Very good answers:</h1>
                <h2>{state.veryGoodAnswers}</h2>
            </section>

            <button className={classes.Button} onClick={submitHandler}>Finish Interview</button>
        </div>
    )
}

export default FinalResult
