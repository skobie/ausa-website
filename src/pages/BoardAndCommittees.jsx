import { Home, Shield, Presentation, Store, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import BoardMemberCard from '../components/BoardMemberCard';
import ScrollReveal from '../components/ScrollReveal';
import heroUtilities from '../assets/images/hero-utilities.png';
import './BoardAndCommittees.css';

const boardMembers = [
  {
    name: 'Heather Legg',
    role: 'Board Chair',
    organization: 'Salt River Project',
    email: 'heather.legg@srpnet.com',
  },
  {
    name: 'Christine Ries',
    role: 'Board Member',
    organization: 'Salt River Project',
    email: 'christine.ries@srpnet.com',
  },
  {
    name: 'Mike Mitts',
    role: 'Board Member',
    organization: 'Tucson Electric Power',
    email: 'mmitts@tep.com',
  },
  {
    name: 'Diana Urrea',
    role: 'Board Member',
    organization: 'Tucson Electric Power',
  },
  {
    name: 'Jim Neal',
    role: 'Board Member',
    organization: 'Arizona Public Service',
  },
];

const committees = [
  {
    icon: <Home size={24} />,
    title: 'Host Committee',
    description:
      'Responsible for coordinating all logistics for the annual AUSA Conference & Vendor Expo, including venue, catering, registration, and attendee experience.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Safety Roundtable Committee',
    description:
      'Organizes quarterly safety roundtable meetings where utility safety professionals gather to share best practices, incident reviews, and innovative safety solutions.',
  },
  {
    icon: <Presentation size={24} />,
    title: 'Presentation Committee',
    description:
      'Curates and coordinates speakers, presentations, and educational content for the annual conference and other AUSA events throughout the year.',
  },
  {
    icon: <Store size={24} />,
    title: 'Vendor Committee',
    description:
      'Manages vendor relationships, booth assignments, and the vendor expo portion of the annual conference, connecting utilities with industry suppliers.',
  },
];

export default function BoardAndCommittees() {
  return (
    <>
      <HeroSection
        backgroundImage={heroUtilities}
        badge="Leadership"
        title="Board & Committees"
        subtitle="Meet the dedicated professionals who lead AUSA's mission to promote safety collaboration across Arizona's utility industry."
        mini
      />

      {/* Board Members */}
      <section className="board-section">
        <div className="container container-wide">
          <ScrollReveal>
            <div className="board-section-header">
              <span className="badge badge-accent">Leadership</span>
              <h2>AUSA Board of Directors</h2>
              <div className="divider divider-center" />
              <p>
                Our board is composed of safety and operations leaders from
                Arizona's top utility companies.
              </p>
            </div>
          </ScrollReveal>

          <div className="board-grid">
            {boardMembers.slice(0, 3).map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <BoardMemberCard {...member} />
              </ScrollReveal>
            ))}
          </div>

          <div className="board-grid-2">
            {boardMembers.slice(3).map((member, i) => (
              <ScrollReveal key={i} delay={(i + 3) * 0.12}>
                <BoardMemberCard {...member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="committees-section">
        <div className="container container-wide">
          <ScrollReveal>
            <div className="committees-header">
              <span className="badge badge-gold">Committees</span>
              <h2>Our Working Groups</h2>
              <div className="divider divider-center divider-gold" />
              <p>
                AUSA's committees are the engine behind our programs and events,
                each focusing on a key area of our mission.
              </p>
            </div>
          </ScrollReveal>

          <div className="committees-grid">
            {committees.map((committee, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="committee-card">
                  <div className="committee-icon">{committee.icon}</div>
                  <h4>{committee.title}</h4>
                  <p>{committee.description}</p>
                  <div className="committee-chair">
                    <Users size={14} />
                    <span>
                      <strong>Active Committee</strong> — Accepting volunteers
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
