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

    const tempArr = []
    questions.forEach((item) => {
        if(item.skill === state[0] || item.skill === state[1] || item.skill === state[2] || item.skill === state[3]) {
            tempArr.push(item.questions)
        }
        return tempArr
    })

    const selectHandler = (e) => {
        const tempArr = [...selectedQuestions];
        const name = e.target.name
        const checked = e.target.checked;

        if(tempArr.includes(name) && !checked) {
            const index = tempArr.indexOf(name)
            tempArr.splice(index, 1)
            setSelectedQuestions(tempArr)
        }  else {
            tempArr.push(name)
            setSelectedQuestions(tempArr)
        }
    }

    const questionList = tempArr.map((question,i) => (
        question.map((item,index) => {  
            return(   
                <label className={classes.Item}  key={index+i+1}>{item}
                    <input type="checkbox" name={item} onChange={selectHandler} />
                </label>
            ) 
        })
        ))

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
