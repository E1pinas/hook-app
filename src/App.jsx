// import { useState } from 'react'

import { useEffect,useState } from "react";
function App() {
  const [count,setCount]=useState(0)
  useEffect(() => {
    console.log("Me eh creado");
  }, []);

  useEffect(()=>{
    console.log("Se a actualizado")

  },[count])

  return <div>
    <button onClick={()=>{setCount(count+1)}}>+1</button>
    {count}
  </div>;
}

export default App;
