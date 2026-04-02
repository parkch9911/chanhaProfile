import Header from "./Commons/Header"
import Footer from "./Commons/Footer"
import Home from "./Pages/Home"
import ThemeProvider from "./Context/ThemeContext"
import './index.css'
function App() {

  return (
    <>
    <ThemeProvider>
      <Header/>
      <Home/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
