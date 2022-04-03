import React,{useEffect,useState} from 'react';
import axios from 'axios'

const Snack = () => {
  const [todo,setTodo] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=d7d2e0dd"
      );
      console.log(response,'response');
      setTodo(response.data)
    };
    fetchData();
  }, []);
  return (
    <div>Snack</div>
  )
}

export default Snack