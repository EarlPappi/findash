import classes from './Auth.module.css'
const Login = () => {
    return (
        <form action="" className={classes.loginForm}>
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />

            <div className={ classes.flexit }>
                <input type="checkbox" /><p>Remember Me</p>
            </div>

            <div className={ classes.flexit }>
                <a href="./">Forget Password?</a>
                <a href="./">Couldn't Confirm Email?</a>
            </div>

            <button>Sign In</button>
        </form>
    );
}

export default Login;