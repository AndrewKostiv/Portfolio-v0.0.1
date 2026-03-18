import React from "react";
import styles from "./ContactPage.module.css";
import NavBar from "../../components/Navbar/NavBar";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <h1>Contact Info</h1>
        <div>
          <p>Email: akostiv@binghamton.edu</p>
          <p>Email 2: andrewKostiv1@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/andrew-kostiv-853010300/">
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/AndrewKostiv">Github</a>
          </p>
        </div>
      </div>
    </>
  );
}
