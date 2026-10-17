
import LoginForm from './Components/LoginForm'
import Header from './Components/Header'
import Illustration from './Components/Illustration'
import './App.css'


 

function App() {
  return(
    <>
      <Header />
      <div className = 'app-container'>
        <LoginForm />
        <Illustration /> 
      </div>
    </>

  )
}

export default App
