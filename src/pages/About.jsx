import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Lightbulb,
  Zap,
  ArrowRight,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import heroSunset from '../assets/images/hero-sunset.png';
import './About.css';

const values = [
  {
    icon: <Shield size={32} />,
    title: 'Safety',
    description:
      'We believe that every utility worker deserves to go home safe. Safety is at the core of everything we do — from roundtable discussions to our annual conference.',
    bg: 'var(--color-accent-light)',
    color: 'var(--color-accent)',
  },
  {
    icon: <Users size={32} />,
    title: 'Collaboration',
    description:
      'By bringing together electrical utility professionals and contractors, we foster industry-wide learning and mutual support.',
    bg: 'var(--color-gold-light)',
    color: 'var(--color-gold)',
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Innovation',
    description:
      'We encourage forward-thinking approaches to utility safety, embracing new technologies and methodologies that protect workers and communities.',
    bg: 'rgba(44, 68, 112, 0.1)',
    color: 'var(--color-primary-light)',
  },
];

const memberCompanies = [
  'American Power LLC',
  'Arizona Electric Power Coop',
  'Arizona Trench Co',
  'Arizona Public Service',
  'City of Mesa AZ',
  'Electrical District #3',
  'MYR Group',
  'Navopache Electric Cooperative',
  'Salt River Project',
  'Sturgeon Electric',
  'Sulphur Springs Valley Electric Coop',
  'Summit Line Construction',
  'Unisource Energy Services',
  'Tohono O\'odham Utility Authority Electric',
  'Tucson Electric Power',
  'Trico Electric Cooperative',
  'Wilson Construction',
];

export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage={heroSunset}
        badge="About AUSA"
        title="Empowering Utilities to Engage"
        subtitle="The American Utilities Safety Association is a non-profit organization dedicated to promoting safety collaboration among area utility companies."
        mini
      />

      {/* Mission */}
      <section className="about-mission">
        <div className="container container-wide">
          <div className="about-mission-inner">
            <ScrollReveal>
              <div className="about-mission-quote">
                <blockquote>
                  "Our mission is to provide a forum for area utility companies to
                  share safety lessons learned, best practices, and innovative ideas
                  that promote a culture of safety excellence."
                </blockquote>
                <cite>— AUSA Mission Statement</cite>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="about-mission-text">
                <h2>Who We Are</h2>
                <p>
                  The American Utilities Safety Association (AUSA) is a collaborative
                  organization made up of electrical utility companies and
                  contractors throughout the Southwest. We bring together safety
                  professionals, operations leaders, and executives to share
                  knowledge, discuss challenges, and develop solutions.
                </p>
                <p>
                  Since our founding, AUSA has grown into a vital network that
                  connects professionals from electrical utilities and
                  contractors.
                  Through our annual conference, safety roundtable meetings, and
                  vendor expos, we provide platforms for meaningful dialogue and
                  professional development.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <ScrollReveal>
            <div className="about-values-header">
              <span className="badge badge-accent">Our Values</span>
              <h2>What Drives Us</h2>
              <div className="divider divider-center" />
              <p>
                Three core values guide everything we do at AUSA, shaping our
                programs and culture.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="about-value-card">
                  <div
                    className="about-value-icon"
                    style={{ background: v.bg, color: v.color }}
                  >
                    {v.icon}
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-vision">
        <div className="container">
          <ScrollReveal>
            <div className="about-vision-inner">
              <span className="badge badge-gold">Our Vision</span>
              <h2>Building a Safer Utility Industry</h2>
              <p>
                We envision a world where every utility company — regardless of
                size or sector — has access to world-class safety resources,
                collaborative networks, and the support they need to protect their
                workers and communities.
              </p>

              <div className="about-vision-stats">
                <div className="about-vision-stat">
                  <h3>25+</h3>
                  <p>Years of Collaboration</p>
                </div>
                <div className="about-vision-stat">
                  <h3>50+</h3>
                  <p>Member Utilities</p>
                </div>
                <div className="about-vision-stat">
                  <h3>1000+</h3>
                  <p>Professionals Impacted</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Conference Highlights */}
      <section className="about-gallery">
        <div className="container">
          <ScrollReveal>
            <div className="about-gallery-header">
              <span className="badge badge-gold">In Action</span>
              <h2>Conference Highlights</h2>
              <div className="divider divider-center" />
              <p>See our members in action at AUSA events throughout the area.</p>
            </div>
          </ScrollReveal>

          <div className="about-gallery-grid">
            <ScrollReveal>
              <div className="about-gallery-item">
                <img
                  src="/refwausalink/ADOSH Panel Discussion, Hudson, Murphy, Rucker, Randolph.jpg"
                  alt="ADOSH Panel Discussion at the AUSA Conference"
                />
                <div className="about-gallery-caption">
                  <h4>ADOSH Panel Discussion</h4>
                  <p>Industry leaders discussing safety standards and best practices</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="about-gallery-item">
                <img
                  src="/refwausalink/Day 1.jpeg"
                  alt="Day 1 Safety Roundtable meeting"
                />
                <div className="about-gallery-caption">
                  <h4>Safety Roundtable</h4>
                  <p>Members collaborating on safety initiatives</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Member Companies */}
      <section className="about-members">
        <div className="container">
          <ScrollReveal>
            <div className="about-members-header">
              <span className="badge badge-accent">Our Community</span>
              <h2>Member Utility Companies & Contractors</h2>
              <div className="divider divider-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="about-members-grid">
              {memberCompanies.map((company, i) => (
                <div key={i} className="about-member-item">
                  <Zap size={14} />
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content">
              <h2>Want to Learn More?</h2>
              <p>
                Get in touch with our board to learn about membership, upcoming
                events, and how you can get involved.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us <ArrowRight size={18} />
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
