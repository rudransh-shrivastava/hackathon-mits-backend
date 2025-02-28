 
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {LayoutDashboard} from 'lucide-react'; 
import {UserRoundPen} from 'lucide-react'; 
import {MonitorSmartphone} from 'lucide-react'; 
import {ShieldPlus  } from 'lucide-react'; 
import {GlobeLock   } from 'lucide-react'; 
import {Settings   } from 'lucide-react'; 
import logo from '../assets/logo.png';
import {LogOut} from 'lucide-react';


const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/', icon:  LayoutDashboard  },
    { name: 'Profile', path: '/profile', icon:  UserRoundPen  },
    { name: 'Devices', path: '/devices', icon:  MonitorSmartphone  },
    { name: 'Policies', path: '/policies', icon:  ShieldPlus  },
    { name: 'Filter Logs', path: '/logs', icon:  GlobeLock  },
    { name: 'Settings', path: '/settings', icon:  Settings  }
  ];

  return (
    <div className="bg-[#f2f2f2] min-h-screen w-20 md:w-64 fixed left-0 top-0 flex flex-col">
      <div className="flex items-center justify-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img src={logo}  alt="Eclipse Logo" className="h-20 w-25" />
 
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center py-3 px-4 mb-2 mx-2 rounded-lg ${
                path === item.path ? 'bg-[#ffb2b2] text-white' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center w-6 h-6">
                <item.icon  size={20}/>
              </div>
              <span className="ml-3 hidden md:block">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/logout"
          className="flex items-center text-red-500 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
           
            <LogOut size={20}/>
           
          <span className="ml-1 hidden md:block">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;