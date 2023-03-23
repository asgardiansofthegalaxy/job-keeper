import React from "react";

import "../styles/Team.css";

interface TeamMemberProps {
  name: string;
  description: string,
  pictureUrl: string;
}

const TeamMember = ({ name, description, pictureUrl }: TeamMemberProps) => (
  <div className="team-member">
    <div className="team-wrap">
      <div className="team-member-img">
        <img src={pictureUrl} alt={`Picture of ${name}`} />
      </div>
      <div className="team-member-name">
        <h3>{name}</h3>
      </div>
    </div>
    <p>{description}</p>

  </div>
);

interface TeamProps {
  members: {
    id: number;
    name: string;
    description: string;
    pictureUrl: string;
  }[];
}

const Team = ({ members }: TeamProps) => (
  <div className="team">
    <h2>Our Team</h2>
    <div className="team-members">
      {members.map((member) => (
        <TeamMember
          key={member.id}
          name={member.name}
          description={member.description}
          pictureUrl={member.pictureUrl}
        />
      ))}
    </div>
  </div>
);

export default Team;
