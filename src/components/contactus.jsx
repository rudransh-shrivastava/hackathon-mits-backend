import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './navbar';
import {FaLinkedin} from "react-icons/fa";

export default function ContactUs() {
return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <Navbar/>
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full"
    >
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-4">Have questions? Fill out the form or reach us through the details below.</p>
        <div className="flex items-center space-x-3 mb-2">
            <FaLinkedin className="text-gray-500"></FaLinkedin>
            <span className="text-gray-700">https://www.linkedin.com/in/gopal-lohar/</span>
        </div>
        <div className="flex items-center space-x-3 mb-2">
            <Phone className="text-gray-500" />
            <span className="text-gray-700">+91 76938 97110</span>
        </div>
        </div>
        
        <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32" required></textarea>
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
            Send Message
        </motion.button>
        </form>
    </div>
    </motion.div>
</div>
);
}
