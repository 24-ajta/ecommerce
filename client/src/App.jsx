import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignupComponent from './components/SignupComponent.jsx';
import HomeComponent from "./components/HomeComponent.jsx";
import BodyComponent from "./components/BodyComponent.jsx";
function App() {

  return (
    <>
  
<Router>
  <Routes>
    
    <Route exact path='/' element={<HomeComponent/>}/>

    <Route path='/signup' element={<SignupComponent/>}/>
   
  </Routes>
</Router>

    </>
  )
}

export default App
