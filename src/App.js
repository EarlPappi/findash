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
import Home from "./Components/Home.jsx"
// import Header from './Components/Layout/Header/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/auth" element={<Auth />} >
          <Route path="login" element={ <Login/> }/>
          <Route path="signup" element={ <Signup/> }/>
          <Route index element={ <Login/> } />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
