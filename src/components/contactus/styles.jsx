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
    color: "#fff",
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
      color: '#ff6f6f',
      borderColor: '#ff6f6f',
    },
  },
  firstNameField: {
    backgroundColor: "rgba(100,100,100,0.08)",
    color: "#989898",
    width: 300,
    marginBottom: 15,
  },
  emailField: {
    backgroundColor: "rgba(100,100,100,0.08)",
    color: "#989898",
    width: 300,
    marginBottom: 15,
  },
  messageField: {
    flexDirection: "column",
    width: "100%",
    marginTop: theme.spacing(1),
    justifyContent: "space-around",
  },
  textArea: {
    backgroundColor: "rgba(100,100,100,0.08)",
    color: "#989898",
    borderWidth: 0,
    width: 300,
  },
}))
