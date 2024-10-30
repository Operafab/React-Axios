

import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        setData(response.data.results);
      } catch (error) {
        setError("Failed to fetch data.");
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-400">Users Information</h1>
      {loading && <p className="text-lg font-semibold text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((user, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <img
              src={user.picture.medium}
              alt={`User picture`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-center">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-center text-gray-700 mb-2">{user.email}</p>
            <p className="text-center text-gray-700 mb-2">{user.phone}</p>
            <p className="text-center text-gray-500">
              {user.location.street.number} {user.location.street.name}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetch;