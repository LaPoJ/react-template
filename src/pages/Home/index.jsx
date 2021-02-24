import React, { Component } from "react"
import { Link } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
// import routes from "../router/router";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <h2>This is the page for show home.</h2>
        <ul>
          <li>
            <Link to="/home/test01">test01</Link>
          </li>
          <li>
            <Link to="/home/test02">test02</Link>
          </li>
        </ul>
        { renderRoutes(this.props.route.routes) }
      </React.Fragment>
    )
  }
}
