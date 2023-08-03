import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div  >
      <nav id='BrowserRouterNav'>
        <ul >
          <li>
            <Link to="/">Mainpage</Link>
          </li>
          <li>
            <Link to="/ciao">Storia</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;