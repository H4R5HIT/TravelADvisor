import React, { useState , useEffect} from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  IconButton,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styled from "styled-components";

import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import TripOriginIcon from "@material-ui/icons/TripOrigin";
import Rating from '@mui/material/Rating';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core/styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender && selected) {
      refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setIsFirstRender(false);
    }
  }, [selected]);

  return (
    
    <Card className={classes.card} elevation={6} onClick={() => window.open(place.website, "_blank")}>
      <CardMedia
        className={classes.media}
        image={
          place.photo
            ? place.photo.images.large.url
            : "./src/images/this-image-has-been-removed.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" className={classes.title}>
          <b>{place.name}</b>
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" className={classes.numReviews}>
          <div className="flex items-center mt-2 text-gray-600">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-current text-yellow-500"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="ml-2">{place.rating} ({place.num_reviews} reviews)</span>
        </div>
          </Typography>
        </Box>
        {/* <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">
            <b>Price: </b>
            {place.price_level}
          </Typography>
        </Box> */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">
            <b>Ranking: </b>
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          
          <Box
            key={award.display_name}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={1}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        <Box display="flex" flexWrap="wrap" my={1}>
          {place?.cuisine?.slice(0,5).map(({ name }) => {
                const shortenedName = name.split(' ').slice(0, 1).join(' ');

            return (<Chip
              key={name}
              size="small"
              label={shortenedName}
              className={classes.chip}
            />)
})}
        </Box>
        {place?.address ? (
          <Typography
            gutterBottom
            variant="subtitle2"
            // color="white"
            className={classes.subtitle}
          >
            {/* input.length > 5 ? `${input.substring(0, 5)}...` : input; */}
            <LocationOnIcon /> &nbsp; {place.address.length > 40 ? place.address.substring(0,40) : place.address}...
          </Typography>
        ) : (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="primary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> &nbsp; No address available
          </Typography>
        )}

        {place?.phone ? (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="inherit"
            className={classes.spacing}
          >
            <PhoneIcon />
            &nbsp; {place.phone}
          </Typography>
        ) : (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> &nbsp;No contact available
          </Typography>
        )}

        {/* <CardActions className={classes.cardActions}>

          <button className={classes.botonElegante}   onClick={() => window.open(place.website, "_blank")}> Website
          </button>
        
        <IconButton onClick={handleFavoriteClick}>
          {isFavorited ? (
            <FavoriteIcon className={classes.favoriteIcon} />
          ) : (
            <FavoriteBorderIcon className={classes.favoriteIcon} />
          )}
        </IconButton>
        <IconButton onClick={() => alert("Share functionality coming soon!")}>
          <ShareIcon className={classes.shareIcon} />
        </IconButton>
      </CardActions> */}
    </CardContent>
    </Card >
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    cursor:"pointer",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0)",
    // color: theme.palette.text.primary,
    overflow: "hidden",
    transition: "box-shadow 0.1s ease-in-out", // Smooth transition
    "&:hover": {
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Box shadow on hove
    },
  },

  media: {
    margin:"10px 10px 0 10px",
    height: 300,
    borderRadius: "15px 15px 0 0",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: 0,
  },
  chip: {
    margin: "5px 5px 5px 0",
    background: "gray",
    color: "white",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    background: "linear-gradient(135deg, #f37335 0%, #fda085 100%)",
    color: theme.palette.common.white,
    "&:hover": {
      background: "linear-gradient(135deg, #fda085 0%, #f37335 100%)",
    },
  },
  cardActions: {
    justifyContent: "space-between",
  },
  numReviews: {
    marginLeft: theme.spacing(1),
    
    display: "flex",
    alignItems: "center",
  },
  details: {
    fontWeight: "bold",
  },
  favoriteIcon: {
    color: theme.palette.secondary.main,
  },
  shareIcon: {
    color: theme.palette.primary.main,
  },
  botonElegante: {
    padding: '15px 30px',
    border: '2px solid #2c2c2c',
    // backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '30px',
    transition: 'all 0.4s ease',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    fontWeight: 'bold',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)',
      transform: 'scale(0)',
      transition: 'transform 0.5s ease',
    },
    '&:hover::after': {
      transform: 'scale(4)',
    },
    '&:hover': {
      borderColor: '#666666',
      background: '#292929',
    },
  
  },

}));

export default PlaceDetails;
