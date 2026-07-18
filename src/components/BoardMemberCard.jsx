import { Mail } from 'lucide-react';
import './BoardMemberCard.css';

export default function BoardMemberCard({ name, role, organization, email, image }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="board-card">
      <div className="board-card-image">
        {image ? (
          <>
            <img src={image} alt={name} />
            <div className="board-card-image-overlay" />
          </>
        ) : (
          <div className="board-card-placeholder">
            <span className="board-card-initials">{initials}</span>
          </div>
        )}
      </div>

      <div className="board-card-body">
        {role && <span className="board-card-role">{role}</span>}
        <h4 className="board-card-name">{name}</h4>
        <p className="board-card-org">{organization}</p>
        {email && (
          <a href={`mailto:${email}`} className="board-card-email">
            <Mail size={14} />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
