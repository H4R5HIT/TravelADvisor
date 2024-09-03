import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  MenuItem,
  Box,
  IconButton,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HotelIcon from "@material-ui/icons/Hotel";
import AttractionsIcon from "@material-ui/icons/LocalActivity";
import GridOnIcon from "@material-ui/icons/GridOn";
import ListIcon from "@material-ui/icons/List";
import { useStyles } from "./styles";

const List = ({places,childClicked,isLoading,type,setType,rating,setRating,}) => {
  console.log("this is places",places);
  

  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const [layout, setLayout] = useState("grid");

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        <b>Explore Dining, Accommodations, and Attractions Nearby</b>
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <form className={classes.form}>
            <TextField
              select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              variant="outlined"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
              SelectProps={{ className: classes.select }}
            >
              <MenuItem value="restaurants">
                <RestaurantIcon className={classes.icon}  /> Restaurants
              </MenuItem>
              <MenuItem value="hotels">
                <HotelIcon className={classes.icon} /> Accommodations
              </MenuItem>
              <MenuItem value="attractions">
                <AttractionsIcon className={classes.icon} /> Attractions
              </MenuItem>
            </TextField>
            <TextField
              select
              label="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              variant="outlined"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
              SelectProps={{ className: classes.select }}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0 ★</MenuItem>
              <MenuItem value={4}>Above 4.0 ★</MenuItem>
              <MenuItem value={4.5}>Above 4.5 ★</MenuItem>
            </TextField>
            {!isMobile &&(
              <Box  className={classes.iconsContainer}>
              <IconButton onClick={() => handleLayoutChange("grid")}>
                <GridOnIcon
                  className={
                    layout === "grid" ? classes.activeIcon : classes.icon
                  }
                />
              </IconButton>
              <IconButton onClick={() => handleLayoutChange("list")}>
                <ListIcon
                  className={
                    layout === "list" ? classes.activeIcon : classes.icon
                  }
                />
              </IconButton>
            </Box>
            )}
            
          </form>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid
                ref={elRefs[i]}
                item
                key={i}
                xs={12}
                sm={layout === "grid" ? 6 : 12}
                md={layout === "grid" ? 4 : 12}
              >
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
export default List;