import Layout from './components/Layout/Layout'
import Auth from './components/Auth/Auth'
import Candidates from './components/Candidates/Candidates';

import {useSelector} from "react-redux"

function App() {

const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
      <Layout>
        {isAuthenticated ? <Candidates/> : <Auth/>}
      </Layout>
  );
}

export default App;
