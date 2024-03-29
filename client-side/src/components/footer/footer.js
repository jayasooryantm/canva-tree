import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";

import "./footer.css";

function footer() {
    return (
        <footer>
            <div className='keep-down'>
                <div className='container-fluid bg-light'>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">

                                <h2><span className="badge bg-success">CanvaTree</span></h2>
                                <p className='para-justify'>Lorem ipsum dolor sit contur adipisicing elit, eiusmod Lorem ipsum dolor sit contur adipisicing elit</p>
                            </div>

                            <div className="col-md-3">

                                <h6>Trust & Legal</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item footer-list"><a href="/terms">Terms & Conditions</a></li>
                                    <li className="list-group-item footer-list"><a href="/privacy">Privacy Notice</a></li>
                                    <li className="list-group-item footer-list"><a href="/cookie">Cookie Notice</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Company</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item footer-list"><a href="/about">About</a></li>
                                    <li className="list-group-item footer-list"><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 icon-spacing">
                                <h6>Social</h6>
                                <a href="/"><i className="bi bi-meta icon-spacing"></i></a>
                                <a href="/"><i className="bi bi-twitter icon-spacing"></i></a>
                                <a href="/"><i className="bi bi-linkedin icon-spacing"></i></a>
                                <a href="/"><i className="bi bi-pinterest icon-spacing"></i></a>

                            </div>
                        </div>
                        <div className="copyright">
                            <p> &copy; CanvaTree 2022. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer >

    )
}

export default footer