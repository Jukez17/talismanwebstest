import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CardMedia from "@material-ui/core/CardMedia"

import { container, useStyles, h3 } from "../whyus/styles"

const WhyUs = () => {
  const classes = useStyles()
  return (
    <div style={container}>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="space-around"
        alignItems="baseline"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <CardMedia
              className={classes.media}
              image={require("../../images/whyus/icon-1.png")}
            />
            <p style={h3}>Modern</p>
            <p>
              {" "}
              We develop sleek, modern and attractive websites and apps for your
              business or personal use.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.middlePaper}>
            <CardMedia
              className={classes.media}
              image={require("../../images/whyus/icon-2.png")}
            />
            <p style={h3}>Simple</p>
            <p>
              {" "}
              We make expanding your business to the digital world simple and
              can handle everything from development to webhosting for you!
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.rightPaper}>
            <CardMedia
              className={classes.media}
              image={require("../../images/whyus/icon-3.png")}
            />
            <p style={h3}>Flexible</p>
            <p>
              {" "}
              We base your project around your needs and can continue support
              even after the project has been finished.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

WhyUs.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WhyUs
