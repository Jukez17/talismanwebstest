import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        color: '#989898',
        fontFamily: 'Raleway, sans-serif',

        textAlign: 'center',
        height: 'auto',
        width: 250,
        borderBottom: '10px solid #fbcf61',
        padding: 20,
        justifyContent: 'space-around',
        marginBottom: 25,
        '&:hover': {
          backgroundColor: 'rgba(100,100,100,0.1)'
        }
      },
      middlePaper: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        color: '#989898',
        
        fontFamily: 'Raleway, sans-serif',

        textAlign: 'center',
        height: 'auto',
        width: 250,
        borderBottom: '10px solid #ff6f6f !important',
        padding: 20,
        marginBottom: 25,
        '&:hover': {
          backgroundColor: 'rgba(100,100,100,0.1)'
        },
      },
      rightPaper: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        color: '#989898',
        fontFamily: 'Raleway, sans-serif',

        textAlign: 'center',
        height: 'auto',
        width: 250,
        borderBottom: '10px solid #a8d164 !important',
        padding: 20,
        marginBottom: 25,
        '&:hover': {
          backgroundColor: 'rgba(100,100,100,0.1)'
        },
      },
      media: {
        width: 100,
        height: 100,
        flexDirection: 'row',

        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginLeft: 55
      }
}))


export const container = {
    marginTop: 35,
    padding: 20,
    width: '100%',
}

export const h3 = {
  color: '#fff',
  fontSize: 24,
  fontFamily: 'Raleway, sans-serif',
}

export const img = {
    width: 100,
    height: 100,
    alignSelf: 'center'
}