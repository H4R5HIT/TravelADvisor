import axios from "axios";
// require('dotenv').config();
export const getPlaces = async (type, ne,sw)=>{
    
    const URL= `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;


    try{
       
        const {data:{data}} = await axios.get(URL,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
          
              },
              headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPID_API,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              }
        });
        
        return data;

    }
    catch(error)
    {
        console.log(error);
        
    }
}
export const weatherData= async (lat,lng)=>{
    if(lat && lng){
     
          
          try {
              const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_WEATHER_API}`);
       
              return response.data;
          } catch (error) {
              console.error(error);
          }
    }

}