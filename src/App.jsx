import './App.css'
import CreateBlog from './components/CreateBlog'
import Home from './components/Home';
import IndividualBlog from './components/IndividualBlog';
import UpdateBlog from './components/UpdateBlog';
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <>
      <NavBar title="Blog Application"/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createblog' element={<CreateBlog />}/>
        <Route path="/individualblog/:id" element={<IndividualBlog />}/>
        <Route path="/updateblog/:id" element={<UpdateBlog />}/>
      </Routes>
    </>
  )
}

export default App
