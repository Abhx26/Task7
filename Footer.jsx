// components/Footer.js
import Image from 'next/image';
import Image1 from "../logo-white.webp"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section brand">
        <div className="logo">
          <Image src={Image1} alt="Bunzo Logo" width={150} height={50} />
        </div>
        <p>Lorem Ipsum is simply dummy text of the industry orem Ipsum has been the industry's since the when unknown.</p>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fab fa-skype"></i></a>
          <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div className="footer-section subscribe">
        <h2 className="subs">Subscribe</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <button>Subscribe Now</button>
      </div>

      <div className="footer-section links">
        <h2 className="subs text-white text-2x">Company</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Local Print Ads</a></li>
          <li><a href="#">FAQ's</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div className="footer-section links">
        <h2 className="subs">Quick Links</h2>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Discussion</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">Course FAQ's</a></li>
        </ul>
      </div>

      <div className="footer-section links">
        <h2 className="subs">Category</h2>
        <ul>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Healthy</a></li>
          <li><a href="#">Restaurant</a></li>
          <li><a href="#">Travel Tips</a></li>
          <li><a href="#">Marketing</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
