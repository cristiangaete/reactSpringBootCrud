import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';


export default function StudentList() {
  const [students, setStudents] = useState([])

  const loadStudent = async () => {
    const response = await fetch('http://localhost:8080/student/')
    const data = await response.json()
    setStudents(data.resultado.student)
  }
  useEffect(() => {
    loadStudent()
  }, [])

  return (
    <>
      <h1>StudentList</h1>

      {students.map((student) => (
        <Card
          style={{ marginBottom: '.7rem', backgroundColor: 'white' }}
          key={student.id}
        >
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ color: 'black' }}>
            <Typography>id - {student.id}</Typography>

              <Typography>Name - {student.nombres}</Typography>
              <Typography>Last name -  {student.apellidos}</Typography>
              <Typography>Age - {student.edad}</Typography>
            </div>
            <div>
              <IconButton
                variant="contained"
                color="info"
                onClick={() => console.log('edit')}
              >
                <UpdateIcon/>
              </IconButton>
              <IconButton
                variant="contained"
                color="warning"
                onClick={() => console.log('delete')}
                style={{ marginLeft: '.5rem' }}
              >
                <DeleteIcon/>
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
