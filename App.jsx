import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apicall from "./components/Apicall";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5173/fetch-and-store"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-md text-center">
        <p className="text-gray-800 text-lg font-semibold">{data}</p>
        <span className="block mt-4 text-gray-500 text-sm">
          - Albert Einstein
        </span>
      </div>
    </div>
  );
}

export default App;
