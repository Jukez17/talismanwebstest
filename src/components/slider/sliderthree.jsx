import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { Carousel } from "antd"

import {
  useStyles,
  carousel,
  defaultSlide,
  img,
} from "../../components/slider/styles"

const CarouselThree = () => {
  const classes = useStyles()
  return (
    <Carousel autoplay effect="fade" dots={false} style={carousel}>
      <div>
        <Grid
          style={defaultSlide}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img
              alt="latest-1"
              style={img}
              src={require("../../images/slides/latest-1.jpg")}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          style={defaultSlide}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img
              alt="latest-2"
              style={img}
              src={require("../../images/slides/latest-2.jpg")}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          style={defaultSlide}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img
              alt="latest-3"
              style={img}
              src={require("../../images/slides/latest-3.jpg")}
            />
          </Grid>
        </Grid>
      </div>
    </Carousel>
  )
}

CarouselThree.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CarouselThree
