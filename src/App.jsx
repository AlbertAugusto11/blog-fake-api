import { useEffect, useState } from "react"
import ListFruit from "./ListFruit"
import ListNotice from "./ListNotice"
import "./app.scss"


function App() {

  const [mode,setMode] = useState(() => {
    const savedMode = localStorage.getItem('modeDark');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  
  const modeDarkF = () =>{
    setMode(!mode)
  }

  useEffect(() =>{
    localStorage.setItem("modeDark", mode)
  },[mode])

  return(
    <div className={mode == false ? "div__1" : "div__2"}>
      <button onClick={() => modeDarkF()}>MODO ESCUCO</button>
      <ListFruit />
      <ListNotice />
    </div>
    )
}

export default App
