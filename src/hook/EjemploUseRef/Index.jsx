import { useRef } from "react";
import { useEffect } from "react";

export const EjemploUseRef = () => {
  const ref = useRef(true);
  useEffect(() => {
    console.log({
      width: ref.current.clientWidth,
      hight: ref.current.clientHeight,
    });
  }, []);
  return (
    <div>
      <div  className="div">
        Index
      </div>
      <div ref={ref} className="div">
        <h1>Diablo amigo</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptatibus nostrum dolorum eveniet suscipit quaerat inventore, quos vero ipsum veniam iure reiciendis illum numquam assumenda atque! Id repellendus alias cupiditate!</p>
      </div>
      <div className="div">Index</div>
    </div>
  );
};
