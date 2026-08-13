import { useState } from 'react'
import { MOCK_MESSAGES } from '../types'
import MessageCard from './MessageCard'

let nextId = MOCK_MESSAGES.length + 1

function MessageList() {
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function handleRemove(id: number) {
    setMessages(messages.filter((m) => m.id !== id))
  }

  function handleAdd() {
    const newMessage = {
      id: nextId++,
      title,
      body,
      created_at: new Date().toISOString(),
    }

    setMessages([newMessage, ...messages])
    setTitle('')
    setBody('')
  }

  return (
    <div className="message-list">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Nova Mensagem</h5>
          <input
            className="form-control mb-2"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            rows={3}
            placeholder="Escreva sua mensagem..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button className="btn btn-primary w-100" onClick={handleAdd}>
            Adicionar
          </button>
        </div>
      </div>

      {messages.map((message) => (
        <MessageCard key={message.id} message={message} onRemove={handleRemove} />
      ))}
    </div>
  )
}

export default MessageList
