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
            moreSkills: ['NodeJS', 'jQuery', 'Java'],
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
            moreSkills: ['NodeJS', 'SQL', 'C'],
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
    reducers: {
        add(state, action) {
            state.candidates.push(action.payload)
        },
    }
})

const initialQuestionsState = {
    questions: [
        {
            id:1,
            skill: "ReactJS",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:2,
            skill: "AngularJS",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:3,
            skill: "VueJS",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:4,
            skill: "jQuery",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:5,
            skill: "NodeJS",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:6,
            skill: "SQL",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:7,
            skill: "C",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:8,
            skill: "C++",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:9,
            skill: "C#",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:10,
            skill: "Python",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
        {
            id:11,
            skill: "Java",
            questions: ["1","2","3","4","5"],
            tips: ["1","2","3","4","5"]
        },
    ]
}

const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialQuestionsState,
    reducers: {
        add(state, action) {
            state.questions.push(action.payload)
        },
    }
})

const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      candidates: candidatesSlice.reducer,
      questions: questionsSlice.reducer,  
    } 
    
})

export const authActions = authSlice.actions
export const candidatesActions = candidatesSlice.actions
export const questionsActions = questionsSlice.actions
export default store;