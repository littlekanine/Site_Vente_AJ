import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCat } from "@fortawesome/free-solid-svg-icons";
import styles from "./button.module.scss";

function Buttons() {
    return (
        <div className={styles.animatedButton}>
            <p className={styles.text}>Connexion</p>
            <FontAwesomeIcon icon={faArrowRight} className={styles.arr1} />
            <FontAwesomeIcon icon={faCat} className={styles.cat} />
        </div>
    );
}

export default Buttons;
