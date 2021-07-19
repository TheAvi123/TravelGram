import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';

const Layout = props => {
  const url = useLocation();
  const isAuth = url.pathname.includes('login') || url.pathname.includes('register')
  
  return (
    <div className="App">
      {isAuth ? <></> : <NavBar />}
      {props.children}
    </div>
  )
}

export default Layout;


