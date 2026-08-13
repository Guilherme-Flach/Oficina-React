import { memo, useState } from 'react'
import type { Message } from '../types'

type MessageCardProps = {
  message: Message
  onRemove: (id: number) => void
  onEdit: (id: number, title: string, body: string) => void
}

function MessageCard({ message, onRemove, onEdit }: MessageCardProps) {
  console.log('MessageCard render', message.id)
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(message.title)
  const [editBody, setEditBody] = useState(message.body)

  function handleSave() {
    onEdit(message.id, editTitle, editBody)
    setEditing(false)
  }

  function handleCancel() {
    setEditTitle(message.title)
    setEditBody(message.body)
    setEditing(false)
  }

  if (editing) {
    return (
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <input
            className="form-control mb-2"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            rows={3}
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
          <div className="d-flex gap-2">
            <button className="btn btn-success btn-sm" onClick={handleSave}>
              Salvar
            </button>
            <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{message.title}</h5>
        <p className="card-text">{message.body}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{new Date(message.created_at).toLocaleString()}</small>
          <div className="d-flex gap-2">
            <button className="btn btn-warning btn-sm" onClick={() => setEditing(true)}>
              Editar
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => onRemove(message.id)}>
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(MessageCard)
