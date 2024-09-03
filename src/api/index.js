import axios from "axios";
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
                'x-rapidapi-key': '21b292c071msh874858fb6434357p15b83djsn18361062b3c7',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              }
        });
        console.log("it is api dadta",data);
        
        return data;

    }
    catch(error)
    {
        console.log(error);
        
    }
}
const weatheApi="48df3d01a56f4bdd63b80db6f1fa1a16"
export const weatherData= async (lat,lng)=>{
    if(lat && lng){
     
          
          try {
              const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatheApi}`);
       
              return response.data;
          } catch (error) {
              console.error(error);
          }
    }

}