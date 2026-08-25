import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Newspaper,
  BookOpen,
  Megaphone,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import heroDesert from '../assets/images/hero-desert.png';
import heroSunset from '../assets/images/hero-sunset.png';
import './Home.css';

const stats = [
  { icon: <Calendar size={24} />, number: '25+', label: 'Years Established' },
  { icon: <Users size={24} />, number: '50+', label: 'Member Utilities' },
  { icon: <Award size={24} />, number: '100+', label: 'Annual Attendees' },
  { icon: <Shield size={24} />, number: '4', label: 'Active Committees' },
];

const newsItems = [
  {
    date: 'September 2026',
    title: 'AUSA 2026 Conference & Vendor Expo',
    description:
      'Join us for the annual AUSA Conference & Vendor Expo on September 30th & October 1st at the Palo Verde Energy Education Center.',
    gradient: 'var(--gradient-primary)',
    icon: <Megaphone size={40} />,
  },
  {
    date: 'Annual',
    title: 'Safety Roundtable Meetings',
    description:
      'Annual meetings where safety professionals from utilities across the area come together to share safety lessons learned, best practices, and innovative ideas. Last held April 1–2, 2026.',
    gradient: 'var(--gradient-accent)',
    icon: <BookOpen size={40} />,
  },
  {
    date: 'Monthly',
    title: 'AUSA Newsletter',
    description:
      'Stay up to date with the latest safety news, industry updates, and upcoming events through our monthly newsletter.',
    gradient: 'linear-gradient(135deg, #D4A843 0%, #E6C06A 100%)',
    icon: <Newspaper size={40} />,
  },
];

const partners = [
  { name: 'Salt River Project', color: '#1B5E20' },
  { name: 'Tucson Electric Power', color: '#0D47A1' },
  { name: 'Arizona Public Service', color: '#F57F17' },
  { name: 'UniSource Energy', color: '#4A148C' },
  { name: 'Sulphur Springs Valley Electric Cooperative', color: '#2E7D32' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        backgroundImage={heroDesert}
        badge="Empowering Utilities to Engage"
        title={
          <>
            American Utilities<br />
            <span style={{ color: 'var(--color-gold)' }}>Safety Association</span>
          </>
        }
        subtitle="Bringing utility professionals from the Southwest together to collaborate, share safety lessons learned, best practices, and to build a stronger, safer industry."
        primaryAction={{ label: 'Explore AUSA', to: '/about' }}
        secondaryAction={{ label: 'Get Involved', to: '/contact' }}
        showScroll
      />

      {/* Conference Banner */}
      <section className="conference-banner">
        <div className="container container-wide">
          <div className="conference-inner">
            <ScrollReveal>
              <div className="conference-content">
                <div className="conference-eyebrow">
                  <Zap size={14} />
                  Save the Date
                </div>
                <h2>AUSA 2026 Conference & Vendor Expo</h2>
                <p>
                  The annual AUSA Conference and Vendor Expo brings together utility
                  professionals from across the area for two days of presentations,
                  networking, and safety education.
                </p>
                <div className="conference-actions">
                  <a
                    href="https://www.eventsquid.com/event.cfm?event_id=32542&fromdash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id="conference-register-btn"
                  >
                    Register Now
                    <ExternalLink size={16} />
                  </a>
                  <Link to="/news" className="btn btn-outline btn-outline-light">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="conference-details">
                <div className="conference-detail-card">
                  <Calendar size={24} />
                  <h4>Date</h4>
                  <p>September 30 – October 1, 2026</p>
                </div>
                <div className="conference-detail-card">
                  <MapPin size={24} />
                  <h4>Location</h4>
                  <p>Palo Verde Energy Education Center</p>
                </div>
                <div className="conference-detail-card">
                  <Users size={24} />
                  <h4>Attendees</h4>
                  <p>Utility Professionals</p>
                </div>
                <div className="conference-detail-card">
                  <Target size={24} />
                  <h4>Focus</h4>
                  <p>Safety, Innovation & Networking</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container container-wide">
          <div className="about-preview-inner">
            <ScrollReveal>
              <div className="about-preview-image">
                <img src="/refwausalink/AUSA Board and Presentation Manny, Committee Chair.jpg" alt="AUSA Board members at the annual conference" />
                <div className="about-preview-image-accent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="about-preview-content">
                <span className="badge badge-accent">About AUSA</span>
                <h2>Empowering the Southwest's Utility Industry</h2>
                <p>
                  AUSA is a collaborative association of electrical utility companies
                  and contractors throughout the Southwest, dedicated to sharing safety
                  lessons learned, best practices, fostering professional development,
                  and strengthening the utility community.
                </p>

                <div className="about-preview-features">
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <Shield size={20} />
                    </div>
                    <div className="about-feature-text">
                      <h5>Safety First</h5>
                      <p>Sharing safety lessons learned, best practices to keep utility workers safe across the Southwest.</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <Users size={20} />
                    </div>
                    <div className="about-feature-text">
                      <h5>Collaboration</h5>
                      <p>Connecting electrical utility professionals and contractors across the Southwest.</p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <TrendingUp size={20} />
                    </div>
                    <div className="about-feature-text">
                      <h5>Professional Growth</h5>
                      <p>Annual conferences, roundtables, and educational events.</p>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="btn btn-outline">
                  Learn More About Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="news-section">
        <div className="container container-wide">
          <ScrollReveal>
            <div className="news-section-header">
              <span className="badge badge-gold">News & Events</span>
              <h2>Stay Connected</h2>
              <div className="divider divider-center" />
              <p>
                Keep up with the latest from AUSA — conferences, safety roundtables,
                and industry updates.
              </p>
            </div>
          </ScrollReveal>

          <div className="news-grid">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Link to="/news" className="news-card">
                  <div className="news-card-image">
                    <div
                      className="news-card-gradient"
                      style={{ background: item.gradient }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="news-card-body">
                    <div className="news-card-date">{item.date}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container container-wide">
          <div className="partners-header">
            <h6>Trusted by top Leading Utilities</h6>
          </div>
          <div className="partners-grid">
            {partners.map((partner, i) => (
              <div key={i} className="partner-logo">
                <div
                  className="partner-logo-icon"
                  style={{ background: `${partner.color}20`, color: partner.color }}
                >
                  <Zap size={18} />
                </div>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content">
              <h2>Ready to Get Involved?</h2>
              <p>
                Join AUSA and connect with the top utility safety community.
                Together, we can build a safer, more resilient industry.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <Link to="/board-and-committees" className="btn btn-secondary btn-lg">
                  Meet the Board
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
