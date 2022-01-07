import Layout from './components/Layout/Layout'
import Auth from './components/Auth/Auth'
import Candidates from './components/Candidates/Candidates';
import CandidateProfile from './components/Candidates/CandidateProfile';
import Interview from './components/Interview/Interview';
import Questions from './components/Interview/Questions';
import PreparationTime from './components/Interview/PreparationTime';
import Summary from './components/Interview/Summary';
import FinalResult from './components/Interview/FinalResult';
import AddCandidate from './components/Candidates/AddCandidate';


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
          <Route path="/addCandidate" element={isAuthenticated ? <AddCandidate/> :  <Navigate to="/"/>}/>
          <Route path="/:candidateProfile" element={isAuthenticated ? <CandidateProfile /> : <Navigate to="/"/>}/>
          <Route path="/:candidateProfile/interview" element={isAuthenticated ? <Interview /> : <Navigate to="/"/>}/>
          <Route path="/:candidateProfile/interview/questions" element={isAuthenticated ? <Questions /> : <Navigate to="/"/>}/>
          <Route path="/:candidateProfile/interview/questions/preparationTime" element={isAuthenticated ? <PreparationTime /> : <Navigate to="/"/>}/>
          <Route path="/summary" element={isAuthenticated ? <Summary /> : <Navigate to="/"/>}/>
          <Route path="/summary/finalResult" element={isAuthenticated ? <FinalResult /> : <Navigate to="/"/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
