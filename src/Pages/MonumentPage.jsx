import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MonumentPage = () => {

  const { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    
    axios.get(`http://localhost:5000/api/v1/monument/${id}`).then((res, err) => {
      if (err) {
        console.log("err", err);
      }

      console.log(res.data[0]);
      setData(res.data[0]);
    });
  }, []);


  return (
    <div>MonumentPage</div>
  )
}

export default MonumentPage