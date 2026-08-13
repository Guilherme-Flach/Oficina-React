import MessageList from './components/MessageList'

function App() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-4 text-center">Meu Board de Mensagens</h1>
          <MessageList />
        </div>
      </div>
    </div>
  )
}

export default App
