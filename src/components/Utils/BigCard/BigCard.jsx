import React from "react";
import styles from "./BigCard.module.css";
export default function BigCard({ children }) {
  return <section className={styles.bigCard}>{children}</section>;
}
