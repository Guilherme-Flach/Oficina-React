import type { Message } from '../types'

type MessageCardProps = {
  message: Message
}

function MessageCard({ message }: MessageCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{message.title}</h5>
        <p className="card-text">{message.body}</p>
        <small className="text-muted">{new Date(message.created_at).toLocaleString()}</small>
      </div>
    </div>
  )
}

export default MessageCard
