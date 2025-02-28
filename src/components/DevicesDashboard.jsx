 
// src/components/DevicesDashboard.jsx
import React, { useState, useEffect } from 'react';
import SideProfileNotification from './SideProfileNotification';
const DevicesDashboard = () => {
  // Sample data for the devices
  const [devices, setDevices] = useState([
    { id: "Dev-100", name: "Dev 100", lastActive: "Feb 24, 4:20 PM", department: "CS-Lab", deviceStatus: "Active", ipAddress: "192.168.10.235", status: "Disabled" },
    { id: "Dev-105", name: "Dev 105", lastActive: "Feb 24, 4:15 PM", department: "CS-Lab", deviceStatus: "Active", ipAddress: "192.168.1.174", status: "Disabled" },
    { id: "Dev-104", name: "Dev 104", lastActive: "Feb 24, 4:10 PM", department: "CS-Lab", deviceStatus: "Inactive", ipAddress: "192.168.14.16", status: "Disabled" },
    { id: "Dev-103", name: "Dev 103", lastActive: "Feb 24, 4:05 PM", department: "IT-Lab", deviceStatus: "Active", ipAddress: "192.168.90.210", status: "Disabled" },
    { id: "Dev-102", name: "Dev 102", lastActive: "Feb 24, 4:00 PM", department: "IT-Lab", deviceStatus: "Inactive", ipAddress: "192.168.12.45", status: "Enabled" },
    { id: "Dev-101", name: "Dev 101", lastActive: "Feb 24, 3:55 PM", department: "IT-Lab", deviceStatus: "Active", ipAddress: "192.168.80.215", status: "Disabled" },
    { id: "Dev-111", name: "Dev 100", lastActive: "Feb 24, 3:50 PM", department: "IT-Lab", deviceStatus: "Active", ipAddress: "192.168.44.180", status: "Disabled" },
    { id: "Dev-099", name: "Dev 099", lastActive: "Feb 24, 3:45 PM", department: "IT-Lab", deviceStatus: "Inactive", ipAddress: "172.16.45.224", status: "Enabled" },
    { id: "Dev-098", name: "Dev 098", lastActive: "Feb 24, 3:40 PM", department: "CS-Lab", deviceStatus: "Active", ipAddress: "92.168.15.86", status: "Disabled" }
  ]);

  const alertsData = [
    { device: "Dev-101", type: "Error", message: "Failed to apply policy update due to device error" },
    { device: "Dev-103", type: "Info", message: "Device online after 3 hours of inactivity" },
    { device: "Dev-105", type: "Warning", message: "Device approaching storage limit (85% used)" }
  ];



  const [selectedDevices, setSelectedDevices] = useState([]);

  const toggleDeviceStatus = (id) => {
    setDevices(devices.map(device =>
      device.id === id ? { ...device, status: device.status === "Enabled" ? "Disabled" : "Enabled" } : device
    ));
  };

  const handleSelectDevice = (id) => {
    setSelectedDevices(prev =>
      prev.includes(id) ? prev.filter(deviceId => deviceId !== id) : [...prev, id]
    );
  };

  // const handleSelectAll = () => {
  //   setSelectedDevices(selectedDevices.length === devices.length ? [] : devices.map(device => device.id));
  // };

  const handleSelectAll = () => {
    const currentPageDeviceIds = currentDevices.map(device => device.id);
    setSelectedDevices(selectedDevices.length === currentPageDeviceIds.length
      ? []
      : currentPageDeviceIds);
  };


  const [currentPage, setCurrentPage] = useState(1);
  const devicesPerPage = 7;

  useEffect(() => {
    // Fetch data from the backend API
    const fetchDevices = async () => {
      try {
        const response = await fetch('https://api.example.com/devices'); // Replace with actual API URL
        const data = await response.json();
        setDevices(data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);

  const totalPages = Math.ceil(devices.length / devicesPerPage);
  const indexOfLastDevice = currentPage * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="ml-20 md:ml-64 p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="py-1 px-3 text-sm border rounded">Filter</button>
          <div className="relative">
            <input type="text" placeholder="Search..." className="border rounded-lg py-1 px-3 text-sm pl-8" />
          </div>
        </div>
        <SideProfileNotification />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="grid grid-cols-7 border-b p-3 text-sm font-medium text-gray-500">
              <div className="col-span-1 flex items-center">
                <input type="checkbox" onChange={handleSelectAll} checked={selectedDevices.length === devices.length} />
                <span className="ml-2">Device Name</span>
              </div>
              <div className="col-span-1">Last Active</div>
              <div className="col-span-1">Department</div>
              <div className="col-span-1">Device Status</div>
              <div className="col-span-1">IP Address</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Actions</div>
            </div>
            {currentDevices.map((device) => (
              <div key={device.id} className="grid grid-cols-7 border-b p-3 text-sm items-center">
                <div className="col-span-1 flex items-center">
                  <input type="checkbox" onChange={() => handleSelectDevice(device.id)} checked={selectedDevices.includes(device.id)} />
                  <span className="ml-2">{device.name}</span>
                </div>
                <div className="col-span-1">{device.lastActive}</div>
                <div className="col-span-1">{device.department}</div>
                <div className="col-span-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${device.deviceStatus === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{device.deviceStatus}</span>
                </div>
                <div className="col-span-1">{device.ipAddress}</div>
                <div className="col-span-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${device.status === 'Enabled' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>{device.status}</span>
                </div>
                <div className="col-span-1">
                  <button className={`px-3 py-1 rounded-lg text-xs ${device.status === 'Enabled' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-600'}`} onClick={() => toggleDeviceStatus(device.id)}>
                    {device.status === 'Enabled' ? 'Disable' : 'Enable'}
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-4 text-gray-500 text-sm p-2">
              <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="mx-1 px-2">←</button>
              {[...Array(totalPages)].map((_, index) => (
                <button key={index} onClick={() => handlePageChange(index + 1)} className={`mx-1 px-2 ${currentPage === index + 1 ? 'bg-gray-200 rounded' : ''}`}>{index + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className="mx-1 px-2">→</button>
            </div>
          </div>
        </div>

        <div>

          {/* alert table */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Alerts</h2>

            <div className="space-y-4">
              {alertsData.map((alert, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-3 py-2">
                  <div className="flex items-center mb-1">
                    <div className="h-4 w-4 bg-red-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-red-500 text-xs">!</span>
                    </div>
                    <span className="font-medium text-sm">Device: {alert.device}</span>
                  </div>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              ))}
            </div>

            <button className="mt-4 text-blue-500 text-sm">View All Alerts</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default DevicesDashboard;


// // alert data :