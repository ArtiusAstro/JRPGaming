import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundImage: 'url(https://ayubatif.me/assets/res/jrpg_icon.jpg)',
      backgroundSize: 'cover',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <a
          href="/"
          style={{
            color: 'cyan',
            textDecoration: 'none',
          }}
        >
          {'JRPGaming'}
        </a>

      </h2>
      <a href="https://ayubatif.me"
        style={{ color: "cyan", textDecoration: 'none', float: "right" }} title="aa" >AA</a>
      <Link
        to="/tags"
        style={{
          color: 'cyan',
          marginRight: '27px',
          float: "right",
          textDecoration: 'none',
        }}
      >
        Game Platforms
      </Link>

    </div>
  </div>
)

export default Header
