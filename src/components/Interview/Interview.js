import React, {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';

import classes from './Interview.module.css'

const Interview = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const params = useParams()

    const [selectSkills, setSelectSkills] = useState([])

    const candidates = useSelector(state => state.candidates.candidates)
    const skills = [...candidates[state - 1].moreSkills];
    const primarySkill = candidates[state - 1].primarySkill;
    skills.unshift(primarySkill)

    const selectHandler = (e) => {
        const tempArr = [...selectSkills];
        const name = e.target.name
        const checked = e.target.checked;

        if(tempArr.includes(name) && !checked) {
            const index = tempArr.indexOf(name)
            tempArr.splice(index, 1)
            setSelectSkills(tempArr)
        }  else {
            tempArr.push(name)
            setSelectSkills(tempArr)
        }
    }

    const allSkills = skills.map((skill, index) =>{
        return (
            <label className={classes.Item} key={index} htmlFor={skill}>{skill}
                <input type="checkbox" id={skill} name={skill}  onChange={selectHandler}/>
            </label>
        )
    })

    const submitHandler = () => {
        if(selectSkills.length === 0) {
            alert("You have to select skills")
            return
        } else {
            navigate(`/${params.candidateProfile}/interview/questions`, {state:selectSkills })
        }

    }

    return (
        <ul className={classes.Interview}>
            <h1>Select skills:</h1>
            {allSkills}
            <button className={classes.Submit} onClick={submitHandler}>Submit</button>
        </ul>
    )
}

export default Interview
