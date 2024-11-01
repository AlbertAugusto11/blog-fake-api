// https://github.com/Kenzie-Academy-Brasil-Developers/blog-fake-api - repositorio do trabalho

import { useEffect, useState } from "react"
import { apiNews } from "./service/api"

export const ListNotice = () =>{
    const [notice,setNotice] = useState([])
    const [loading, setLoading] = useState(false)
    
    // useEffect(() => {
    //     const getNotice = async () => {
    //         setLoading(true)
    //         const response = await fetch("https://blog-fake-api.onrender.com/news");
    //         const json = await response.json();
    //         setNotice(json)
    //     }
    //     getNotice()
    //     setLoading(false)
    // },[])

    useEffect(() => {
        const getNotice = async () => {
            try{
                setLoading(true)
                const {data} = await apiNews.get(`/news`)
                setNotice(data)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getNotice()
    },[])  // com axios completo

    const delNotice = (id) =>{
        let x = notice.filter(element =>{
            return element.id !== id
        })
        setNotice(x)
    }
    return(
        <div>
            {loading ? <p>LISTA DE NOTICIAS - EM CARREGAMENTO ...</p> : <ul>
                <h1>BEM VINDO AO NOSSO PORTAL DE NOTICIAS</h1>
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
            </ul>}
        </div>
    )
}
export default ListNotice