import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
const Contact = () => {
    return (
        <>
            <Header />
            <div className='contact-section'>

                <h2 classNameName='common-headings'>contact page</h2>
                <div className='contact-container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9175353004866!2d78.03655773009397!3d30.324863390231364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ea630407b3%3A0x3131f35c6106f8b1!2sClock%20Tower%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1689508000334!5m2!1sen!2sin"
                        width="40%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <form action="" method="POST">
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className='contact-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
