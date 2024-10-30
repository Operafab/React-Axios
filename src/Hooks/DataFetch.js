

import axios from "axios";
import { useEffect, useState } from "react"

const DataFetch = async (endpoint) => {

  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiFetch = async () => {

      try {
        const response = await axios.get(`https://randomuser.me/api/?results=10`)
        setApiData(response.results);
        console.log(response).results

        
      } catch (error) {
        setError("Could not fetch", error)
      }
    }
    apiFetch();
  }, [endpoint]);
  return (apiData, error)
};

export default DataFetch