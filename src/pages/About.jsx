import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Lightbulb,
  Zap,
  Building2,
  Droplets,
  Flame,
  Cable,
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
      'By bringing together professionals from electric, gas, water, and telecommunications utilities, we foster cross-industry learning and mutual support.',
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

const serveList = [
  {
    icon: <Zap size={20} />,
    title: 'Electric Utilities',
    description: 'Power generation, transmission, and distribution companies.',
  },
  {
    icon: <Flame size={20} />,
    title: 'Gas Utilities',
    description: 'Natural gas distribution and pipeline operators.',
  },
  {
    icon: <Droplets size={20} />,
    title: 'Water Utilities',
    description: 'Water treatment, distribution, and wastewater management.',
  },
  {
    icon: <Cable size={20} />,
    title: 'Telecommunications',
    description: 'Communication infrastructure and network providers.',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Municipal Utilities',
    description: 'City and county-operated utility services.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Safety Contractors',
    description: 'Third-party safety consultants and service providers.',
  },
];

export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage={heroSunset}
        badge="About AUSA"
        title="Empowering Utilities to Engage"
        subtitle="The American Utilities Safety Association is a non-profit organization dedicated to promoting safety collaboration among Arizona's utility companies."
        mini
      />

      {/* Mission */}
      <section className="about-mission">
        <div className="container container-wide">
          <div className="about-mission-inner">
            <ScrollReveal>
              <div className="about-mission-quote">
                <blockquote>
                  "Our mission is to provide a forum for Arizona's utility companies to
                  share safety information, best practices, and innovative ideas that
                  promote a culture of safety excellence."
                </blockquote>
                <cite>— AUSA Mission Statement</cite>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="about-mission-text">
                <h2>Who We Are</h2>
                <p>
                  The American Utilities Safety Association (AUSA) is a collaborative
                  organization made up of utility companies throughout Arizona. We
                  bring together safety professionals, operations leaders, and
                  executives from across the utility spectrum to share knowledge,
                  discuss challenges, and develop solutions.
                </p>
                <p>
                  Since our founding, AUSA has grown into a vital network that
                  connects professionals from electric, gas, water, and
                  telecommunications utilities. Through our annual conference, safety
                  roundtable meetings, and vendor expos, we provide platforms for
                  meaningful dialogue and professional development.
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
                We envision an Arizona where every utility company — regardless of
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

      {/* Who We Serve */}
      <section className="about-serve">
        <div className="container">
          <div className="about-serve-inner">
            <ScrollReveal>
              <div className="about-serve-header">
                <span className="badge badge-accent">Our Community</span>
                <h2>Who We Serve</h2>
                <div className="divider divider-center" />
                <p>
                  AUSA represents a diverse cross-section of Arizona's utility
                  industry.
                </p>
              </div>
            </ScrollReveal>

            <div className="about-serve-list">
              {serveList.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="about-serve-item">
                    {item.icon}
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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
