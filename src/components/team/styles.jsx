import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        color: '#989898',
        fontFamily: 'Raleway, sans-serif',

        textAlign: 'center',
        height: 'auto',
        width: 250,
        borderBottom: '10px solid #ff6f6f !important',
        padding: 20,
        justifyContent: 'space-around',
        '&:hover': {
          backgroundColor: 'rgba(100,100,100,0.1)'
        }
      },
}))