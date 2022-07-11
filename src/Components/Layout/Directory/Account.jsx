import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import classes from './Account.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Account = () => {
    const [toggleIcon, setToggleIcon] = useState(faToggleOff);
    const [toggleIconO, setToggleIconO] = useState(faToggleOff);
    const [showForm, setShowForm] = useState(false)

    const changeIcon = () => {
        setToggleIcon(toggleIcon === faToggleOff ? faToggleOn : faToggleOff);
    }
    const changeIconO = () => {
        setToggleIconO(toggleIconO === faToggleOff ? faToggleOn : faToggleOff);
    }

    const displayForm = () => {
        setShowForm(true);
    }

    const hideForm = () => {
        setShowForm(false);
    }

    const [accounts, setAccounts] = useState([
        {
            login: 4991924,
            account_type: 'ECN ACCOUNT',
            balance: 0,
            equity: 0,
            leverage: '1:1000',

        },
        {
            login: 4991924,
            account_type: 'ECN ACCOUNT',
            balance: 0,
            equity: 0,
            leverage: '1:1000',

        }
    ]);

    const [createAccount, setCreateAccount] = useState(accounts);
    const [newAccount, setNewAccount] = useState();
    const [newLeverage, setNewLeverage] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();

        setCreateAccount((prevAccount) =>{
            return [
                {
                    login: Math.floor(100000 + Math.random() * 900000),
                    account_type: newAccount,
                    balance: 0,
                    equity: 0,
                    leverage: newLeverage
                }, ...prevAccount
            ]
        });

        setAccounts(createAccount);



        console.log(accounts);
        console.log(createAccount);
    }
    



    return (
        <div className='outlet'>
            <h1>Account</h1>

            <div className={classes.accountHeaderCon}>
                <div className={classes.accountInDiv}>
                    <span className='blueHeading'>$0.00</span>
                    <span>Total in Real Account</span>
                    <span><FontAwesomeIcon icon={toggleIcon} onClick={changeIcon} style={{ 'fontSize': '1.3rem' }} /> </span>
                </div>

                <div className={classes.accountInDiv}>
                    <span className='blueHeading'>$0.00</span>
                    <span>Most profitable trade</span>
                    <span><FontAwesomeIcon icon={toggleIconO} onClick={changeIconO} style={{ 'fontSize': '1.3rem' }} /> </span>
                </div>

                <div className={classes.accountInDiv}>
                    <span className='blueHeading' >0</span>
                    <span>Number of trades this week</span>
                </div>
            </div>

            <div className={classes.accountCreatecon}>
                <h3>Live Accounts</h3>
                <span onClick={displayForm}>+ Real Account</span>
            </div>


            {showForm &&
                <form action="" onSubmit={handleSubmit}>
                    <h5 onClick={hideForm}>Close</h5>
                    <div className={ classes.formInner }>
                        <div>
                            <label htmlFor="">Account Type: </label>
                            <select name="account_type" id="" onChange={(e) => setNewAccount(e.target.value)}>
                            <option value='none' selected disabled>Select an Option</option>
                                <option value="ECN Account">ECN ACCOUNT</option>
                                <option value="Micro Account">MICRO ACCOUNT</option>
                                <option value="Varaible Account">VARIABLE ACCOUNT</option>
                            </select>
                        </div>

                        <div>

                            <label htmlFor="">Leverage: </label>
                            <select name="leverage" id="" onChange={(e) => setNewLeverage(e.target.value)}>
                                <option value='none' selected disabled>Select an Option</option>
                                <option value="1:100">1:100</option>
                                <option value="1:500">1:500</option>
                                <option value="1:1000">1:1000</option>
                            </select>
                        </div>
                    </div>

                    <button>Create Account</button>
                </form>
            }



            <div>

                <div className={classes.accountList}>
                    <div className={classes.accountListHeading}>
                        <p>Login</p>
                        <p>Account Type</p>
                        <p>Balance</p>
                        <p>Equity</p>
                        <p>Leverage</p>
                    </div>

                    {accounts.map(account => {
                        return (
                            <div className={classes.accountListItem}>
                                <p>{account.login}</p>
                                <p>{account.account_type}</p>
                                <p>{account.balance} </p>
                                <p>{account.equity} </p>
                                <p>{account.leverage} </p>

                                <div className={classes.accountListIcon}>
                                    <Link to='deposit'><FontAwesomeIcon icon={faSave} /></Link>
                                    <Link to='deposit'><FontAwesomeIcon icon={faSave} /></Link>
                                </div>

                                <p className={classes.accountListBtn}>Trade</p>
                            </div>
                        )
                    })}
                </div>

            </div>




        </div>
    );
}

export default Account;