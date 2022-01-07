import { useSelector, useDispatch } from 'react-redux'; 
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom'

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  const backToCandidatesHandler = () => {
    navigate("/")
  }

  return (
    <header className={classes.Header}>
      <h1 onClick={backToCandidatesHandler}>Interview App</h1>
      <nav>
            {isAuthenticated && <button onClick={logoutHandler}>Logout</button> }
      </nav>
    </header>
  );
};

export default MainHeader;