import { MOCK_MESSAGES } from '../types'
import MessageCard from './MessageCard'

function MessageList() {
  return (
    <div className="message-list">
      {MOCK_MESSAGES.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageList
