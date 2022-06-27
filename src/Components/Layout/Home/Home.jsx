import { Link, Outlet } from "react-router-dom";
import Header from '../Header/Header'
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Home.module.css"

const Home = () => {
    return (
        <div>
            <Header />

            <div className={ classes.homeWrapper }>
                <Sidebar />
                <Outlet/>
            </div>
            <Link to='/auth'>Go to Auth</Link>
        </div>
    );
}

export default Home;