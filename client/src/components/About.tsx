import React from "react";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.body}>
      <h2>About</h2>
      <div>
        <p>
          Introducing our job application tracking application, designed to help
          job seekers easily keep track of the jobs they have applied for.
        </p>
        <p>
          Our app provides a centralized location for users to store all of
          their job application information, including job titles, company
          names, application deadlines, interview dates, and job statuses.
        </p>
        <p>
          With our user-friendly interface, users can easily add, edit, and
          delete job listings, as well as view all of their job applications in
          one place.
        </p>
        <p>
          Our app also offers helpful features such as the ability to set
          reminders for application deadlines and interview dates, as well as
          the ability to add notes and comments to each job listing.
        </p>
        <p>
          Our job application tracking app is perfect for anyone who wants to
          stay organized and keep track of their job search progress. Whether
          you are actively searching for a job or simply want to keep track of
          your previous job applications, our app is an essential tool for
          managing your job search. Sign up today and start organizing your job
          search with ease!
        </p>
      </div>
    </div>
  );
};

export default About;
