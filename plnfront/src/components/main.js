import { useState } from "react"


function main() {
    const [message, setMessage] = useState("")
    const [history, setHistory] = useState([""])
    const [loading, setLoading] = useState(false)

    const sendMessage = () =>{
        if(message === null){
            return
        }
        setLoading(true)
        
    }

return(
    <div>
        <div className="header">
            <header><h1>Ia para juridico</h1></header>
        </div>
        <div className="historico">
            {history.map((item, index)=>(
                <div key={index}>
                <p>{item.userMessage}</p>
                <p>{item.pcMessage}</p>
                </div>
            ))
            }
            
        </div>
        <div className="submit">
        <input type="text"
         placeholder="Digite Sua Mensagem"
        value={message} onChange={(e)=> setMessage(e.target.value())}>
        </input>

        <button
        placeholder="Solicitar"
        disabled={loading}
        onClick={sendMessage}
        ></button>
        </div>
    </div>
)}
export default main;