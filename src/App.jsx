import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login'
import Browse from './components/Browse'
import Header from './components/Header'
import Details from './components/Details'


function App() {

  return (
    
       <BrowserRouter>
             <Routes>
               
               <Route path='/' element={<Login/>} />
               <Route path='/browse' element={<Browse/>} /> 
               <Route path='/details/:id' element={<Details/>} /> 
             </Routes>
        </BrowserRouter>
   
  
  )
}

export default App
