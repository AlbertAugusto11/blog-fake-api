import { useEffect, useState } from "react"
import ListFruit from "./ListFruit"
import ListNotice from "./ListNotice"
import "./app.scss"
import Modal from "./Modal"


function App() {

  const [mode,setMode] = useState(() => {
    const savedMode = localStorage.getItem('modeDark');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const[isOpen,setIsOpen] = useState(false)

  
  const modeDarkF = () =>{
    setMode(!mode)
  }

  useEffect(() =>{
    localStorage.setItem("modeDark", mode)
  },[mode])

  return(
    <div className={mode == false ? "div__1" : "div__2"}>
      <button onClick={() => modeDarkF()}>{mode == false ? "IR AO TEMA ESCURO" : "IR AO TEMA CLARO"}</button>
      <button onClick={() => setIsOpen(true)}>IR AO NOSSO MODAL</button>
      {isOpen ? <Modal setIsOpen={setIsOpen} children={<h1>EsTE É NOSSO HORTFRUIT</h1>} /> : null}
      <ListFruit />
      <ListNotice />
    </div>
    )
}

export default App
