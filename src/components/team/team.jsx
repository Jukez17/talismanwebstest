import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
//import CardMedia from "@material-ui/core/CardMedia"

import { useStyles } from "../team/styles"

const MeetTeam = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="space-around"
        alignItems="baseline"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {/* <CardMedia
              className={classes.media}
              image={require("../../images/whyus/icon-1.png")}
            /> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            repellat possimus laboriosam et.
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {/* <CardMedia
              className={classes.media}
              image={require("../../images/whyus/icon-2.png")}
            /> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            repellat possimus laboriosam et.
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

MeetTeam.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MeetTeam
