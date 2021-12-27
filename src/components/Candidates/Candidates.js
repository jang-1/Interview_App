import React, {useState} from 'react'
import {useSelector} from "react-redux"
import Candidate from './Candidate'

import ReactPaginate from "react-paginate";

import classes from "./Candidates.module.css"

const Candidates = () => {
    const candidates = useSelector(state => state.candidates.candidates)

    const [search, setSearch] = useState("")
    const [pageNumber, setPageNumber] = useState(0);

    const candidatesPerPage = 2;
    const visitedPages = pageNumber * candidatesPerPage;

    const inputChangeHandler = (event) => {
        setSearch(event.target.value)
    }
  
    const displayCandidates = candidates
        .filter(candidate => {
            if(search == ""){
                return candidate
            } else if (
                candidate.firstName.toLowerCase().includes(search.toLowerCase()) 
            ||  candidate.lastName.toLowerCase().includes(search.toLowerCase())
            ||  candidate.primarySkill.toLowerCase().includes(search.toLowerCase()) ){
                return candidate
            }
        })
        .slice(visitedPages, visitedPages + candidatesPerPage)
        .map((candidate) =>
        <Candidate
            key={candidate.id}
            firstName={candidate.firstName} 
            lastName={candidate.lastName} 
            primarySkill={candidate.primarySkill} 
            moreSkills={candidate.moreSkills} 
        />
     );

     const pageCount = Math.ceil(candidates.length / candidatesPerPage);
     const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className={classes.Candidates}>
            <input
                className={classes.SearchBar}
                type="text"
                placeholder='Search...'
                onChange={inputChangeHandler}
            />
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
