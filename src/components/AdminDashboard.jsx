import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { X, Filter, CircleUserRound } from 'lucide-react';
import yt from '../assets/yt.png';
import gpt from '../assets/gpt.png';
import SideProfileNotification from './SideProfileNotification';
const AdminDashboard = () => {
    const [summaryData, setSummaryData] = useState([
        { title: "Devices", value: 40, color: "bg-[#7d9e50]" },
        { title: "Policy Enforcement", value: 98, color: "bg-[#728b94]" },
        { title: "Top restricted site", value: 'www.youtube.com', color: "bg-[#526b7a]" }
    ]);

    const [deviceData, setDeviceData] = useState([
        
    ]);

    const [recentDevices, setRecentDevices] = useState([
        { id: "Device-1", ipAddress: "192.168.0.1", date: "01/15/25" },
        { id: "Device-2", ipAddress: "192.168.1.5", date: "01/25/25" },
        { id: "Device-3", ipAddress: "192.168.0.23", date: "02/01/25" }
    ]);

    const [recentPolicies, setRecentPolicies] = useState([
        { name: "YouTube", url: "www.youtube.com", date: "Today", icon: yt },
        { name: "X.com", url: "x.com", date: "Today", icon: X },
        { name: "Open AI", url: "openai.com", date: "Yesterday", icon: gpt }
    ]);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const devicesPerPage = 5; // Number of devices per page

    useEffect(() => {
        const fetchDevices = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://192.168.139.247:6969/api/v1/endpoints"); // Replace with your actual API URL
                setDeviceData(prevData => [...prevData, ...response.data.endpoints]); // Merge API data with local data
            } catch (error) {
                console.error("Error fetching device data:", error);
            }
            setLoading(false);
        };

        fetchDevices();
    }, []);

    // Pagination Logic
    const indexOfLastDevice = currentPage * devicesPerPage;
    const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
    const currentDevices = deviceData.slice(indexOfFirstDevice, indexOfLastDevice);

    const nextPage = () => {
        if (indexOfLastDevice < deviceData.length) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };


    return (
        <div className="ml-20 md:ml-64 p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-medium">Welcome, Adarsh</h1>
                <SideProfileNotification />
            </div>


            <div className="bg-white w-172   p-4 rounded-lg shadow-sm mb-6">
                <p className="text-gray-500 mb-4">In the last 30 days:</p>

                <div className="grid text-white grid-cols-1 md:grid-cols-3 gap-4">
                    {summaryData.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4 flex justify-between items-center w-45 h-20 rounded-lg flex items-center justify-center text-white font-bold bg-[linear-gradient(115deg,#6f8f44_25%,#955b47_25%,#955b47_50%,#49534d_50%,#49534d_75%,#a38a5d_75%)]">
                            <div>
                                <div className="text-sm">{item.value}</div>
                                <div className="text-sm">{item.title}</div>
                            </div>
                            <div className={`h-12 w-24 rounded-lg`}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-gradient-to-r from-[#b0ce81] via-[#b3d3b2] to-[#98c1dc] p-6 rounded-lg shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">All Devices</h2>
                            <input
                                type="text"
                                placeholder="Search devices"
                                className="w-80 bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />

                            <button className="bg-green-100 text-black-600 px-3 py-1 flex rounded-lg text-sm">
                                <Filter color='black' size={20} className='mr-2' />
                                <span>Filter</span>
                            </button>
                        </div>

                        {loading ? (
                            <p>Loading devices...</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Device ID</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Policy Enforcement</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium  text-gray-500">Actions</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentDevices.map((device, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="px-4 py-3 flex items-center">
                                                    <div className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                                        <CircleUserRound size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">ep-dev-{device.id}</div>
                                                        <div className="text-xs text-gray-500">{ device.ip}</div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span  className=' px-2 py-1 rounded-full text-xs  bg-green-100 text-green-600'>
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    {device.policyEnforcement !== '-' && (
                                                        <div className="w-full font-bold bg-gray-200 rounded-full h-2">
                                                            <div
                                                                className="bg-black h-2 rounded-full"
                                                                style={{ width: '100%' }}
                                                            ></div>
 
                                                       <span>100%</span>
                                                        </div>
                                                    )}
                                                    <div className="text-xs mt-1">{device.policyEnforcement}</div>
                                                </td>
                                                 
                                                <td >
                                                    <button className='bg-white py-4 px-5 rounded-lg'>Edit</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Pagination Controls */}
                        {/* <div className="flex justify-between items-center mt-4">
                            <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded">
                                Previous
                            </button>
                            <span>Page {currentPage}</span>
                            <button onClick={nextPage} disabled={indexOfLastDevice >= deviceData.length} className="px-4 py-2 bg-gray-200 rounded">
                                Next
                            </button>
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="bg-[#f4f4f4] p-4 rounded-lg -mt-44 shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Recent Devices</h2>
                        </div>

                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-2 py-2 text-left text-xs font-medium text-[#8ba85b]">Device ID</th>
                                    <th className="px-2 py-2 text-left text-xs font-medium text-[#8ba85b]">IP Address</th>
                                    <th className="px-2 py-2 text-left text-xs font-medium text-[#8ba85b]">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentDevices.map((device, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-2 py-3 text-sm">{device.id}</td>
                                        <td className="px-2 py-3 text-sm">{device.ipAddress}</td>
                                        <td className="px-2 py-3 text-sm">{device.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="bg-[#8ba85b] p-2 font-smbold ml-20 mt-5 rounded text-sm">View All Devices</button>
                    </div>

                    <div className="bg-[#f4f4f4] p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Recent Policies</h2>
                        </div>

                        <table className="min-w-full">
                            <tbody>
                                {recentPolicies.map((policy, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-2 py-3">
                                            <div className="flex items-center">
                                                {
                                                    policy.icon === X ? (
                                                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                                            <X size={20} />
                                                        </div>
                                                    ) : (
                                                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                                            <img src={policy.icon} alt="" />
                                                        </div>
                                                    )
                                                }
                                                <div>
                                                    <div className="font-medium text-sm">{policy.name}</div>
                                                    <div className="text-xs text-gray-500">{policy.url}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-3 text-sm text-right">{policy.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="bg-[#8ba85b] p-2 font-smbold ml-20 mt-5 rounded text-sm">View All Policies</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AdminDashboard;


















