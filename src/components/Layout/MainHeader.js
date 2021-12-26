import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.Header}>
      <h1>Recruitment Project</h1>
      <nav>
        <ul>
          <li>
            {/* <button>Login</button> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;