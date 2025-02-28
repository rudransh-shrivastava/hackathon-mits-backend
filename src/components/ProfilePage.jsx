//profile page code



import React, { useState, useEffect } from 'react';
import SideProfileNotification from './SideProfileNotification';
import { Mail } from 'lucide-react';

const EditProfile = ({ onCancel }) => {
    return (
        <div className='p-6 bg-gray-50 min-h-screen w-full px-20'>
            <h1 className="text-lg font-medium mb-6">Edit Profile</h1>
            <p className="text-gray-700">This is the edit section. Add your form here.</p>
            <button 
                className='mt-4 bg-red-500 text-white px-4 py-2 rounded-md'
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
};

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({ name: "Adarsh", email: "adarsh@gmail.com" });

    useEffect(() => {
        fetch('https://api.example.com/user') // Replace with your actual API URL
            .then(response => response.json())
            .then(data => {
                if (data && data.name && data.email) {
                    setUser(data);
                }
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    if (isEditing) {
        return <EditProfile onCancel={() => setIsEditing(false)} />;
    }

    return (
        <div className='md:ml-64 p-6 bg-gray-50 min-h-screen w-full px-20'>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-medium">Welcome, {user.name}</h1>
                <SideProfileNotification />
            </div>

            {/* Section Title */}
            <div className='bg-gray-200 rounded-md flex items-center mt-14 pl-2 h-10'>
                <span className='font-bold text-lg'>Person Info</span>
            </div>

            {/* Profile Section */}
            <div className='flex items-center justify-between mt-7'>
                <div className='flex items-center space-x-4'>
                    <div className="bg-gray-200 rounded-full h-14 w-14 flex items-center justify-center">
                        <span className="text-sm font-medium">{user.name.charAt(0)}</span>
                    </div>
                    <div className='flex font-medium text-sm flex-col'>
                        <span>{user.name}</span>
                        <span className='text-gray-500'>{user.email}</span>
                    </div>
                </div>
                
                {/* Edit Button */}
                <button 
                    className='bg-blue-500 text-white px-4 py-2 rounded-md'
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </div>

            {/* Email Address Section */}
            <div className='bg-gray-200 py-4 justify-center rounded-md flex-col items-center mt-14 pl-2 h-50 w-80'>
                <span className='font-bold text-lg'>My Email Address</span>
                <div className='flex py-4'>
                    <div className='bg-gray-50 w-12 flex justify-center items-center h-12 rounded-full '>
                        <Mail size={35} stroke='white' fill='blue' strokeWidth={1} />
                    </div>
                    <div className='flex flex-col ml-4 text-sm'>
                        <span className='font-bold'>{user.email}</span>
                        <span className='text-gray-400'>1 month ago</span>
                    </div>
                </div>

                {/* Add Email Button */}
                <button className="flex ml-2 items-center gap-1 px-3 py-2 text-blue-600 bg-blue-100 rounded-lg text-sm font-medium">
                    +Add Email Address
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;