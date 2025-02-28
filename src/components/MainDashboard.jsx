 
 import {  Routes, Route } from 'react-router-dom';
 import VerticalNavbar from './DashboardNavbar.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import DevicesDashboard from './DevicesDashboard';
import ProfilePage from './ProfilePage';
import PoliciesPage from './PoliciesPage';
import { FilterLogsPage } from './FilterLogsPage.jsx';
import SettingsPage from './SettingsPage';

function MainDashboard() {
  return (
    
      <div className="flex">
        <VerticalNavbar />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/devices" element={<DevicesDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/logs" element={<FilterLogsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    
  );
}

export default MainDashboard; 