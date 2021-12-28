import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CandidateProfile = () => {
    const params = useParams()
    const candidates = useSelector(state => state.candidates.candidates)
    const candidate = candidates[params.candidateProfile - 1];

    return (
        <div>
            {candidate.firstName}
        </div>
    )
}

export default CandidateProfile
