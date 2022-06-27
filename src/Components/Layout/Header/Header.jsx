import classes from './Header.module.css';
import Logo from '../../../Assets/staticlogo.png'

const Header = () => {
    return ( 
        <header className={ classes.header }>
            <img src={ Logo } alt="" className={ classes.headerImg } width= '100%'/>

            <nav>
                <span>Home</span>

                <p className={ classes.innerFlexCol }>
                    <span>Total Balance</span>
                    <span>$0.00</span>
                </p>
                <span>Circle</span>
                <span>Inbox</span>

                <div className={ classes.innerFlexCol }>
                    <span>Earl Pappi</span>
                    <span>Verified</span>

                </div>
            </nav>
            

        </header>
     );
}
 
export default Header;
<header>

</header>