import { useState } from "react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const defaultData = [
    { appPath: "/app1", remoteIP: "192.168.1.1", protocol: "HTTP" },
    { appPath: "/app2", remoteIP: "192.168.1.2", protocol: "HTTPS" },
    { appPath: "/app3", remoteIP: "192.168.1.3", protocol: "FTP" }
  ];
  const [data, setData] = useState(defaultData);

  // Function to fetch data and open modal
  const openModalAndFetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data"); // Replace with actual API
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result); // Update state with fetched data
      setModalOpen(true); // Open modal
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Button to Open Popup */}
      <button onClick={openModalAndFetchData} className="bg-red-600 text-white px-4 py-2 rounded">
        Open Popup
      </button>

      {/* Delete Confirmation Popup */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] border">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-800">×</button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </p>

            <table className="w-full mt-4 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">App Path</th>
                  <th className="border p-2 text-left">Remote IP</th>
                  <th className="border p-2 text-left">Protocol</th>
                  <th className="border p-2 text-left">Status</th>
                  <th className="border p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">{item.appPath}</td>
                    <td className="border p-2">{item.remoteIP}</td>
                    <td className="border p-2">{item.protocol}</td>
                    <td className="border p-2">⚙</td>
                    <td className="border p-2">
                      <button className="bg-red-600 text-white px-3 py-1 rounded">Disable</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}