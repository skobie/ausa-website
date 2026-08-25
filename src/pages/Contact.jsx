import { Mail, MapPin, Phone } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import heroSunset from '../assets/images/hero-sunset.png';
import './Contact.css';

const contacts = [
  {
    name: 'Heather Legg',
    organization: 'Salt River Project',
    email: 'heather.legg@srpnet.com',
    initials: 'HL',
  },
  {
    name: 'Christine Ries',
    organization: 'Salt River Project',
    email: 'christine.ries@srpnet.com',
    initials: 'CR',
  },
  {
    name: 'Mike Mitts',
    organization: 'Tucson Electric Power',
    email: 'mmitts@uesaz.com',
    initials: 'MM',
  },
];

export default function Contact() {
  return (
    <>
      <HeroSection
        backgroundImage={heroSunset}
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Have questions about AUSA, membership, or upcoming events? We'd love to hear from you."
        mini
      />

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="container container-wide">
          <ScrollReveal>
            <div className="contact-cards-header">
              <span className="badge badge-accent">Board Contacts</span>
              <h2>Reach Out Directly</h2>
              <div className="divider divider-center" />
              <p>
                Connect with our board members for questions about membership,
                events, or partnership opportunities.
              </p>
            </div>
          </ScrollReveal>

          <div className="contact-cards-grid">
            {contacts.map((contact, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="contact-info-card">
                  <div className="contact-info-avatar">{contact.initials}</div>
                  <h4>{contact.name}</h4>
                  <p className="contact-info-org">{contact.organization}</p>
                  <a href={`mailto:${contact.email}`} className="contact-info-email">
                    <Mail size={14} />
                    {contact.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container container-wide">
          <div className="contact-form-grid">
            <ScrollReveal>
              <div className="contact-sidebar">
                <span className="badge badge-gold">Contact Form</span>
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form and a board member will get back to you within
                  1-2 business days.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-row">
                    <div className="contact-info-icon">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h5>Location</h5>
                      <p>Arizona, United States</p>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h5>Email</h5>
                      <p>
                        <a href="mailto:AUSABoard@ausa1987.com">AUSABoard@ausa1987.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h5>Phone</h5>
                      <p>Contact via email</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
