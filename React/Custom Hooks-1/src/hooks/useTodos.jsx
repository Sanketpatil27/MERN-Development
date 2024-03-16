import { useEffect, useState } from 'react'
import axios from 'axios'

export function useTodos(n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const val = setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
          .then(res => {
            setTodos(res.data.todos);
            setLoading(false);
          })
        }, n*1000);
  
        // to run this at starting:
        axios.get("https://sum-server.100xdevs.com/todos")
          .then(res => {
            setTodos(res.data.todos);
            setLoading(false);
          })
  
          // clean up the previous interval clock if n changes
          return () => {  
            clearInterval(val);
          }
    }, [n]);
  
    return { todos, loading };
}