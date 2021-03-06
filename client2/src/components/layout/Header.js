import React from 'react';
import {
    Link
} from 'react-router-dom';



const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">Capstone Project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/welcome">Welcome <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/feature">Feature</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Register</Link>
                </li>


            <li className="nav-item">
                <Link className="nav-link" to="/chart">Seating Chart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signin">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/forum">Forum</Link>
            </li>
            <li className="nav-item">

                <Link className="nav-link" to="/payment">Payment</Link>

                <Link className="nav-link" to="/userprofile">Profile</Link>

            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signout">Logout</Link>
            </li>
       
        </ul>
    </div>
</nav>

    </>
  )
}

export default Header;