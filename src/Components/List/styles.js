import { makeStyles } from "@material-ui/core/styles";

 export  const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    background: "rgb(214, 227, 245)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  textField: {
    flex: 1,
    margin: theme.spacing(1),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(214, 227, 245)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(214, 227, 245)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(214, 227, 245)",
      },
    },
  },
  inputLabel: {
    color: "rgb(214, 227, 245)",
  },
  select: {
    padding: theme.spacing(1.5, 2),
    color:"rgb(214, 227, 245)",
    "&:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(1.5, 2),
    },
    "& .MuiSelect-icon": {
      color: theme.palette.text.primary,
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  activeIcon: { 
    marginRight: theme.spacing(1),
    color: "white",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    marginBottom: "20px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
     borderRadius: theme.shape.borderRadius,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    "&::-webkit-scrollbar": {
      width: "8px",
    
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "gray",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "4px",
    },
  },
}));
