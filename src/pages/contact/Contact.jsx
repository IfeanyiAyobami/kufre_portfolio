import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="container section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            beatae ipsa deserunt voluptates numquam dolorem nisi minima soluta
            non molestias,
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">kufreeffiongroberts@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc"> +234 814 207 7558</h4>
              </div>
            </div>
            
            
          </div>

          <div className="contact__socials">
            <a href="https:/fb.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https:/fb.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https:/fb.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https:/fb.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your email "
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              className="form__control textarea"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
