import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';


function Contact() {
    return ( <>
    <Header/>
    <div className="contact-page">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us by filling the form below:</p>
        <form className="contact-form">
            <label>Name:
                <input type="text" name='name' required />
            </label>
            <label>Email:
                <input type="text" name='email' required />
            </label>
            <label>Email:
                <textarea name='message' rows="5" required></textarea>
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </> );
}

export default Contact;