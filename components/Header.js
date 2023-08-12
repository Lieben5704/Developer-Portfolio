import Link from "next/link";

const Header = () => (
  <header className="header">
    {/* Navigation bar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Brand logo */}
      <Link href="/">
        <span className="navbar-brand">Developer Portfolio - Matthew Liebenberg</span>
      </Link>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* Home link */}
          <li className="nav-item">
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>
          {/* About link */}
          <li className="nav-item">
            <Link href="/about">
              <span className="nav-link">About</span>
            </Link>
          </li>
          {/* Projects link */}
          <li className="nav-item">
            <Link href="/projects">
              <span className="nav-link">Projects</span>
            </Link>
          </li>
          {/* Contact link */}
          <li className="nav-item">
            <Link href="/contact">
              <span className="nav-link">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* Inline styles */}
    <style jsx>{`
      /* Styling for the brand logo */
      .navbar-brand {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
      }

      /* Styling for each navbar item */
      .nav-item {
        margin-left: 20px;
      }

      /* Styling for the navbar link */
      .nav-link {
        color: #fff;
        cursor: pointer;
        transition: color 0.3s;
        font-size: 16px;
        font-weight: bold;
      }

      /* Styling when hovering over the navbar link */
      .nav-link:hover {
        color: #aaa;
      }
    `}</style>
  </header>
);

export default Header;
