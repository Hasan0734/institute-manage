import { faAngleRight, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FooterSection.css'
import logo from '../../../image/dulogo-light_new.png'
const firstLinkItem = ['Approved NOCs', 'Jobs', 'E-Tender', 'DU Tender']
const secondLinkitem = ['DU Form', 'DU Institutional Repository', 'DU Barta', 'DU Library']
const thirdLinkitem = ['DU Result', 'DU Alumni']
const FooterSection = () => {
    return (
        <footer >
            <section className="pt-5" style={{ background: '#002147' }}>


                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-2">
                            <h4 className="text-white fs-4">Useful Links</h4>
                            <ul className="footer-list-item">
                                {firstLinkItem.map((item) => <li>
                                    <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon className="list-icon" icon={faAngleRight} /> {item}</a>
                                </li>)}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-white fs-4">&nbsp;</h4>
                            <ul className="footer-list-item">
                                {secondLinkitem.map((item) => <li>
                                    <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon className="list-icon" icon={faAngleRight} /> {item}</a>
                                </li>)}
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-white fs-4">&nbsp;</h4>
                            <ul className="footer-list-item">
                                {thirdLinkitem.map((item) => <li>
                                    <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon className="list-icon" icon={faAngleRight} /> {item}</a>
                                </li>)}
                            </ul>
                        </div>
                        <div className="col-md-3 text-white">
                            <img src={logo} alt='....' />
                            <p style={{ fontSize: '13px' }}><FontAwesomeIcon icon={faMapMarker} /> Administrative Building (Ground Floor)
                                <br />
                                Dhaka-1000, Bangladesh</p>
                            <div className="contact-info">
                                <p><a href="#"><b>Phone:</b> +88-09666911463</a></p>
                                <p><a href="#"><b>Fax:</b>  880-2-9667222</a></p>
                                <p><a href="#"><b>Email:</b> vcoffice@du.ac.bd, registrar@du.ac.bd</a></p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <div className="footer-bottom py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 d-flex align-items-center">
                            <p className="text-white mb-0">© 2021 University of Dhaka. All Rights Reserved. Design, Development and Maintenance by <a href="#" className="text-warning">ICT Cell</a></p>
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <ul className="list-unstyled d-flex justify-content-center mb-0"> 
                                <li><a className="text-white text-decoration-none me-5 ms-5" href="#">Student Login</a></li>
                                <li><a className="text-white text-decoration-none" href="#">DU Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;