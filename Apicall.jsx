import React, { useState, useEffect } from "react";
import axios from 'axios'

function Apicall() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [keys, setKeys] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
     // Replace with your API endpoint
     const apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

     axios
       .get(apiUrl)
       .then((response) => {
         setData(response.data);
         setKeys(Object.keys(response.data));
         setLoading(false);
       })
       .catch((error) => {
         setError(error);
         setLoading(false);
       });
   }, []);

   if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {keys.map((key, index) => (
          <li key={index}>{data[key]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apicall
