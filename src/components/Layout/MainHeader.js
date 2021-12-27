import { useSelector, useDispatch } from 'react-redux'; 
import { authActions } from '../../store';

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.Header}>
      <h1>Recruitment Project</h1>
      <nav>
        <ul>
          <li>
            {isAuthenticated && <button onClick={logoutHandler}>Logout</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;