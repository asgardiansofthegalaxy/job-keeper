import React from "react";

import styles from "../styles/Team.module.css";

interface TeamMemberProps {
  name: string;
  description: string;
  image: string;
}

const TeamMember = ({ name, description, image }: TeamMemberProps) => (
  <div className={styles.card}>
    <div className={styles.cardBody}>
      <img
        src={image}
        alt={`Picture of ${name}`}
        className={styles.cardImage}
      />
      <h3 className={styles.cardTitle}>{name}</h3>
    </div>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

interface TeamProps {
  members: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
}

const Team = ({ members }: TeamProps) => (
  <div className={styles.body}>
    <h2>Our Team</h2>
    <div className={styles.teamMembers}>
      {members.map((member) => (
        <TeamMember
          key={member.id}
          name={member.name}
          description={member.description}
          image={member.image}
        />
      ))}
    </div>
  </div>
);

export default Team;
