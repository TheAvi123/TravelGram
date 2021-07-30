import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar.js';
import TitleBar from '../TitleBar.js';

const useStyles = makeStyles({
	layout: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
	},
  content: {
    flexGrow: 1
  }
});

const Layout = props => {

  const classes = useStyles();
  const url = useLocation();
  const isAuth = url.pathname.includes('login') || url.pathname.includes('register')
  
  return (
    <div className={classes.layout}>
      {/* {!isAuth && <TitleBar/>} */}
      {!isAuth && <NavBar/>}
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;