import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-success text-sm" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>



                        </ul>
                        <form className="d-flex">
                            <a href="/components/Cart"><button className="btn btn-outline-success" type="submit" >Cart <FaShoppingCart/></button></a>
                        </form>
                    </div>
                </div>
            </nav></div>
    )
}

export default Navbar