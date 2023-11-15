import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a MIDI Store'/>
    </>
  )
}

export default App
