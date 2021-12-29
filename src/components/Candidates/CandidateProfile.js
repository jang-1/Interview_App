import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import User from "../../assets/user.png"

import classes from './CandidateProfile.module.css'

const CandidateProfile = () => {
    const params = useParams()
    const candidates = useSelector(state => state.candidates.candidates)
    const candidate = candidates[params.candidateProfile - 1];

    const listOfSkills = candidate.moreSkills.map((skill,i) => (
        <li key={i}>{skill}</li>
))

    return (
        <div className={classes.ProfileContainer}>
            <div className={classes.MainContainer}>
                <img src={User} alt="user" />
                <div className={classes.InfoContainer}>
                    <p><strong>Email:</strong> {candidate.email}</p>
                    <p><strong>Phone:</strong> {candidate.phone}</p>
                    <p><strong>Education:</strong> {candidate.education}</p>
                    <p><strong>Hobby:</strong> {candidate.hobby}</p>
                </div>
            </div>
            <div className={classes.Container}>
                    <p><strong>Name:</strong> {candidate.firstName} {candidate.lastName}</p>
                    <p><strong>Date of Birth:</strong> {candidate.dateOfBirth}</p>
                    <p><strong>Primary Skill:</strong> {candidate.primarySkill}</p>
                    <p><strong>More Skills:</strong> <ul>{listOfSkills}</ul></p>
                    <p><strong>Projects:</strong> {candidate.projects}</p>

                    <button>Start Interview</button>
            </div>
        </div>
    )
}

export default CandidateProfile
