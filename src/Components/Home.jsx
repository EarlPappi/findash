import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <h1>This is the home page yunno</h1>
            <Link to='/auth'>Go to Auth</Link>
        </div>
     );
}
 
export default Home;