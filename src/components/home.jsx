import { Link } from "react-router-dom"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignupPage from './signup.jsx'
import Navbar from "./navbar.jsx";
// import {  Routes, Route, Link } from "react-router-dom";
const LandingPage = () => {
 
 

return (
<div className="min-h-screen bg-[#131313] text-white">
    <Navbar/>
    {/* Hero Section */}
    <div
    className="relative h-screen flex items-center px-6 md:px-16"
    style={{
        backgroundImage: "url('./assets/home.jpeg?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // opacity: 0.6,
        // backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
    }}
    >
    <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl mb-8 font-serif">ECLIPSE: Intelligent Security for Absolute Control</h1>
        <p className="md:text-3xl mb-8 text-gray-300 font-montserrat">
        A comprehensive security solution designed to protect your digital assets and infrastructure with advanced
        AI-powered monitoring and threat detection.
        </p>
        <Link
        to="/signup"
        className="bg-[#4182f9] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2f84d2] transition-colors inline-block"
        >
        Get Started
        </Link>
    </div>
    </div>

    {/* Services Section */}
    <div className="py-20 px-6 md:px-16 bg-[#151b26] h-[900px]" style = {{
    backgroundImage: "url('./assets/OurService.jpeg?height=1080&width=1920')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    }}>
    <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold mb-12 ml-[50%] pl-10px font-serif">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex">
            {/* <img
            src="/OurService.jpeg?height=400&width=600"
            alt="Security Shield"
            className="w-full h-auto rounded-lg"
            /> */}
        </div>

        <div>
            <p className="text-2xl mb-6">
            ECLIPSE is a comprehensive, patent-pending security solution designed to provide maximum security and
            digital protection. Our platform combines cutting-edge policy enforcement, real-time monitoring,
            advanced threat detection, and only authorized access with immediate threat handling and response.
            </p>

            <ul className="space-y-4 text-2xl">
            <li className="flex items-start">
                <span className="text-[#4182f9] mr-2">•</span>
                <span>
                End-to-End Security Control - Unified platform for applications, databases, and network protection
                </span>
            </li>
            <li className="flex items-start">
                <span className="text-[#4182f9] mr-2">•</span>
                <span>Real-Time Monitoring - Instantly detect threats and vulnerabilities</span>
            </li>
            <li className="flex items-start">
                <span className="text-[#4182f9] mr-2">•</span>
                <span>Adaptive Policy Enforcement - Granular security rules that adapt to new threats</span>
            </li>
            </ul>

            <Link
            to="/features"
            className="mt-8 border border-[#4182f9] text-[#4182f9] px-4 py-2 rounded inline-block hover:bg-[#4182f9] hover:text-white transition-colors"
            >
            Learn More
            </Link>
        </div>
        </div>
    </div>
    </div>

    {/* Dashboard Preview Section */}
    <div className="py-20 px-6 md:px-16">
    <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">WEB-AXE Dashboard</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
        Our intuitive dashboard gives you complete visibility and control over your security infrastructure.
        </p>

        <div className="bg-[#151b26] p-4 rounded-lg shadow-2xl">
        <img
            src="/placeholder.svg?height=800&width=1400"
            alt="Dashboard Preview"
            className="w-full h-auto rounded"
        />
        </div>
    </div>
    </div>
</div>
)
}

export default LandingPage

