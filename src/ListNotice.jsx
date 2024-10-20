// https://github.com/Kenzie-Academy-Brasil-Developers/blog-fake-api - repositorio do trabalho

import { useEffect, useState } from "react"

export const ListNotice = () =>{
    const [notice,setNotice] = useState([])
    useEffect(() => {
        const getNotice = async () => {
            const response = await fetch("https://blog-fake-api.onrender.com/news");
            const json = await response.json();
            setNotice(json)
        }
        getNotice()
    },[])

    const delNotice = (id) =>{
        let x = notice.filter(element =>{
            return element.id !== id
        })
        setNotice(x)
    }
    return(
        <>
            <ul>
                {notice.map(element =>{
                    return(
                        <li key={element.id}>
                            <h2>{element.title}</h2>
                            <span>Categoria: {element.category}</span>
                            <p>{element.content}</p>
                            <button onClick={() => delNotice(element.id)}>Deletar noticia</button>

                        </li>
                    )
                })}
            </ul>
            <button onClick={() => saveLocalStorage()}>SALVER NO LOCALSTORAGE</button>
        </>
    )
}
export default ListNotice