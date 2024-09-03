import React from 'react'
import Input from './Input'
import homeImg from "../../images/home.png";
import homeBack from "../../images/homeBack.png";
import Logo from "../../images/logo.png";
import { width } from '@mui/system';
import zIndex from '@material-ui/core/styles/zIndex';
import gradient from '@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient';


const Home = ({setCoordinates}) => {
  const onChangeFunction = () => {
    return 0
  }
  return (
    <>
      <div style={styles.container}>
        <img src={homeBack} alt="" style={styles.backImg} />
        <header style={styles.header}>
          <div style={styles.logo}>
            <img src={Logo} alt="" style={styles.logoImg}/>
            {/* <span style={styles.logoText}>WANDER WIZARD</span>
            <span style={styles.subText}>Discover Your Next Adventure</span> */}
          </div>
          <nav style={styles.nav}>
            <a href="#" style={styles.navLink}>About us</a>
            <a href="#" style={styles.navLink}>Tours</a>
            <a href="#" style={styles.navLink}>Services</a>
          </nav>
          <div style={styles.contact}>
            <span><Input setCoordinates={setCoordinates}/></span>
          </div>
        </header>



        <main style={styles.mainContent}>
          <div style={styles.imageContainer}>
            {/* <img
            src={homeImg}
            style={styles.image}
            className='imageStyle '
          /> */}
          </div>

          <div style={styles.textContainer}>
            <h1 style={styles.title}><b>Your Journey Begins Here </b></h1>
            <p style={styles.subtitle}>Uncover the world's most captivating destinations with Wander Wizard. Whether you're seeking the allure of ancient cities, the tranquility of remote landscapes, or the excitement of cultural festivals, we're here to guide you every step of the way. Let us craft your next adventure, personalized to your unique tastes and desires</p>
          </div>
        </main>
      </div>
    </>
  )
}
const styles = {
  container: {
    fontFamily: 'Raleway',
    color: '#fff',
    background: 'linear-gradient(to right, #029EF5, #205AEF)',
    minHeight: '100vh',
    padding: '0 50px',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1px 0 0 0 ',
    marginLeft: -20
  },
  backImg: {
    position: 'absolute',
    mixBlendMode: "multiply",
    zIndex: "0",
    bottom: 0,
    left: 0
  }
  ,
  logo: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    display: "inline-block",
    whitespace: "nowrap",
    left: 0,

  },
  logoImg:{
        padding:"12px 0 0 0",
        mixBlendMode:"multiply"
        , width:"15vw"
   } ,
  logoText: {
    fontSize: '30px',
    fontWeight: 'bold',

  },
  subText: {
    display: "inline-block",
    whitespace: "nowrap",

    fontSize: '16px',
    // backgroundColor: '#fff',
    // paddingLeft: 350,
    width:400,
    Top:0,
    borderRadius: '20px',
    color: '#0052cc',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    // margin: '20px 0',
    paddingRight: 10
  },
  navLink: {
    color:"black",
    margin: '0 15px',
    textDecoration: 'none',
    fontWeight:"bold",
    fontSize: '16px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    alignItems: 'flexStart',
    flexDirection: 'row', // Align items in a row (image left, text right)
    textAlign: 'left',
    padding: '50px 0',
    position: 'relative',
    height: 'calc(100vh - 100px)', // Adjust the height to leave room for header
  },
  // imageContainer: {
  //   width: '50%', // Set the image width to 150% of the container
  //   position: 'relative',
  //   bottom: 0,
  //   left: -80,
  // },
  // imageStyle:{
  //   width: '100%',
  //   height: 'auto',
  //   display: 'block',
  // },
  // image: {
  //   width:"100000%",
  //   maxWidth: '400px',
  //   borderRadius: '10px',
  // },
  textContainer: {
    width: '50%', // Adjust the text width to fit nicely next to the image
    marginLeft: 30, // Push the text container to the right
    marginTop: 30, // Push the text container to the right
    // paddingRight: '50px', // Add padding to keep the text aligned well
    maxWidth: '650px',
    
    left: 0
  },
  title: {
    fontSize: '50px',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '40px',
    paddingLeft:5
  },
  button: {
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#FF4500',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};
export default Home
