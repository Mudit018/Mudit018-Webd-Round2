import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-collapse">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SportiCheck</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/leagues">Leagues</Link>
                        </li> */}

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/leagues" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Leagues
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/leagues">All Leagues</Link></li>
                                <li><Link className="dropdown-item" to="/superliga">Superliga</Link></li>
                                <li><Link className="dropdown-item" to="/premiership">Premiership</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Players
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* <li><Link className="dropdown-item" to="/leagues">All Leagues</Link></li> */}
                                <li><Link className="dropdown-item" to="/playersuper">Superliga</Link></li>
                                <li><Link className="dropdown-item" to="/playerpremier">Premiership</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/scores" tabindex="-1" aria-disabled="true">Matches</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Standings
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/standsuper">Superliga</Link></li>
                                <li><Link className="dropdown-item" to="/standpremier">Premiership</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}
 
export default Navbar;