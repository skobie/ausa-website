import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Zap, ExternalLink } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/board-and-committees', label: 'Board & Committees' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMobile}>
          <img
            src="/AUSA-Logo-Gold.png"
            alt="AUSA Logo"
            className="navbar-logo-img"
          />
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-cta">
          <a
            href="https://www.eventsquid.com/event.cfm?event_id=32542&fromdash"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-register-btn"
            id="navbar-register-btn"
          >
            Register
            <ExternalLink size={13} />
          </a>
          <Link to="/contact" className="navbar-cta-btn">
            <Zap size={14} style={{ marginRight: 6, display: 'inline' }} />
            Get Involved
          </Link>
        </div>

        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
      </div>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        <img
          src="/AUSA-Logo-Gold.png"
          alt="AUSA Logo"
          className="navbar-mobile-logo"
        />
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            onClick={closeMobile}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href="https://www.eventsquid.com/event.cfm?event_id=32542&fromdash"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-register-btn"
          onClick={closeMobile}
        >
          Register
          <ExternalLink size={13} />
        </a>
        <Link to="/contact" className="navbar-cta-btn" onClick={closeMobile}>
          Get Involved
        </Link>
      </div>
    </nav>
  );
}
