import React from 'react'
import {useSelector} from "react-redux"
import Candidate from './Candidate'

import classes from "./Candidates.module.css"

const Candidates = () => {
    const candidates = useSelector(state => state.candidates.candidates)

    const candidatesList = candidates.map((candidate) =>
     <Candidate
        key={candidate.id}
        firstName={candidate.firstName} 
        lastName={candidate.lastName} 
        primarySkill={candidate.primarySkill} 
        moreSkills={candidate.moreSkills} 
    />)

    return (
        <div className={classes.Candidates}>
            {candidatesList}
        </div>
    )
}

export default Candidates
