import './App.css'
import { Loader, Navbar, Services, Transactions, Welcome, Footer } from "./components"

function App() {

  return (
  <div className='min-h-screen'>
    <div className="gradient-bg-welcome">
      <Navbar />
       <Welcome /> 
    </div>
    <Transactions />
  </div>
  )
}

export default App
