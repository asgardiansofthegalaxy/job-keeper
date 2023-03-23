import React from 'react';

import "../styles/Team.css";

interface TeamMemberProps {
  name: string;
  pictureUrl: string;
}

const TeamMember = ({ name, pictureUrl }: TeamMemberProps) => (
  <div className="team-member">
    <img src={pictureUrl} alt={`Picture of ${name}`} />
    <h3>{name}</h3>
  </div>
);

interface TeamProps {
  members: {
    id: number;
    name: string;
    pictureUrl: string;
  }[];
}

const Team = ({ members }: TeamProps) => (
  <div className="team">
    <h2>Our Team</h2>
    <div className="team-members">
      {members.map(member => (
        <TeamMember
          key={member.id}
          name={member.name}
          pictureUrl={member.pictureUrl}
        />
      ))}
    </div>
  </div>
);

export default Team;




