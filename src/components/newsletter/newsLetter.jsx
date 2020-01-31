import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'

import {
  newsLetterStyle,
  sectionHeader,
  linkText
} from '../newsletter/styles'


const NewsLetter = () => {

  return (
      <div style={newsLetterStyle}>
      <Grid container spacing={3}>
        <Grid item xs>
        <div style={linkText}>
            <p style={sectionHeader}>Legal Stuff</p>
            <Link to="/termsofservice/">Terms of Service</Link>
            <br/>
            <Link to="/privacypolicies/">Privacy Policy</Link>
        </div>
        </Grid>
        <Grid item xs>
        <p style={sectionHeader}>Recent Projects</p>
        </Grid>
      </Grid>
      </div>
  )
}

NewsLetter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NewsLetter
