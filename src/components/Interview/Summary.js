import React, { useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'

import classes from './Summary.module.css'



const Summary = () => {
    const {state} = useLocation()

    const navigate = useNavigate()


    const selectedSkills = state.state.selectedSkills
    const selectedQuestions = state.state.selectedQuestions
    const [selectedQuestionsState, setSelectedQuestionsState] = useState(selectedQuestions)


    const clickHandeler = (ans, index) => {
        const selectedQuestionsTemp = [...selectedQuestionsState]

        selectedQuestionsTemp[index].candidateAnswer = ans;
        setSelectedQuestionsState(selectedQuestionsTemp)
    }

    let badAnswersTemp = 0
    let notFullyAnswersTemp = 0
    let goodAnswersTemp = 0
    let veryGoodAnswersTemp = 0

    selectedQuestionsState.forEach((current, i) => {
        if(current.candidateAnswer === "Bad answer") {
            badAnswersTemp++
        } else if(current.candidateAnswer === "Not fully understand this answer"){
            notFullyAnswersTemp++
        } else if(current.candidateAnswer === "Good answer"){
            goodAnswersTemp++
        } else if(current.candidateAnswer === "Very good answer"){
            veryGoodAnswersTemp++
        }
        
    })

   const result = {
        badAnswers:badAnswersTemp,
        notFullyAnswers:notFullyAnswersTemp,
        goodAnswers:goodAnswersTemp,
        veryGoodAnswers:veryGoodAnswersTemp,
   }


    const skills = selectedSkills.map((skill,index) => <li key={index}>{skill}</li>)
    const questionAnswerElements = selectedQuestionsState.map((current,index) => {
        return (
            <div key={index} className={classes.Container}>
                <p>{current.question}</p>
                <p>{current.answer}</p>
                <div className={classes.ButtonContainer}>
                    <button  onClick={()=>{clickHandeler("Bad answer", index)}}>Bad answer</button>
                    <button  onClick={()=>{clickHandeler("Not fully understand this answer", index)}}>Not fully understand this answer</button>
                    <button  onClick={()=>{clickHandeler("Good answer", index)}}>Good answer</button>
                    <button  onClick={()=>{clickHandeler("Very good answer", index)}}>Very good answer</button>
                </div>
            </div>
        )
    })

    const submitHandler = () => {
        navigate('/summary/finalResult', {state:result })
    }


    return (
        <div className={classes.Summary}>
            <div className={classes.SkillsContainer}>
                <h1>Selected skills:</h1>
                <ul>{skills}</ul>
            </div>   
            {questionAnswerElements}
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Summary
