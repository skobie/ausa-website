import { Home, Shield, Presentation, Store, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import BoardMemberCard from '../components/BoardMemberCard';
import ScrollReveal from '../components/ScrollReveal';
import heroUtilities from '../assets/images/hero-utilities.png';
import './BoardAndCommittees.css';

const boardMembers = [
  {
    name: 'Christine Ries',
    role: 'President',
    organization: 'Salt River Project',
    email: 'christine.ries@srpnet.com',
    image: '/Chris Ries.avif',
  },
  {
    name: 'Mike Mitts',
    role: 'Co-President',
    organization: 'Tucson Electric Power',
    email: 'mmitts@tep.com',
    image: '/mike mitts.avif',
    imageStyle: { objectFit: 'contain', backgroundColor: '#9a9a9a', objectPosition: 'center' },
  },
  {
    name: 'Heather Legg',
    role: 'Vice President',
    organization: 'Salt River Project',
    email: 'heather.legg@srpnet.com',
    image: '/Heather Legg.avif',
  },
  {
    name: 'Mark Roll',
    role: 'Treasurer',
    organization: 'Sulphur Springs Valley Electric Cooperative',
    image: '/Mark Roll.avif',
  },
  {
    name: 'Ely Yingling',
    role: 'Secretary',
    organization: 'Arizona Public Service',
    image: '/Ely Yingling.avif',
  },
];

const committees = [
  {
    icon: <Store size={24} />,
    title: 'Vendor Committee',
    description:
      'Manages vendor relationships, booth assignments, and the vendor expo portion of the annual conference, connecting utilities with industry suppliers.',
    chair: 'Steve Winden, McAvoy-Markham',
    volunteers: 'Brian Stahovich, Gary Andrew, Clark Power Products',
  },
  {
    icon: <Presentation size={24} />,
    title: 'Presentation Committee',
    description:
      'Curates and coordinates speakers, presentations, and educational content for the annual conference and other AUSA events throughout the year.',
    chair: 'Ryan Hyatt, Salt River Project',
  },
  {
    icon: <Home size={24} />,
    title: 'Host Committee',
    description:
      'Responsible for coordinating all logistics for the annual AUSA Conference & Vendor Expo, including venue, catering, registration, and attendee experience.',
    chair: 'Ralph Gallegos, Tucson Electric Power',
    volunteers: 'LaVerne Steah, Salt River Project',
  },
  {
    icon: <Shield size={24} />,
    title: 'Safety Roundtable Committee',
    description:
      'Organizes the annual safety roundtable meeting where utility safety professionals gather to share best practices, incident reviews, and innovative safety solutions.',
    chair: 'Clint Bragg, Salt River Project & Frank Sisty, IBEW Local 769',
  },
];

export default function BoardAndCommittees() {
  return (
    <>
      <HeroSection
        backgroundImage={heroUtilities}
        badge="Leadership"
        title="Board & Committees"
        subtitle="Meet the dedicated professionals who lead AUSA's mission to promote safety collaboration across the Southwest's utility industry."
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
                the Southwest's top utility companies.
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

      {/* Board Group Photo */}
      <section className="board-group-photo">
        <div className="container container-wide">
          <ScrollReveal>
            <div className="board-group-photo-inner">
              <img
                src="/refwausalink/AUSA Board and Presentation Manny, Committee Chair.jpg"
                alt="AUSA Board of Directors at the Annual Conference"
              />
              <div className="board-group-photo-caption">
                AUSA Board of Directors & Committee Chairs — Annual Conference
              </div>
            </div>
          </ScrollReveal>
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
                      <strong>Chair:</strong> {committee.chair}
                    </span>
                  </div>
                  {committee.volunteers && (
                    <div className="committee-chair committee-volunteers">
                      <Users size={14} />
                      <span>
                        <strong>Volunteers:</strong> {committee.volunteers}
                      </span>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
