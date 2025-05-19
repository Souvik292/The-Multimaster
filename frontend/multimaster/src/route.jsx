import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';
import App from './App';
import Loginbody from "./loginbody";
import Basic from "./basic"

function Reactroute() {
  return(
       <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/main" element={<Loginbody />} />
        <Route path="/main/basic" element={<Basic />} />

      </Routes>
    </Router>
   
  );
};
export default Reactroute;