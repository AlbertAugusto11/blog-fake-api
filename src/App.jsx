import { useEffect, useState } from "react"
import ListFruit from "./ListFruit"
import ListNotice from "./ListNotice"
import "./app.scss"


function App() {
  const localMode = localStorage.getItem("modeDark")
  console.log(localMode)
  
  const [mode,setMode] = useState(localMode == true ? localMode : false)
  
  const modeDarkF = () =>{
    setMode(!mode)
    localStorage.setItem("modeDark", !mode)
  }

  return(
    <div className={mode == false ? "div__1" : "div__2"}>
      <button onClick={() => modeDarkF()}>MODO ESCUCO</button>
      <ListFruit />
      <ListNotice />
    </div>
    )
}

export default App
