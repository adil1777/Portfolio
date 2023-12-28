import React from "react";
import "./Contact.css";
import Fade from 'react-reveal/Fade';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import contact from "../../assets/images/contact.png"
const Contact = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
          <Fade left>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  
                    <img
                      src={contact}
                      alt="contact"
                      className="image"
                    />
               
                </div>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="col-lg-6 col-md-6">
         
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="#0077b5" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="#0077b5" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                       
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;