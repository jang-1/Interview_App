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
            moreSkills: ['NodeJs', 'jQuery', 'Java']
        },
        {
            id:2,
            firstName: 'Matthew',
            lastName: 'Nowak',
            primarySkill: 'VueJS',
            moreSkills: ['NodeJs', 'SQL', 'C']
        },
        {
            id:3,
            firstName: 'Ferne',
            lastName: 'Dunkley',
            primarySkill: 'AngularJS',
            moreSkills: ['SQL', 'C++', 'Python']
        },
        {
            id:4,
            firstName: 'Abby',
            lastName: 'Southern',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
        },
        {
            id:5,
            firstName: 'Ferne',
            lastName: 'King',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
        },
        {
            id:6,
            firstName: 'Maleeha ',
            lastName: 'Lake',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
        },
        {
            id:7,
            firstName: 'Agnes ',
            lastName: 'Padilla',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
        },
        {
            id:8,
            firstName: 'Scarlett ',
            lastName: 'Fischer',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
        },
        {
            id:9,
            firstName: 'Chay',
            lastName: 'Flores',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
        },
        {
            id:10,
            firstName: 'Annaliese ',
            lastName: 'Hull',
            primarySkill: 'jQuery',
            moreSkills: ['ReactJS', 'NodeJS', 'C#']
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