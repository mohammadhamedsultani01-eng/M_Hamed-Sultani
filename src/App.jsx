
import { useState, useEffect } from 'react';


function Timer() {
  const [count, setCount] = useState(1);

 useEffect(()=>{
    setTimeout(() => {
        setCount((num)=> num*2)
    }, 0.1);
 })

  return <h1>I've rendered {count} times!</h1>;
}export default Timer;