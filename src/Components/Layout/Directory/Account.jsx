import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import classes from './Account.module.css';
import { useState } from "react";

const Account = () => {
    const [toggleIcon, setToggleIcon] = useState(faToggleOff);
    const [toggleIconO, setToggleIconO] = useState(faToggleOff);

    const changeIcon = ()=>{
         setToggleIcon(toggleIcon === faToggleOff ? faToggleOn : faToggleOff);
    }
    const changeIconO = ()=>{
         setToggleIconO(toggleIconO === faToggleOff ? faToggleOn : faToggleOff);
    }



    return ( 
        <div className='outlet'>
            <h1>Account</h1>

            <div className={ classes.accountHeaderCon }>
                <div className={ classes.accountInDiv }>
                    <span className='blueHeading'>$0.00</span>
                    <span>Total in Real Account</span>
                    <span><FontAwesomeIcon icon={toggleIcon} onClick={ changeIcon } style={{'fontSize': '1.3rem'}}/> </span>
                </div>

                <div className={ classes.accountInDiv }>
                    <span className='blueHeading'>$0.00</span>
                    <span>Most profitable trade</span>
                    <span><FontAwesomeIcon icon={toggleIconO} onClick={ changeIconO } style={{'fontSize': '1.3rem'}}/> </span>
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