"use client";
import { Button } from "reactstrap";

import styles from "./MyButton.module.css";
import { GlobalContainerPortal } from "./GlobalContainer";

const MyButton = () => {
  return (
    <>
      <GlobalContainerPortal />
      <Button className={styles.button}>MyButton</Button>
    </>
  );
};

export default MyButton;
