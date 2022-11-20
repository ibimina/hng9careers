import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="career_footer">
      <div className="career_ftcon">
        <div>
          <div className="footer_logo">
            <img src="/assets/Frame 28086.svg" alt="" />
          </div>
          <nav>
            <ul>
              <li className="career_ftlink">About Us</li>
              <li className="career_ftlink">Careers</li>
              <li className="career_ftlink">Weather</li>
              <li className="career_ftlink">For Business</li>
              <li className="career_ftlink">FAQs</li>
              <li className="career_ftlink">Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="download">
          <p className="career_ftmar">Download the mobile app</p>
          <div className="career_ftflex">
            <div className="career_app">
              {" "}
              <img src="/assets/frame 120.png" alt="" />
            </div>
            <div className="career_app">
              {" "}
              <img src="/assets/frame 121.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="career_ftcon  career_reverse">
        <div className="career_ftflex">
          <div className="career_ftlang">
            <img src="/assets/language.svg" alt="" srcset="" />
            <p className="career_label">English</p>
          </div>
          <div className="career_ftlang">
            <img src="/assets/uk.svg" alt="" />
            <p className="career_label">United kingdom</p>
          </div>
          <div className="career_ftlang">
            <img src="/assets/support.svg" alt="" />
            <p className="career_label">Customer Support</p>
          </div>
        </div>
        <img src="/assets/copy.svg" alt="" />
      </div>
    </footer>
  );
}
