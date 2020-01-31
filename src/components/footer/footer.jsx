/* Footer component */

import React from "react"
import PropTypes from "prop-types"

import {
  footerStyle,
  footerText,
  link
} from '../footer/style'

const Footer = () => {

  return (
    <>
      <div style={footerStyle}>
        <footer style={footerText}>
         © Copyright {new Date().getFullYear()},
          {` `}
          <a style={link} href="https://www.talismanwebs.com/">Talisman Webs</a>
        </footer>
      </div>
    </>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
