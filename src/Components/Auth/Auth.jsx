import Logo from '../../Assets/staticlogo.png';
import classes from './Auth.module.css';
import BgImg from '../../Assets/findashBackground.jpg'
import { Outlet, Link } from 'react-router-dom';
const Auth = () => {
    return (
        <div>

            <div className={classes.authWrapper}>
                <div className={ classes.formCon }>
                    <img src={Logo} alt="" width='50%' />
                    <nav>
                        <Link to="/auth/login">Sign In</Link>
                        <Link to="/auth/signup">Register</Link>
                    </nav>
                    <Outlet />
                </div>
                <div>
                    <img src={BgImg} alt="" width='100%' height='100%'/>
                </div>

            </div>

        </div>
    );
}

export default Auth;