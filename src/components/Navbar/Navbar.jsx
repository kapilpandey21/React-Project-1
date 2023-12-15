import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>

            <nav
                className="navbar py-3 navbar-expand-lg "
                style={{ backgroundColor: props.NavColor, color: "black", boxShadow: "0px 1px 2px black" }}
            >
                <div className="container-fluid">
                    <a
                        className="navbar-brand "
                        style={{ color: props.TextColor }}
                        href="#"
                    >
                        {props.logo}
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
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active "
                                    style={{ color: props.TextColor }}
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={{ color: props.TextColor }}
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={{ color: props.TextColor }}
                                    to="/texteditor"
                                >
                                    TextEditor
                                </Link>
                            </li>

                            
                        </ul>

                    </div>
                </div>

                <div
                    style={{ position: "absolute", right: "2rem", top: "1.5rem" }}
                    className="form-check form-switch d-flex gap-1 align-item-center "
                >
                    <input
                        className="form-check-input"
                        onClick={props.changeColor}
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                    />
                    <p style={{ color: props.TextColor }}>{props.NavColor}</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar