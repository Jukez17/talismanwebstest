import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { headerLogo } from "./styles"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <img
          alt="icon"
          style={headerLogo}
          src={require("../images/header/talismanwebs-icon.png")}
        />
        <Link
          to="/"
          style={{
            color: `#343434`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
