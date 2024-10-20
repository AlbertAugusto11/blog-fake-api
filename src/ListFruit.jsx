import { useState, useEffect } from "react"

export const ListFruit = () =>{
    const [fruit,setFruit] = useState([])
    useEffect(() =>{
        const getNotice = async () => {
            const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
            const json = await response.json();
            setFruit(json)
        }
        getNotice()
        console.log("MONTOU FRUTAS")
    },[])

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
        <>
            <button onClick={addFruit}>Add Nova Fruta</button>
            <ul>
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
            </ul>
            <button onClick={() =>console.log(fruit)}>CONSOLE LOG FRUIT</button>
        </>
    )
    
}
export default ListFruit