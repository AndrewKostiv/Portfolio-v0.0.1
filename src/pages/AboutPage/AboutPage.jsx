import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./AboutPage.module.css";
export default function Page1() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <h1>About</h1>
        <h2>Coding</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          distinctio aliquam porro sint impedit possimus eum magni corrupti, quo
          animi voluptas ipsum iusto, unde velit rem totam enim neque at.
        </p>
        <h2>Airsoft</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ut
          minima, eaque iure itaque qui cupiditate nihil maxime ea? Doloremque
          fugit totam recusandae unde velit. Odio eos dolore velit dolorum!
        </p>
        <h2>Future Plans</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dignissimos placeat voluptate est minus molestias expedita alias ea.
          Provident quos nihil voluptatibus aspernatur fuga in aut quam minus at
          recusandae?
        </p>
      </div>
    </>
  );
}
