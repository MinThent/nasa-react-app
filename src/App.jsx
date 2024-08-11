import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {

  const [showModal, setShowModal] = useState(false)

  
  return (
    <>
      <Main />
      {showModal && (<Sidebar></Sidebar>)}

      <Footer />
    </>
  )
}

export default App
