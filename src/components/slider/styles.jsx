import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignSelf: "center",
    //flexWrap: 'wrap',
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    alignSelf: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    marginTop: theme.spacing(5),
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#00000000",
    color: "#343434",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    padding: 12,
    borderRadius: 0,
    borderColor: "#fff",
    borderWidth: 4,
    lineHeight: 1,
    width: 200,
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    media: {
      width: 100,
      height: 100,
      marginBottom: 20,
      marginLeft: 55
    },
  },
}))

export const containerGrid = {
  marginTop: 100
}

export const defaultSlide = {
  backgroundColor: '#343434',
  height: 400,
}

export const slideOne = {
  backgroundColor: '#fbcf61',
  height: 400,
}

export const slideTwo = {
  backgroundColor: '#ff6f6f',
  height: 400,
}

export const slideThree = {
  backgroundColor: '#a8d164',
  height: 400,
}

export const carousel = {
    width: "100%",
    height: 400,
    
}

export const h1 = {
  color: '#fff',
  fontSize: 40,
  fontFamily: 'Raleway, sans-serif',
  //marginTop: 25,
}

export const text = {
  color: '#343434',
  fontSize: 35,
  fontFamily: 'Raleway, sans-serif',  
  textAlign: 'center',
  marginLeft: 60,
  marginRight: 60
}

export const boldText = {
  color: '#343434',
  fontSize: 35,
  fontFamily: 'Raleway, sans-serif',  
  fontWeight: 700,
  textAlign: 'center',
  marginLeft: 60,
  marginRight: 60,
}

export const quoteText = {
  color: '#fff',
  fontSize: 40,
  fontFamily: 'Raleway, sans-serif',  
  fontWeight: 700,
  textAlign: 'center',
  marginLeft: 60,
  marginRight: 60,
}

export const person = {
  color: '#fff',
  fontSize: 40,
  textAlign: 'center',
  fontFamily: 'Raleway, sans-serif',
}



export const bold = {
  color: '#343434',
  fontWeight: 'bold'
}

export const spanStyle = {
  color: '#fff',
  fontSize: 40,
  fontFamily: 'fontello',
  top: 20,
  left: -55,
}

export const slideImg = {
  width: 414,
  height: 350

}

export const img = {
  position: 'absolute',
  bottom: -30,
 paddingLeft: 75,
 paddingRight: 35
}
