import React from "react";
import {IconContext} from "react-icons";
import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa";
import "./contact.scss"


const Contact = () => {
    return (
        <>
            <h3>Contact</h3>
            <div className="icon">
                <IconContext.Provider value={{size: "3rem", color: "#fff"}}>
                    <FaLinkedin />
                    <p>linkedin.com/in/denmercs/</p>
                </IconContext.Provider>
            </div>
            <div className="icon">
                <IconContext.Provider value={{size: "3rem", color: "#fff"}}>
                    <FaGithub />
                    <p>https://github.com/denmercs</p>
                </IconContext.Provider>
            </div>
            <div className="icon">
                <IconContext.Provider value={{size: "3rem", color: "#fff"}}>
                    <FaEnvelopeSquare />
                    <p>denmercs@gmail.com</p>
                </IconContext.Provider>
            </div>
        </>
    )
}

export default Contact;