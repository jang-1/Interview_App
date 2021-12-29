import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }

})


const initialCandidatesState = {
    candidates: [
        {
            id:1,
            firstName: 'John',
            lastName: 'Doe',
            primarySkill: 'ReactJS',
            moreSkills: ['NodeJs', 'jQuery', 'Java'],
            dateOfBirth: "21.09.1990",
            hobby: "sport, music, art",
            education: "UJ",
            projects: "Calculator",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:2,
            firstName: 'Matthew',
            lastName: 'Nowak',
            primarySkill: 'VueJS',
            moreSkills: ['NodeJs', 'SQL', 'C'],
            dateOfBirth: "21.09.1991",
            hobby: "sport, music, photography",
            education: "UJ",
            projects: "To do list",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:3,
            firstName: 'Ferne',
            lastName: 'Dunkley',
            primarySkill: 'AngularJS',
            moreSkills: ['SQL', 'C++', 'Python'],
            dateOfBirth: "21.09.1992",
            hobby: "games, music, art",
            education: "UJ",
            projects: "Calculator",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:4,
            firstName: 'Abby',
            lastName: 'Southern',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],
            dateOfBirth: "21.09.1993",
            hobby: "sport, films, art",
            education: "UJ",
            projects: "Calculator",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:5,
            firstName: 'Ferne',
            lastName: 'King',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],
            dateOfBirth: "21.09.1992",
            hobby: "singing, music, art",
            education: "UJ",
            projects: "To do list",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:6,
            firstName: 'Maleeha ',
            lastName: 'Lake',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],
            dateOfBirth: "21.09.1994",
            hobby: "reading, music, art",
            education: "UJ",
            projects: "Calculator",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:7,
            firstName: 'Agnes ',
            lastName: 'Padilla',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],
            dateOfBirth: "21.09.1995",
            hobby: "sport, cooking, art",
            education: "UJ",
            projects: "To do list",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:8,
            firstName: 'Scarlett ',
            lastName: 'Fischer',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],
            dateOfBirth: "21.09.1990",
            hobby: "sport, music, art",
            education: "UJ",
            projects: "Calculator",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:9,
            firstName: 'Chay',
            lastName: 'Flores',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],
            dateOfBirth: "21.09.1991",
            hobby: "sport, music, drawing",
            education: "UJ",
            projects: "To do list",
            phone: 123456789,
            email: "test@gmail.com",
        },
        {
            id:10,
            firstName: 'Annaliese ',
            lastName: 'Hull',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#'],            
            dateOfBirth: "21.09.1990",
            hobby: "sport, music, art",
            education: "UJ",
            projects: "Calculator",
            phone: 123456789,
            email: "test@gmail.com",
        },
    ]
}

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState: initialCandidatesState,
    reducers: {}
})

const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      candidates: candidatesSlice.reducer,  
    } 
    
})

export const authActions = authSlice.actions
export default store;