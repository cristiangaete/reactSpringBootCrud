import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import Navbar from './components/Navbar'

import {Container} from '@mui/material'

export default function App() {
  return (
  <div>
      <BrowserRouter>
      <Navbar/>
       <Container>
       <Routes>
            <Route path='/' element={<StudentList/>}/>
            <Route path='/students/new' element={<StudentForm/>}/>
            <Route path='/students/new' element={<StudentForm/>}/>
            <Route path='/students/new' element={<StudentForm/>}/>

        </Routes>
       </Container>
      </BrowserRouter>
  </div>
  )
}
