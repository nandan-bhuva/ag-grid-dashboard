import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">

      <div className="logo">
        @<span>Advanced Grid</span>
      </div>


      <nav className="nav">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : ""}
        >
          Dashboard
        </Link>
      </nav>


      <div className="header-actions">
        {/* Under Development */}
        <button className="btn">Login</button>
      </div>

    </header>
  );
};