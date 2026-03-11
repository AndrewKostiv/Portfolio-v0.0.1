import React from "react";
import styles from "./SmallCard.module.css";

export default function SmallCard({ children }) {
  return <div className={styles.smallCard}>{children}</div>;
}
