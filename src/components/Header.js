import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'bootstrap';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Header() {
    return (

        <>
            <div className='header'>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                    <div className="container">
                        <a href="#" className="navbar-brand">Protirodh</a>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <div className="navbar-toggler-icon"></div>
                        </button>
                        <div clasName="collapse navbar-collapse" id="navmenu">


                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <a href="E:\2-2 project\Protirodh\index.html" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item active">
                                    <a href="E:\2-2 project\Protirodh\registration.html" className="nav-link">Registration</a>
                                </li>

                                <li className="nav-item active">
                                    <a href="E:\2-2 project\Protirodh\status.html" className="nav-link">Status</a>
                                </li>
                                <li className="nav-item active">
                                    <a href="E:\2-2 project\Protirodh\vaccine card.html" className="nav-link">Vaccine Card</a>
                                </li>
                                <li className="nav-item active">
                                    <a href="E:\2-2 project\Protirodh\certificate.html" className="nav-link">Certificate</a>
                                </li>
                                <li className="nav-item active">
                                    <a href="E:\2-2 project\Protirodh\verify certificate.html" className="nav-link">Verify Certificate</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Header