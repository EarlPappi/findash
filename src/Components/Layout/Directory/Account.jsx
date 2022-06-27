import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
const Account = () => {
    return ( 
        <div>
            <h1>Account</h1>

            <div>
                <div>
                    <span>$0.00</span>
                    <span><FontAwesomeIcon icon={faToggleOff}/> Total in Real Account</span>
                    <span>$0.00</span>
                </div>

                <div>
                    <span>$0.00</span>
                    <span><FontAwesomeIcon icon={faToggleOff}/> Total in Real Account</span>
                    <span>$0.00</span>
                </div>
                
                <div>
                    <span>$0.00</span>
                    <span><FontAwesomeIcon icon={faToggleOff}/> Total in Real Account</span>
                    <span>$0.00</span>
                </div>
            </div>
        </div>
     );
}
 
export default Account;