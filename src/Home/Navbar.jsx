import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            {/* Container wrapper */}
            <div className="container-fluid">
                {/* Toggle button */}
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                {/* Collapsible wrapper */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    {/* Navbar brand */}
                    <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="15"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </NavLink>
                    {/* Left links */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">
                                Team
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                    {/* Left links */}
                </div>
                {/* Collapsible wrapper */}

                {/* Right elements */}
                <div className="d-flex align-items-center">
                    {/* Icon */}
                    <NavLink className="text-reset me-3" to="#">
                        <i className="fas fa-shopping-cart"></i>
                    </NavLink>

                    {/* Notifications */}
                    <div className="dropdown">
                        <NavLink
                            data-mdb-dropdown-init
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-expanded="false">
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">
                                1
                            </span>
                        </NavLink>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <NavLink className="dropdown-item" to="#">
                                    Some news
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="#">
                                    Another news
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="#">
                                    Something else here
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Avatar */}
                    <div className="dropdown">
                        <NavLink
                            data-mdb-dropdown-init
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            to="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            aria-expanded="false">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of NavLink Man"
                                loading="lazy"
                            />
                        </NavLink>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <NavLink className="dropdown-item" to="#">
                                    My profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="#">
                                    Settings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="#">
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Right elements */}
            </div>
            {/* Container wrapper */}
        </nav>
    );
}

export default Navbar;
