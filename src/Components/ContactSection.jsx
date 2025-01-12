import './ContactSection.css';

function ContactSection() {
  return (
    <div className="section contact-container">
      <div className="section contact-section">
        <div className="contact-leftside">
          {/* <div className="section-label"> */}
          <h1>Contact Me</h1>
          <img src="/selfie2.jpg" alt="selfie" id="selfie2" />
          {/* </div> */}
        </div>
        <div className="contact-rightside">
          <p>
            I am always open to new connections and projects. Please get in touch, if you are
            interested in working together.
          </p>
          <div className="phone-info">
            <img src="/phone.png" alt="phone" />
            <p>+1(402)889-7345</p>
          </div>
          <div className="email-info">
            <img src="/email.png" alt="" />
            <p>a.r.a.edwards@gmail.com</p>
          </div>
          <div className="socials">
            <div>
              <a href="https://www.linkedin.com/in/amber-edwards-80b3216b/" target="_blank">
                <img src="/linkedin.png" alt="linkedin external link" />
              </a>
              <a href="https://github.com/Msambere" target="_blank">
                <img src="/github-sign.png" alt="github external link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
