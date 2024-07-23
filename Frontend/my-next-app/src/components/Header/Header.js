import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className={styles.headerGlobal}>
            <div className={styles.header}>
                <Link href="/">
                    <h1>L'Atelier</h1>
                </Link>
                <div className={styles.navigation}>
                    <Link href="/">Acceuil</Link>
                    <Link href="/">A Propos</Link>
                    <Link href="/Boutique">Boutique</Link>
                    <div className={styles.localisation}>
                        <FontAwesomeIcon className={styles.ping} icon={faLocationDot} />
                        <p>11 Rue Dessoles, 32000 Auch</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
