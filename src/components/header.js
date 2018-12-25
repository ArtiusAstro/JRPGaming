import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
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
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {'JRPGaming'}
        </a>

      </h2>
      <a href="https://ayubatif.me"
        style={{ color: "white", float: "right" }} title="github" >AA</a>
      <Link
        to="/tags"
        style={{
          color: 'white',
          marginRight: '27px',
          float: "right",
        }}
      >
        Game Platforms
      </Link>

    </div>
  </div>
)

export default Header
