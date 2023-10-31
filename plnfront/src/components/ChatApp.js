import React, { useState, Component } from "react";
import "./style.css";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!message) {
      return;
    }

    setStatus("Carregando...");
    setLoading(true);

    // Lógica de envio da mensagem para a API aqui

    // Após receber a resposta da API, atualize o histórico
    // com setHistory([...history, { userMessage: message, botMessage: response }])

    setStatus("");
    setMessage("");
    setLoading(false);
  };

  return (
    <div className="body">

      <div className="header">
        <h1>I.A Para Otimização de Processos Jurídicos</h1>
      </div>

          <p id="status">{status}</p>
          <div className="entry">
          <p>Nossa I.A tem a capacidade de receber um relato informal em um processo formal para otimizar seu tempo</p>
          <textarea
            type="text"
            id="message-input"
            placeholder="Digite aqui"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="btn-submit"
            id="btn-submit"
            onClick={sendMessage}
            disabled={loading}
          >
            Gerar PDF
          </button>
          </div>
      </div>

  );
}

export default ChatApp;