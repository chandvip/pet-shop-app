import React from 'react';
import serviceImg1 from '../servicesImage/services1.jpg';
import serviceImg2 from '../servicesImage/services2.jpg';
import serviceImg3 from '../servicesImage/services3.jpg';
import './Services.css';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
const Services = () => {

    return (

        <>
            <Header />
            <div className="container">
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service">
                        <div>
                            <img src={serviceImg1} alt='serviceImg1' width={370} height={300} />
                        </div>
                        <h3>Veterinary Consultation</h3>
                        <p>Our experienced veterinarians provide expert advice and consultation for your pet's health and well-being.</p>
                        <div>
                            <h3>Price:</h3><h3>15000 ₹</h3>
                        </div>
                    </div>

                    {/* <!-- Service 2 --> */}
                    <div className="service">
                        <div>
                            <img src={serviceImg2} alt='serviceImg1' width={370} height={300} />
                        </div>
                        <h3>Medical Treatments</h3>
                        <p>We offer a range of medical treatments and procedures to keep your pets healthy and happy.</p>
                        <div>
                            <h3>Price:</h3><h3>15000 ₹</h3>
                        </div>
                    </div>

                    {/* <!-- Service 3 --> */}
                    <div className="service">
                        <div>
                            <img src={serviceImg3} alt='serviceImg1' width={370} height={300} />
                        </div>
                        <h3>Grooming and Spa</h3>
                        <p>Pamper your pets with our grooming and spa services, ensuring they look and feel their best.</p>
                        <div>
                            <h3>Price:</h3><h3>15000₹</h3>
                        </div>
                    </div>

                    {/* <!-- Add more services as needed --> */}
                </div>

                <div className='Dashboard'>
                    <NavLink to='/dashboard'>
                        <button className='btn'>go to Dashboard</button>
                    </NavLink>
                </div>
            </div >
        </>)
}

export default Services;