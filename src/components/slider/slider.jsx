import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { Carousel } from "antd"

import {
  useStyles,
  carousel,
  slideOne,
  slideTwo,
  slideThree,
  h1,
  slideImg,
} from "../../components/slider/styles"

const Bold = ({ children }) => (
  <p style={{ fontWeight: "bold", color: "#343434" }}>{children}</p>
)

const CarouselOne = () => {
  const classes = useStyles()
  return (
    <Carousel autoplay effect="fade" style={carousel}>
      <div>
        <Grid
          style={slideOne}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={3}>
            <p style={h1}>
              We Build <Bold>Websites.</Bold>
            </p>
            <p>
              We work with you to create a professional, simple website for your
              personal project or business.
            </p>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {}}
            >
              Get More Info
            </Button>
          </Grid>
          <Grid item xs={3}>
            <img
              alt="slide-1"
              style={slideImg}
              src={require("../../images/slides/slide-1.png")}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          style={slideTwo}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={3}>
            <p style={h1}>
              We Develop <Bold>Apps.</Bold>
            </p>
            <p>
              We offer affordable App development for your business on Android
              and iOS.
            </p>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {}}
            >
              Get More Info
            </Button>
          </Grid>
          <Grid item xs={3}>
            <img
              alt="slide-2"
              style={slideImg}
              src={require("../../images/slides/slide-2.png")}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          style={slideThree}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={3}>
            <p style={h1}>
              We <Bold>Deliver.</Bold>
            </p>
            <p>
              We can handle all website and app development, web hosting, domain
              registration and much more delivering a hassle free experience for
              our clients.
            </p>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {}}
            >
              Get More Info
            </Button>
          </Grid>
          <Grid item xs={0}>
            <img
              alt="slide-3"
              style={slideImg}
              src={require("../../images/slides/slide-3.png")}
            />
          </Grid>
        </Grid>
      </div>
    </Carousel>
  )
}

CarouselOne.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CarouselOne
