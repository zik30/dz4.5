import { useRef, useState} from "react";


function FormPage(){
    const input = useRef(null)

    const [item, setItem] = useState([])
    const [disable, setDisable] = useState(true)

    const createListElement = (event) =>{
        event.preventDefault()
        const inputValue = input.current
        if(inputValue.value.trim !== ""){
            setItem([
                ...item,
                inputValue.value
            ])
        }
    }

    const edit = (index, input)=>{
        setItem(
            item.map((elem, i) => {
                if(index === i) {
                    return input
                }else {
                   return  elem
                }
            })
        )
    }

    function empty(){
        if(input.current.value.trim() === "")setDisable(true)
        else setDisable(false)
    }

    return(
        <div>
            <form onSubmit={createListElement}>
                <input ref={input} onInput={empty} type="text"/>
                <button disabled={disable}>add</button>
            </form>
            <div>
                {item.map((item, index) => <h2 key={index}> {item}
                    <button disabled={!input.current.value.trim()}  onClick={() => edit(index, input.current.value)} >Edit</button>
                </h2> )}
            </div>
        </div>
    )
}

export default FormPage