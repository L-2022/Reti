import React from "react";
import styles from "./CV.module.css";

const Cv = () => {
  return (

      <div className={styles.window}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>
              VASYL BILIAK BACKEND-FRONTEND ( PYTHON, NODE, REACT, JS) DEVELOPER
            </p>
            <p>EMBEDDED ENGINEER</p>
          </div>
          <div className={styles.contentLeft}>
            <div className={styles.mainContent}>
              <div className={styles.blocLeft}>
                <h4 className={styles.font_dancing_script}>SUMMARY </h4>
                Entry level Full-Stack developer, that learned this field 1
                year, with a strong background of experience in embedded
                programming. Experienced in developing web apps, familiarity
                with common stacks, know multiple front-end languages and
                libraries and also of multiple back-end languages and JavaScript
                frameworks, familiarity with databases, web servers, and UI or
                UX design. And also, I have completed several courses from
                popular platforms as Udemy and as a result - have own
                pet-projects. Highly motivated, with strong desire to improve
                new skills on real practice. Keen on solving technical
                challenges with awesome solutions. Ready to integrate in your
                team in short period of time.
              </div>
            </div>
            <div className={styles.blocLeft}>
              <h4>CONTACTS</h4>
              <lu>
                <li>
                  {" "}
                  Email:{" "}
                  <a href="bilyak7vasya@gmail.com">bilyak7vasya@gmail.com</a>
                </li>
                <li>
                  Linkedin:{" "}
                  <a href="https://linkedin.com/in/vasya-biliak-244352251">
                    www.linkedin.com/in/vasya-bilyak-244352251{" "}
                  </a>
                </li>
                <li>
                  github:{" "}
                  <a href="https://github.com/L-2022">
                    https://github.com/L-2022
                  </a>
                </li>
                <li>
                  {" "}
                  Tel.num.: <a href="tel:+380501377785">050 137 77 85</a>
                </li>
              </lu>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.blocRight}>
              <h4>WORK EXPERIENCE</h4>
              <h5>EMBEDDED ENGINEER</h5>
              <h6>BulcTek | 2021 – present</h6>
              <p>
                - Handled programming tasks for and maintained for factory
                dispensers (for example, combining HMI panels with a weight
                controller); -Proficient experience in usage technologies such
                as TiaPortal, EasyBuilder, protocols - Modbus and Profibus for
                embedded programming; -Wrote Architecture Reference Manual for
                existed applications;
              </p>
              <p>
                Key achievement: Designed a new feature (calibration for
                conveyor weights) for the company’s new controller (Enode4B
                Scyme company) in 90 Active Days
              </p>
            </div>
            <div className={styles.blocRight}>
              <h4>LIST OF SKILLS</h4>
              <ul className={styles.list}>
                <li>Knowledge of front-end technologies (HTML5, CSS3)</li>
                <li>
                  Knowledge of object-oriented programming language (Python,
                  JavaScript, ST, LD, FBD).
                </li>
                <li>
                  Udemy "Python3: Full course", "Node.js: Full course",
                  "React.js: Full course" certified
                </li>
                <li>Understanding databases (SQL and NoSQL) </li>
                <li>
                  Knowledge of GitHub, GitLab, Linux, Ubuntu, Postman, Pgadmin4.
                </li>
                <li>Agile experience</li>
                <li>
                  Knowledge of network protocols such as TCP/IP, Modbus,
                  Profibus
                </li>
                <li>Familiar with web services and REST API</li>
                <li>Basic understanding OWASP web security metology</li>
                <li>Debugging and problem-solving skills</li>
                <li>Excellent communication and active listening skills</li>
                <li>Collaborative and participatory style of working</li>
                <li>Intermediate English level (continuing learning)</li>
                <li>
                  Ability to learn new technology in the shortest period of time
                </li>
              </ul>
            </div>
            <div className={styles.blocRight}>
              <h4>EDUCATION</h4>
              <h5>
                IN 2020 COMPLETED THE FULL COURSE OF NATIONAL TECHNICAL
                UNIVERSITY OF UKRAINE "IGOR SIKORSKY KYIV POLYTECHNIC INSTITUTE"
              </h5>
              <h5>M.S. Engineering | 2020</h5>
              Obtained qualification:
              <h4>MASTER DEGREE</h4>
              Program Subject Area:{" "}
              <h5>
                ELECTRICAL ENERGETICS, ELECTRICAL ENGINEERING AND
                ELECTROMECHANICS
              </h5>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cv;
// // {/* <div class="col-12 col-md">
// //         <small class="d-block mb-3 text-muted">© 2022-2023</small>
// //       </div>
// //       <div class="col-6 col-md">
// //         <h5>Features</h5>
// //         <ul class="list-unstyled text-small">
// //           <li>
// //             <a class="text-muted" href="#">
// //               Cool stuff
// //             </a>
// //           </li>
// //         </ul>
// //       </div>
// //       <div class="col-6 col-md">
// //         <h5>Resources</h5>
// //         <ul class="list-unstyled text-small">
// //           <li>
// //             <a class="text-muted" href="#">
// //               Resource
// //             </a>
// //           </li>
// //         </ul>
// //       </div>
// //       <div class="col-6 col-md">
// //         <h5>About</h5>
// //         <ul class="list-unstyled text-small">
// //           <li>
// //             <a class="text-muted" href="#">
// //               Team
// //             </a>
// //           </li>
// //         </ul>
// //       </div> */}
