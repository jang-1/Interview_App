import MainHeader from './MainHeader.js';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main className={classes.Main}>{props.children}</main>
    </>
  );
};

export default Layout;