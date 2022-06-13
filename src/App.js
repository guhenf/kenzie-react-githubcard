import { useState } from "react"
import axios from "axios"
import Search from "./components/Search"
import Card from "./components/Card"
import "./App.css"

function App() {
  const [dados, setDados] = useState({})
  const [error, setError] = useState(false)

  function onClick(data) {
    axios
      .get(`https://api.github.com/repos/${data}`)
      .then((response) => response.data)
      .then((response) => setDados(response))
      .then(setError(false))
      .catch(handleError())
  }

  function handleError() {
    setError(true)
    setDados({})
  }
  return (
    <div className="App">
      <header className="App-header">
        <Search onClick={onClick} />

        {dados.name ? (
          <Card
            name={dados.name}
            description={dados.description}
            html_url={dados.html_url}
            img_url={dados.owner.avatar_url}
          />
        ) : (
          error && <div className="error">Página não encontrada.</div>
        )}
      </header>
    </div>
  )
}

export default App
