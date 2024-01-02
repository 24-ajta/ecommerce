import CartIcon from "./IconComponent";// import smartphone3 from '../images/smartphone3.jpg';
import { Link } from "react-router-dom";
// import SignupComponent from "./SignupComponent";
function NavigationComponent(){

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand ms-5" href="#">
        Eapp
      </a>
      <Link to='/'>Home</Link>
      <a className="navbar-brand ms-5" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <form className="d-flex ms-5" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        
        <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
        
          
          <li className="nav-item">
            <a className="nav-link" href="#">
            <CartIcon />
          <span>Cart</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brands
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Shops
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Welcome
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Log in
                </a>
              </li>
              <li>
              <Link className="dropdown-item" to="/signup">
                    Sign up
                  </Link>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
 
    </>

    )
}

export default NavigationComponent;