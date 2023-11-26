import React from "react";
import leftPartimg from "./img/Group 8.svg";
import rightPartImg from "./img/Group 7.svg";
import experience from "./img/icon-feature-experience.svg";
import implementation from "./img/icon-feature-implementation.svg";
import innovation from "./img/icon-feature-productivity.svg";
import './contacts.css'
import InputFrom from "./inputForm/inputForm";

function ContactsPart() {
  return ( 
    <div className="contacting_form_wrapper">
      <img className="left__part_img" src={leftPartimg} alt="left icon" />
      <div className="contactPart">
        <h1 className="contact_part_title">Contact</h1>
        <h3 className="contact_ask_about"> Ask about us</h3>
        <div className="questions_wrapper">
          <div className="contact experience">
            <img className="question_img" src={experience} alt="experience" />
            <p className="experience_text">The quality of our talent network</p>
          </div>
          <div className="implementation contact">
            <img className="question_img" src={implementation} alt="implementation" />
            <p className="implementation_text">
              Usage & implementation of our software
            </p>
          </div>
          <div className="contact innovation">
            <img className="question_img" src={innovation} alt="innovation" />
            <p className="innovation_text">The quality of our talent network</p>
          </div>
        </div>
      </div>
      <InputFrom/>
      <img className="right_part_img" src={rightPartImg}   alt="icon"/>
    </div>
  );
}

export default ContactsPart;
