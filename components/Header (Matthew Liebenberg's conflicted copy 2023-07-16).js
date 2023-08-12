import Link from "next/link";

const Header = () => (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <span className="navbar-brand">Developer Portfolio - Matthew Liebenberg</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <span className="nav-link">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <span className="nav-link">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <span className="nav-link">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <style jsx>{`
      .navbar-brand {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
      }
      .navbar-toggler {
        background-color: #fff;
      }
      .navbar-toggler-icon {
        background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3e%3cpath stroke="%23${encodeURI(
          "#fff"
        ).slice(1)}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3e%3c/svg%3e');
      }
      .nav-item {
        margin-left: 20px;
      }
      .nav-link {
        color: #fff;
        cursor: pointer;
        transition: color 0.3s;
        font-size: 16px;
        font-weight: bold;
      }
      .nav-link:hover {
        color: #aaa;
      }
    `}</style>
  </header>
);

export default Header;
