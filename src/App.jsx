import { useState } from 'react'
import { CssBaseline , Grid } from '@mui/material'
import './App.css'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import Home from './Components/home/Home'


function App() {


  return (
    <>
     <CssBaseline/>
     <Header/>
     <Home/>
     <Grid container spacing ={3} style={{width : '100%'}}>
      <Grid item xs={12} md={4}>
      <List/>
     </Grid>
     <Grid item xs={12} md={8}>
      <Map/>
     </Grid>
     </Grid>
    </>
  )
}

export default App