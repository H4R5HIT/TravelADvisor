import { useState , useEffect } from 'react'
import { CssBaseline , Grid } from '@mui/material'
import './App.css'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import Home from './Components/home/Home'
import { getPlaces } from './api'
import WeatherCard from './Components/weather/WeatherCard'



function App() {
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates,setCoordinates]=useState({})
  const [type,setType]=useState("restaurants")
  const [data,setData]=useState("")
  const [bounds,setBounds]=useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [rating, setRating] = useState("0");
  const [childClicked, setChildClicked] = useState(null);




  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude , longitude}})=>{
      setCoordinates({lat :latitude , lng:longitude})


    })
  },[])

useEffect(()=>{
  if(bounds){
    getPlaces(bounds.ne,bounds.sw).then((data)=>{
      console.log(data);
      setData(data)
      
    })
  }
},[coordinates,bounds])

useEffect(() => {
  if (places) {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }
}, [rating, places]);

useEffect(() => {
  if (bounds) {
    setIsLoading(true);
    getPlaces(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }
}, [type, bounds]);


  return (
    <>
     <CssBaseline/>
     <Header/>
     <Home/>
     
     <Grid container spacing ={3} style={{width : '100%'}}>
      <Grid item xs={12} md={4}>
      <WeatherCard coordinates={coordinates}/>
     </Grid>
     <Grid item xs={12} md={8}>
      <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} setChildClicked={setChildClicked}  
      places={filteredPlaces.length ? filteredPlaces : places}
      />
     </Grid>
     
     </Grid>

     <Grid container spacing={3} id="list-content">
          <Grid item xs={12}>
                          <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
            
          </Grid>
        </Grid>
    </>
  )
}

export default App
