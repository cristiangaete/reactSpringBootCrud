import { Description } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function StudentForm() {

  const [task, setTask] = useState({
    nombres:'',
    apellidos: '',
    edad: '',
  })

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    console.log(task)
    const res = await fetch('http://localhost:8080/student/',{
      method: "POST",
      body: JSON.stringify(task),
      headers: { 'Content-Type': 'application/json'}
    })
    const data = await res.json()
    console.log(data)
    setLoading(false)

    navigate('/')
  }

  const handleChange = e =>{
    
    setTask({...task, [e.target.name]: e.target.value})
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: '#1e272e', padding: '1rem' }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Create Student
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField 
                name='nombres'
                variant="outlined"
                label="Write the title"
                sx={{ display: 'block', margin: '1rem' }}
                onChange={handleChange}
                inputProps={{style: {color:'white'}}}
                InputLabelProps={{style: {color:'white'}}}
              />
              <TextField
              name='apellidos'
                variant="outlined"
                label="Write the description"
                sx={{ display: 'block', margin: '1rem' }}
                onChange={handleChange}

                inputProps={{style: {color:'white'}}}
                InputLabelProps={{style: {color:'white'}}}
              />
             <TextField 
              name='edad'
              variant="standard"
                label="Write the age"
                sx={{ display: 'block', margin: '1rem' }}
                onChange={handleChange}
             inputProps={{ type: 'number',style: {color:'white'} }} 
             InputLabelProps={{style: {color:'white'}}}
             />
              <Button variant="contained" color="primary" type="submit" disabled={!task.nombres || !task.apellidos || !task.edad}>
                {loading ? <CircularProgress color='inherit'/>: 'Create'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
