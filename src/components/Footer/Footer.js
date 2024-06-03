import React from "react";
import "./Footer.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h6 className="title">Policies</h6>
          <ul>
            <li>
              <a href="/terms" className="fs-15">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/cookies" className="fs-15">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="/policy" className="fs-15">
                Data Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h6 className="title">About</h6>
          <ul>
            <li>
              <a href="/terms" className="fs-15">
                Company Info
              </a>
            </li>
            <li>
              <a href="/cookies" className="fs-15">
                Branches
              </a>
            </li>
            <li>
              <a href="/policy" className="fs-15">
                Store
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h6 className="title">Contact</h6>
          <ul>
            <li>
              <FaPhoneAlt size={20} />
              <p>+123 546 789</p>
            </li>
            <li>
              <IoIosMail size={30} />
              <a href="mailto:info@therecipe.com">info@therecipe.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h6 className="title">Follows Us</h6>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/themoviedb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook2 size={25} className="fab" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/themoviedb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter size={25} className="fab" /> X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/themoviedb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare size={25} className="fab" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
