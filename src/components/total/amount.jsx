import React from "react"
import Grid from "@material-ui/core/Grid"
import {
  totalNumberStyle,
  textContainer,
  iconStyle,
} from "../../components/total/styles"
import User from "../../assets/user-regular.svg"
import LightBulb from "../../assets/lightbulb-regular.svg"
import Phone from "../../assets/mobile-alt-solid.svg"
import Laptop from "../../assets/laptop-code-solid.svg"

const TotalAmount = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      happyClients: 0,
      completedProjects: 0,
      appsDeveloped: 0,
      websitesDeveloped: 0,
    }
  }

  render() {
    const {
      happyClients,
      completedProjects,
      appsDeveloped,
      websitesDeveloped,
    } = this.state
    return (
      <>
        <Grid
          //className={classes.root}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={2}>
            <User style={iconStyle} />
            <p style={totalNumberStyle}>{happyClients}</p>
            <div style={textContainer}>
              <p>Happy Clients</p>
            </div>
          </Grid>
          <Grid item xs={2}>
            <LightBulb style={iconStyle} />
            <p style={totalNumberStyle}>{completedProjects}</p>
            <div style={textContainer}>
              <p>Projects Completed</p>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Phone style={iconStyle} />
            <p style={totalNumberStyle}>{appsDeveloped}</p>
            <div style={textContainer}>
              <p>Apps Developed</p>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Laptop style={iconStyle} />
            <p style={totalNumberStyle}>{websitesDeveloped}</p>
            <div style={textContainer}>
              <p>Websites Developed</p>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default TotalAmount
