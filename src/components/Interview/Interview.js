import React, {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';

import classes from './Interview.module.css'

const Interview = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const params = useParams()

    const [selectedSkills, setSelectedSkills] = useState([])

    const candidates = useSelector(state => state.candidates.candidates)
    const skills = [...candidates[state - 1].moreSkills];
    const primarySkill = candidates[state - 1].primarySkill;
    skills.unshift(primarySkill)

    const selectHandler = (e) => {
        const tempArr = [...selectedSkills];
        const name = e.target.name
        const checked = e.target.checked;

        if(tempArr.includes(name) && !checked) {
            const index = tempArr.indexOf(name)
            tempArr.splice(index, 1)
            setSelectedSkills(tempArr)
        }  else {
            tempArr.push(name)
            setSelectedSkills(tempArr)
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
        if(selectedSkills.length === 0) {
            alert("You have to select skills")
            return
        } else {
            navigate(`/${params.candidateProfile}/interview/questions`, {state:selectedSkills })
        }

    }

    return (
        <div className={classes.Interview}>
            <h1>Select skills:</h1>
            {allSkills}
            <button className={classes.Submit} onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Interview
