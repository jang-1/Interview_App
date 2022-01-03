import React, {useState} from 'react'
import {useSelector} from "react-redux"
import Candidate from './Candidate'

import ReactPaginate from "react-paginate";

import classes from "./Candidates.module.css"
import { useNavigate } from 'react-router-dom';

const Candidates = () => {
    const candidates = useSelector(state => state.candidates.candidates);
    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const [pageNumber, setPageNumber] = useState(0);

    const candidatesPerPage = 2;
    const visitedPages = pageNumber * candidatesPerPage;

    const inputChangeHandler = (event) => {
        setSearch(event.target.value)
    }

    const filteredCandidates = candidates
    .filter(candidate => {
        if(search === ""){
            return candidate
        } else if (
            candidate.firstName.toLowerCase().includes(search.toLowerCase()) 
        ||  candidate.lastName.toLowerCase().includes(search.toLowerCase())
        ||  candidate.primarySkill.toLowerCase().includes(search.toLowerCase()) ){
            return candidate
        } 
    })
  
    const displayCandidates =
        filteredCandidates
        .slice(visitedPages, visitedPages + candidatesPerPage)
        .map((candidate) =>(
        <Candidate
            key={candidate.id}
            id={candidate.id}
            firstName={candidate.firstName} 
            lastName={candidate.lastName} 
            primarySkill={candidate.primarySkill} 
            moreSkills={candidate.moreSkills} 
        />
        )
     );

     const pageCount = Math.ceil(filteredCandidates.length / candidatesPerPage);
     const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const addHandler = () => {
        navigate("/addCandidate")
    }


    return (
        <div className={classes.Candidates}>
            <div className={classes.Container}>
                <button className={classes.Button} onClick={addHandler}>Add Candidate</button>
                <input
                    className={classes.SearchBar}
                    type="text"
                    placeholder='Search...'
                    onChange={inputChangeHandler}
                />
            </div>
            {displayCandidates}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={classes.PaginationButtons}
                previousLinkClassName={classes.PreviousButtons}
                nextLinkClassName={classes.NextButton}
                disabledClassName={classes.PaginationDisabled}
                activeClassName={classes.PaginationActive}
            />
        </div>
        
    )
}

export default Candidates
