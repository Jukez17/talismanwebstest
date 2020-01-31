import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { Carousel } from "antd"

import {
  containerGrid,
  useStyles,
  carousel,
  slideTwo,
  boldText,
  person,
  spanStyle
} from "../../components/slider/styles"

const Bold = ({ children }) => <p style={boldText}>{children}</p>

const CarouselTwo = () => {
  const classes = useStyles()
  return (
    <Carousel autoplay effect="fade" dots={false} style={carousel}>
      <div>
        <Grid
          style={slideTwo}
          className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="baseline"
        >
          <Grid item xs={12}>
            <p style={containerGrid}>
              <Bold>
                <span style={spanStyle}>"</span>Design to express,
                <br />
                not to impress.<span style={spanStyle}>"</span>
              </Bold>
            </p>
            <p style={person}>- John Tanedo -</p>
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
          alignItems="baseline"
        >
          <Grid direction="column" alignItems="center" item xs={12}>
            <p style={containerGrid}>
              <Bold>
              <span style={spanStyle}>"</span>Lorem ipsum dolor
                <br />
                sit amet consectetur.<span style={spanStyle}>"</span>
              </Bold>
            </p>
            <p style={person}>- Catrin Jhonson -</p>
          </Grid>
        </Grid>
      </div>
    </Carousel>
  )
}

CarouselTwo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CarouselTwo
