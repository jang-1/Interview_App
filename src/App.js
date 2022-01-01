import Layout from './components/Layout/Layout'
import Auth from './components/Auth/Auth'
import Candidates from './components/Candidates/Candidates';
import CandidateProfile from './components/Candidates/CandidateProfile';
import Interview from './components/Interview/Interview';
import Questions from './components/Interview/Questions';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import {useSelector} from "react-redux"

function App() {

const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Candidates/> : <Auth/>}/>
          <Route path="/:candidateProfile" element={isAuthenticated ? <CandidateProfile /> : <Navigate to="/"/>}/>
          <Route path="/:candidateProfile/interview" element={isAuthenticated ? <Interview /> : <Navigate to="/"/>}/>
          <Route path="/:candidateProfile/interview/questions" element={isAuthenticated ? <Questions /> : <Navigate to="/"/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
