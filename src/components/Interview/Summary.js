import React from 'react'
import {useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

import classes from './Summary.module.css'


const Summary = () => {
    const {state} = useLocation()


    const selectedSkills = state.state.selectedSkills
    const selectedQuestions = state.state.selectedQuestions

    const questions = useSelector(state => state.questions.questions)

    const items = questions.map((question) => {
        if(selectedSkills.includes(question.skill)) {
            return (
                <div>
                    {question.skill}
                    {selectedQuestions.every(r => question.questions.includes(r)) ? <li>{selectedQuestions}</li>: null}
                    {/* {question.tips.map(item =><li>{item}</li> )} */}
                </div>
            )
        }

        
    })
    const skills = selectedSkills.map((skill,index) => <li key={index}>{skill}</li>)

    return (
        <div className={classes.Summary}>
            <div className={classes.SkillsContainer}>
                <h1>Selected skills:</h1>
                <ul>{skills}</ul>
            </div>   
        </div>
    )
}

export default Summary
