import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import classes from './Account.module.css';

const Account = () => {
    return ( 
        <div className='outlet'>
            <h1>Account</h1>

            <div className={ classes.accountHeaderCon }>
                <div className={ classes.accountInDiv }>
                    <span className='blueHeading'>$0.00</span>
                    <span>Total in Real Account</span>
                    <span><FontAwesomeIcon icon={faToggleOff}/> </span>
                </div>

                <div className={ classes.accountInDiv }>
                    <span className='blueHeading'>$0.00</span>
                    <span>Most profitable trade</span>
                    <span><FontAwesomeIcon icon={faToggleOff}/> </span>
                </div>

                <div className={ classes.accountInDiv }>
                    <span className='blueHeading' >0</span>
                    <span>Number of trades this week</span>
                </div>
            </div>
        </div>
     );
}
 
export default Account;