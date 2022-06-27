import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faHouse, faShare } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    return ( 
        <div className={ classes.sideBar }>

            <Link to='/account'> <FontAwesomeIcon icon={ faHouse }/> Account</Link>

            <span>FINANCES</span>
            <Link to='/deposit'><FontAwesomeIcon icon={ faSave }/> Deposit</Link>
            <Link to='/internal-transfer'><FontAwesomeIcon icon={ faShare }/> Internal Transfer</Link>
            <Link to='/withdraw'><FontAwesomeIcon icon={ faSave }/> Withdraw</Link>
            <Link to='/payments'><FontAwesomeIcon icon={ faSave }/> Payments</Link>

            <span>PARTNERSHIP</span>
            <Link to='/partnership'><FontAwesomeIcon icon={ faSave }/> Partnership</Link>
            <Link to='/dashboards'><FontAwesomeIcon icon={ faSave }/> Dashboards</Link>

            <span>ARTICLES</span>
            <Link to='/calendar'><FontAwesomeIcon icon={ faSave }/> Calendar</Link>

            <span>ARTICLES</span>
            <Link to='/files-to-download'><FontAwesomeIcon icon={ faSave }/> Files to Download</Link>
            
            <span>BONUSES</span>
            <Link to='/all-bonuses'><FontAwesomeIcon icon={ faSave }/> All bonuses</Link>
            <Link to='/my-bonuses'><FontAwesomeIcon icon={ faSave }/> My bonuses</Link>
            <Link to='/'></Link>
            
        </div>
     );
}
 
export default Sidebar;