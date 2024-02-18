import React, { useState } from "react";
import "./Contact.css";
import {  Fade } from "react-awesome-reveal";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import contact from "../../assets/images/contact.png";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      const res = await axios.post(
        "https://portfolio-backenedd.onrender.com/api/v1/portfolio/sendEmail",
        { name, email, msg }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (

      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <Fade direction="left" >
                <div className="card1">
                  <div className="row border-line">
                    <img src={contact} alt="contact" className="image" />
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-md-6">
              <Fade direction="right" >
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/mohd-adil-305999215/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          color="#0077b5"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                      <a
                        href="https://github.com/adil1777?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <BsFacebook color="#0077b5" size={30} className="ms-2" />
                      <FaSquareInstagram color="#d62976" size={30} className="ms-2" />
                    </h6>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Contact;