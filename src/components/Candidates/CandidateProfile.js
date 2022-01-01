import React from 'react'
import { useSelector } from 'react-redux'

import { useParams, useNavigate } from 'react-router-dom'

import User from "../../assets/user.png"
import classes from './CandidateProfile.module.css'

const CandidateProfile = () => {
    const params = useParams()
    const navigate = useNavigate();
    const candidates = useSelector(state => state.candidates.candidates)
    const candidate = candidates[params.candidateProfile - 1];

    const listOfSkills = candidate.moreSkills.map((skill,i) => (
        <li key={i}>{skill}</li>
))

    const moveToInterviewHandler = () => {
        navigate(`/${params.candidateProfile}/interview`, {state:params.candidateProfile })
    }

    return (
        <div className={classes.ProfileContainer}>
            <div className={classes.MainContainer}>
                <img src={User} alt="user" />
                <div className={classes.InfoContainer}>
                    <label><strong>Email:</strong> {candidate.email}</label>
                    <label><strong>Phone:</strong> {candidate.phone}</label>
                    <label><strong>Education:</strong> {candidate.education}</label>
                    <label><strong>Hobby:</strong> {candidate.hobby}</label>
                </div>
            </div>
            <div className={classes.Container}>
                    <label><strong>Name:</strong> {candidate.firstName} {candidate.lastName}</label>
                    <label><strong>Date of Birth:</strong> {candidate.dateOfBirth}</label>
                    <label><strong>Primary Skill:</strong> {candidate.primarySkill}</label>
                    <label><strong>More Skills:</strong> <ul>{listOfSkills}</ul></label>
                    <label><strong>Projects:</strong> {candidate.projects}</label>

                    <button onClick={moveToInterviewHandler}>Start Interview</button>
            </div>
        </div>
    )
}

export default CandidateProfile
