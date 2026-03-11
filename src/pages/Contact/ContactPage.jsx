import React from "react";
import styles from "./ContactPage.module.css";
import NavBar from "../../components/Navbar/NavBar";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <h1>Contact Info</h1>
      </div>
    </>
  );
}
