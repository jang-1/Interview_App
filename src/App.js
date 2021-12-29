import Layout from './components/Layout/Layout'
import Auth from './components/Auth/Auth'
import Candidates from './components/Candidates/Candidates';
import CandidateProfile from './components/Candidates/CandidateProfile';
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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
