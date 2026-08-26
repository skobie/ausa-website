import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({
  backgroundImage,
  badge,
  logoSrc,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  showScroll,
  mini,
}) {
  return (
    <section className={`hero ${mini ? 'hero-mini' : ''}`}>
      <div className="hero-bg">
        <img src={backgroundImage} alt="" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        {badge && (
          <div className="hero-badge">
            <Zap size={14} />
            {badge}
          </div>
        )}

        {logoSrc && (
          <img
            src={logoSrc}
            alt="AUSA Logo"
            className="hero-logo"
          />
        )}

        <h1>{title}</h1>

        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {(primaryAction || secondaryAction) && (
          <div className="hero-actions">
            {primaryAction && (
              <Link to={primaryAction.to} className="btn btn-primary btn-lg">
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link to={secondaryAction.to} className="btn btn-secondary btn-lg">
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {showScroll && (
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="hero-scroll-dot" />
        </div>
      )}
    </section>
  );
}
