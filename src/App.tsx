import reactLogo from './assets/react.svg'
import './App.css'
import Header from './home/home.tsx'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
