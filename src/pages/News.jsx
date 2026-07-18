import { useState } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Shield,
  Megaphone,
  BookOpen,
  Mail,
  ArrowRight,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import heroDesert from '../assets/images/hero-desert.png';
import heroSunset from '../assets/images/hero-sunset.png';
import './News.css';

const events = [
  {
    icon: <Megaphone size={24} />,
    frequency: 'Annual',
    title: 'AUSA Conference & Vendor Expo',
    description:
      'The flagship two-day event featuring presentations from industry leaders, a vendor expo showcasing the latest safety equipment and technology, and networking opportunities with utility professionals across Arizona.',
  },
  {
    icon: <Shield size={24} />,
    frequency: 'Quarterly',
    title: 'Safety Roundtable',
    description:
      'Quarterly meetings designed for safety managers and professionals to discuss trending safety topics, share incident lessons learned, and collaborate on innovative safety solutions.',
  },
  {
    icon: <BookOpen size={24} />,
    frequency: 'Monthly',
    title: 'AUSA Newsletter',
    description:
      'A monthly newsletter keeping members informed about industry news, upcoming events, safety alerts, and highlights from AUSA member utilities.',
  },
];

export default function News() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      <HeroSection
        backgroundImage={heroDesert}
        badge="News & Events"
        title="Stay Connected"
        subtitle="Keep up with the latest from AUSA — conferences, safety roundtables, and industry updates."
        mini
      />

      {/* Featured Event */}
      <section className="featured-event">
        <div className="container container-wide">
          <div className="featured-event-inner">
            <ScrollReveal>
              <div className="featured-event-content">
                <span className="badge badge-accent">Featured Event</span>
                <h2>AUSA 2026 Conference & Vendor Expo</h2>
                <p>
                  Announcing the dates for the 2026 AUSA Conference & Vendor Expo,
                  the must-attend event for Arizona's utility safety community. Join
                  us for two days of insightful presentations, hands-on vendor
                  exhibits, and valuable networking with peers from across the state.
                </p>

                <div className="featured-event-meta">
                  <div className="featured-event-meta-item">
                    <Calendar size={20} />
                    <div>
                      <div className="meta-label">Date</div>
                      <div className="meta-value">September 30 – October 1, 2026</div>
                    </div>
                  </div>
                  <div className="featured-event-meta-item">
                    <MapPin size={20} />
                    <div>
                      <div className="meta-label">Location</div>
                      <div className="meta-value">Palo Verde Energy Education Center</div>
                    </div>
                  </div>
                  <div className="featured-event-meta-item">
                    <Clock size={20} />
                    <div>
                      <div className="meta-label">Duration</div>
                      <div className="meta-value">2-Day Event</div>
                    </div>
                  </div>
                  <div className="featured-event-meta-item">
                    <Users size={20} />
                    <div>
                      <div className="meta-label">Audience</div>
                      <div className="meta-value">Utility Safety Professionals</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="featured-event-image">
                <img
                  src={heroSunset}
                  alt="Arizona sunset — AUSA Conference venue"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="container container-wide">
          <ScrollReveal>
            <div className="events-header">
              <span className="badge badge-gold">Programs</span>
              <h2>Our Regular Events</h2>
              <div className="divider divider-center divider-gold" />
              <p>
                AUSA hosts a variety of programs throughout the year to support
                Arizona's utility safety community.
              </p>
            </div>
          </ScrollReveal>

          <div className="events-grid">
            {events.map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="event-card">
                  <div className="event-card-icon">{event.icon}</div>
                  <span className="event-card-frequency">{event.frequency}</span>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <ScrollReveal>
            <div className="newsletter-inner">
              <Mail size={48} color="var(--color-gold)" style={{ margin: '0 auto var(--space-lg)' }} />
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                Get the latest safety news, event announcements, and industry
                updates delivered to your inbox.
              </p>

              {subscribed ? (
                <div style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: 'var(--text-lg)' }}>
                  ✓ Thanks for subscribing! You'll hear from us soon.
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">
                    Subscribe
                    <ArrowRight size={16} style={{ marginLeft: 6, display: 'inline' }} />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
