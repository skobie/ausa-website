import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Zap } from 'lucide-react';
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
          <svg className="navbar-logo-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="2.5" fill="none" opacity="0.2"/>
            <path d="M30 8L18 44h6l2-6h8l2 6h6L30 8zm-2 24l2-8 2 8h-4z" fill="white"/>
            <path d="M12 38c4-8 10-14 18-14s14 6 18 14" stroke="#D4A843" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <circle cx="30" cy="24" r="3" fill="#D4A843"/>
          </svg>
          <span className="navbar-logo-text">
            A<span>USA</span>
          </span>
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
        <Link to="/contact" className="navbar-cta-btn" onClick={closeMobile}>
          Get Involved
        </Link>
      </div>
    </nav>
  );
}
