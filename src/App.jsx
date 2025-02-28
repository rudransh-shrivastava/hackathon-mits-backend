import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/home.jsx"; // Your home page
import SignupPage from "./components/Signup.jsx";
import ContactUs from "./components/contactUs.jsx";
import Signin from "./components/signin.jsx";
import PasswordReset from "./components/PasswordReset.jsx";
 
 
import MainDashboard from "./components/MainDashboard.jsx";
import DevicesDashboard from "./components/DevicesDashboard.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
 import PoliciesPage from "./components/PoliciesPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";

function App() {
  return (
    <Router>
      <nav className="flex justify-between p-4">
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        {/* Home & Auth Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
         <Route path="/dashboard*" element={ <MainDashboard/>} />
         
 
          
  
    
      </Routes>
    </Router>
  );
}

export default App;