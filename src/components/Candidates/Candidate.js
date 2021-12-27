import React from 'react'

import classes from "./Candidate.module.css"

const Candidate = ({firstName, lastName, primarySkill, moreSkills}) => {

    const listOfSkills = moreSkills.map((skill,i) => (
            <li key={i}>{skill}</li>
    ))

    return (
        <div className={classes.Candidate}>
            <div className={classes.Container}>
                <h2>First Name and Last Name:</h2>
                <div className={classes.Name}>{firstName} {lastName}</div>
            </div>
            <div className={classes.Container}>
                <h2>Primary Skill:</h2>
                <div className={classes.PrimarySkill}>{primarySkill}</div>
            </div>
            <div className={classes.Container}>
                <h2>More Skills:</h2>
                <ul>
                    {listOfSkills}
                </ul>
            </div>
        </div>
    )
}

export default Candidate
