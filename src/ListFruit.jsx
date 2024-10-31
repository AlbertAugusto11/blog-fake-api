import { useState, useEffect } from "react"
import { apiFruit } from "./service/api"

export const ListFruit = () =>{
    const [fruit,setFruit] = useState([])
    const[loading, setLoading] = useState(false)

    // useEffect(() =>{
    //     const getFruit = async () => {
    //         const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
    //         const json = await response.json();
    //         setFruit(json)
    //     }
    //     getFruit()
    // },[])

    useEffect(() => {
        const getFruit = async () => {
            try{
                setLoading(true)
                const {data} = await apiFruit.get(`/fruits`)
                setFruit(data)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getFruit()
    },[])  // com axios completo

    const delFruit = (id) =>{
        let x = fruit.filter(element =>{
            return element.id !== id
        })
        setFruit(x)
    }
    const addFruit = () =>{
        let id = fruit.length + 1
        let x = prompt("Digite o nome da Fruta")
        let y = prompt("Digite a categoria da fruta")
        let z = prompt("Digite o proço da fruta Ex 8,99")
        z = parseFloat(z.replace(",","."))
        z = z.toLocaleString()
        setFruit([...fruit,{id: id, name: x, category: y, price: z}])
    }

    return(
        <div>
            <button onClick={addFruit}>Add Nova Fruta</button>
            {loading ? <p>EM CARREGAMENTO ...</p> : <ul>
                {fruit.map(element =>{
                    return(
                        <li key={element.id}>
                            <h2>{element.name}</h2>
                            <h4>{element.category}</h4>
                            <p>Preço: {element.price} reais</p>
                            <button onClick={() => delFruit(element.id)}>Excluir</button>
                        </li>
                    )
                })}
            </ul>}
            <button onClick={() =>console.log(fruit)}>CONSOLE LOG FRUIT</button>
        </div>
    )
    
}
export default ListFruit