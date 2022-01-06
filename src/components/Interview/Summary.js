import React, { useState } from 'react'
import {useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

import classes from './Summary.module.css'



const Summary = () => {
    const {state} = useLocation()


    const selectedSkills = state.state.selectedSkills
    const selectedQuestions = state.state.selectedQuestions
    const [selectedQuestionsState, setSelectedQuestionsState] = useState(selectedQuestions)
    console.log("summary selectedQuestions: ", selectedQuestions)

    const [badAnswers, setBadAnswersCounter] = useState(0)
    const [notFullyAnswers, setNotFullyAnswers] = useState(0)
    const [goodAnswers, setGoodAnswers] = useState(0)
    const [veryGoodAnswers, setVeryGoodAnswers] = useState(0)



    const clickHandeler = (ans, index)=>{
        //update candidate answer
    }


    console.log(badAnswers);
    const skills = selectedSkills.map((skill,index) => <li key={index}>{skill}</li>)
    const questionAnswerElements = selectedQuestionsState.map((current,index) => {
        return (
            <div key={index} className={classes.Container}>
                <p>{current.question}</p>
                <p>{current.answer}</p>
                <div className={classes.ButtonContainer}>
                    <button  onClick={(e)=>{clickHandeler("Bad answer", index)}}>Bad answer</button>
                    <button  onClick={(e)=>{clickHandeler("Bad answer", index)}}>Not fully understand this answer</button>
                    <button  onClick={(e)=>{clickHandeler("Bad answer", index)}}>Good answer</button>
                    <button  onClick={(e)=>{clickHandeler("Bad answer", index)}}>Very good answer</button>
                </div>
            </div>
        )
    })


    return (
        <div className={classes.Summary}>
            <div className={classes.SkillsContainer}>
                <h1>Selected skills:</h1>
                <ul>{skills}</ul>
            </div>   
            {questionAnswerElements}
        </div>
    )
}

export default Summary
