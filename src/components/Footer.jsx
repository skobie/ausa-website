import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container container-wide">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-about">
            <div className="footer-logo">
              <img
                src="/AUSA-Logo-Gold.png"
                alt="AUSA Logo"
                className="footer-logo-img"
              />
            </div>
            <p>
              The American Utilities Safety Association empowers the Southwest's electrical
              utilities and contractors to collaborate, share safety lessons learned, best practices,
              and build a stronger, safer industry together.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/board-and-committees" className="footer-link">Board & Committees</Link>
              <Link to="/news" className="footer-link">News & Events</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <div className="footer-links">
              <Link to="/news" className="footer-link">Safety Roundtable</Link>
              <Link to="/news" className="footer-link">Annual Conference</Link>
              <Link to="/news" className="footer-link">Vendor Expo</Link>
              <Link to="/about" className="footer-link">Membership</Link>
              <Link to="/news" className="footer-link">Newsletter</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>Arizona, United States</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <a href="mailto:AUSABoard@ausa1987.com">AUSABoard@ausa1987.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>Contact via email</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} American Utilities Safety Association. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
