// import { useEffect, useState } from "react";
// import { Cuadrado } from "./cuadrado/Index";
import { EjemploUseRef } from "./hook/EjemploUseRef/Index.jsx";
function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("Me eh creado");
  // }, []);

  // useEffect(() => {
  //   console.log("Se a actualizado");
  // }, [count]);

  // const evento = (e) => {
  //   console.log(e);
  // };

  // useEffect(() => {
  //   document.addEventListener("wheel", evento);
  //   return () => {
  //     document.removeEventListener("wheel", evento);
  //   };
  // }, [count]);

  return (
    <div>
      <EjemploUseRef></EjemploUseRef>
      {/* <Cuadrado width={1000} height={1000} backgroundColor={"#1e1e1e"}>
        <p>hola mundo</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam blanditiis earum, in dignissimos tempora placeat debitis illo, dolorum sit velit a consequatur, vitae voluptates quam. Porro accusantium doloribus temporibus.</p>
      </Cuadrado>
      <Cuadrado width={800} height={800} backgroundColor={"#ff0000"}>
        <div>
          <h1>Titulo 1</h1>
        </div>
      </Cuadrado> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      {count} */}
    </div>
  );
}

export default App;
