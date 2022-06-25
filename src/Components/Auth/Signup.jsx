import classes from './Auth.module.css'

const Signup = () => {
    return ( 
        <form action="" className={ classes.signupForm }>
            <div className={ classes.signupFlex }>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>

            <input type="email" placeholder='Email'/>
            <input type="tel" placeholder='Phone Number'/>
            <a href="./">I have a patner code</a>

            <button>Register</button>
        </form>
     );
}
 
export default Signup;