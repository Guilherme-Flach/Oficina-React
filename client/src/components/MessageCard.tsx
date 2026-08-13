import type { Message } from '../types'

type MessageCardProps = {
  message: Message
  onRemove: (id: number) => void
}

function MessageCard({ message, onRemove }: MessageCardProps) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{message.title}</h5>
        <p className="card-text">{message.body}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{new Date(message.created_at).toLocaleString()}</small>
          <button className="btn btn-danger btn-sm" onClick={() => onRemove(message.id)}>
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
