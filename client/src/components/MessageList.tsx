import { useState, useEffect } from 'react'
import type { Message } from '../types'
import MessageCard from './MessageCard'

const API_URL = 'http://localhost:8080/api/messages'

function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [refreshCount, setRefreshCount] = useState(0)

  useEffect(() => {
    fetch(API_URL, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        setMessages(data)
        setLoading(false)
      })
  }, [refreshCount])

  function handleAdd() {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
      credentials: 'include',
    }).then(() => {
      setTitle('')
      setBody('')
      setRefreshCount(refreshCount + 1)
    })
  }

  function handleEdit(id: number, newTitle: string, newBody: string) {
    setMessages(messages.map((m) =>
      m.id === id ? { ...m, title: newTitle, body: newBody } : m
    ))
  }

  function handleRemove(id: number) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE', credentials: 'include' }).then(() => {
      setRefreshCount(refreshCount + 1)
    })
  }

  if (loading) {
    return <p>Carregando...</p>
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
        <MessageCard key={message.id} message={message} onRemove={handleRemove} onEdit={handleEdit} />
      ))}
    </div>
  )
}

export default MessageList
