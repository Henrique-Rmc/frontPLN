import React, { useState } from "react";
import "./style.css";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfData, setPdfData] = useState(null);

  const url = 'https://example.com/api/generate-pdf';

  const sendMessage = () => {
    if (!message) {
      return;
    }

    setStatus("Carregando...");
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao solicitar PDF');
        }
        return response.blob();
      })
      .then((pdfBlob) => {
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfData(pdfUrl); // Atualize o estado pdfData
      })
      .catch((error) => {
        console.error('Erro ao solicitar pdf', error);
      })
      .finally(() => {
        setStatus("");
        setMessage("");
        setLoading(false);
      });
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
        <div>
          {pdfData ? (
            <embed src={pdfData} width="100%" height="500px" type="application/pdf" />
          ) : (
            <p>Carregando PDF...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
