// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Auth from "./Components/Auth/Auth";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Layout/Home/Home.jsx";
import Account from './Components/Layout/Directory/Account'
import Deposit from "./Components/Layout/Directory/Deposit";
import InternalTransfer from "./Components/Layout/Directory/InternalTransfer";
import Withdraw from "./Components/Layout/Directory/Withdraw";
import Payments from "./Components/Layout/Directory/Payments";
import Patnerships from "./Components/Layout/Directory/Patnerships";
import Dashboards from "./Components/Layout/Directory/Dashboards";
import FilesToDownload from "./Components/Layout/Directory/FilesToDownload";
import Calendar from "./Components/Layout/Directory/Calendar";
import AllBonuses from "./Components/Layout/Directory/AllBonuses";
import MyBonuses from "./Components/Layout/Directory/MyBonuses";
// import Header from './Components/Layout/Header/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={ <Account/> } />
          <Route path="account" element={ <Account/> }/>
          <Route path="deposit" element={ <Deposit/> }/>
          <Route path="internal-transfer" element={ <InternalTransfer/> }/>
          <Route path="withdraw" element={ <Withdraw/> }/>
          <Route path="payments" element={ <Payments/> }/>
          <Route path="partnership" element={ <Patnerships/> }/>
          <Route path="dashboards" element={ <Dashboards/> }/>
          <Route path="calendar" element={ <Calendar/> }/>
          <Route path="files-to-download" element={ <FilesToDownload/> }/>
          <Route path="all-bonuses" element={ <AllBonuses/> }/>
          <Route path="my-bonuses" element={ <MyBonuses/> }/>
          
        </Route>


        <Route path="/auth" element={<Auth />} >
          <Route index element={ <Login/> } />
          <Route path="login" element={ <Login/> }/>
          <Route path="signup" element={ <Signup/> }/>
        </Route>

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;
