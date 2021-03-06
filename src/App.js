import { Link } from "react-router-dom"
import { renderRoutes } from "react-router-config"

function App({ route }) {
  return (
    <div className="App">
      <div className="header">
        <ul className="clearfix">
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/login">登录</Link>
          </li>
          <li>
            <Link to="/about">关于我们</Link>
          </li>
        </ul>
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default App
