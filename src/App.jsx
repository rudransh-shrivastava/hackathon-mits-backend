import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./home.jsx"; // Your home page
import SignupPage from "./Signup.jsx";
import ContactUs from "./contactUs.jsx";
import Signin from "./signin.jsx";
import PasswordReset from "./PasswordReset.jsx";
import Features from "./features.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />,
        <Route path="/signup" element={<SignupPage />} />,
        <Route path="/home" element={<LandingPage />} />,        
        <Route path="/login" element={<Signin/>}/>,
        <Route path="/contactus" element= {<ContactUs/>} />,
        <Route path="/passwordreset" element= {<PasswordReset/>} />,
        <Route path="/features" element={<Features />} />,
      </Routes>
  );
}

export default App;
