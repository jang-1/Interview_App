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