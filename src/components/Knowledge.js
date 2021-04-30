import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faCode, faCogs, faDatabase, faDesktop, faFileCode, faTasks, faWarehouse, faWheelchair } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1>knowledge</h1>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faTasks} size="2x" />
                                </div>
                                <h3>Manual Testing</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faCogs} size="2x" />
                                </div>
                                <h3>Test Automation</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faJava} size="2x" />
                                </div>
                                <h3>Java Swing</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                </div>
                                <h3>Web Development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
