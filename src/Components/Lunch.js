import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Lunch = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://khanpin-api.herokuapp.com/data"
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
    {data.map((items,index)=>{
      return <h1 key={items.id}>{items.name}</h1>
    })}
    </>
  )
}

export default Lunch