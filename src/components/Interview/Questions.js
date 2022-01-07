import React, {useState} from 'react'

import { useSelector } from 'react-redux';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import classes from './Questions.module.css'

const Questions = () => {
    const { state } = useLocation();
    const params= useParams()
    const navigate= useNavigate()

    const questions = useSelector(state => state.questions.questions)
 
    const [selectedQuestions, setSelectedQuestions] = useState([])

    const questionsWithAnswers = []
    questions.forEach((item) => {
        if(item.skill === state[0] || item.skill === state[1] || item.skill === state[2] || item.skill === state[3]) {

            item.questions.forEach((elem, i)=>{
                questionsWithAnswers.push({
                    question: elem,
                    answer: item.answers[i]
                })
            })
        }
    })

    const selectHandler = (e) => {
        const tempArr = [...selectedQuestions];
        const question = e.target.name

        const selectedQuestion = {
            question: e.target.name,
            answer: e.target.getAttribute("answer"),
            candidateAnswer: null
        }
        const checked = e.target.checked;

        if(tempArr.some((element)=>{
            if(element.question === question){
                return true
            }
        }) && !checked) {
            const index = tempArr.findIndex((elem)=>{
                return elem.question === question
            })
            tempArr.splice(index, 1)
            setSelectedQuestions(tempArr)
        }  else {
            tempArr.push(selectedQuestion)
            setSelectedQuestions(tempArr)
        }
    }
    
    const questionList = questionsWithAnswers.map((current, index) => {
        
        return(
                <label className={classes.Item}  key={index+1}>{current.question}
                    <input type="checkbox" name={current.question} answer={current.answer} onChange={selectHandler} />
                </label>
        )
        })

        const submitHandler = () => {
            if(selectedQuestions.length === 0) {
                alert("You have to select questions")
                return
            } else {
                navigate(`/${params.candidateProfile}/interview/questions/preparationTime`, {state:{selectedSkills: state, selectedQuestions} })
            }
        }
        
    return (
        <div className={classes.Questions}>
            <h1>Select Questions</h1>
            {questionList}
            <button className={classes.Submit} onClick={submitHandler}>Submit Questions</button>
        </div>
    )
}

export default Questions
