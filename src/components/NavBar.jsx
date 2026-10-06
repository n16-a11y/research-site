import { NavLink } from "react-router-dom";
import site from "../data/site.json";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          {site.logo && (
            <img src={site.logo} alt="" className="navbar-logo" />
          )}
          <span>{site.shortName}</span>
        </NavLink>
        <nav className="navbar-links">
          {site.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "navbar-link navbar-link-active" : "navbar-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
