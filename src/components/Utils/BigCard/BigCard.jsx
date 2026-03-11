import React from "react";
import styles from "./BigCard.module.css";
export default function BigCard({ children }) {
  return <div className={styles.bigCard}>{children}</div>;
}
