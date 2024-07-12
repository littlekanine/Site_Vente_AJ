import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className={styles.headerGlobal}>
            <div className={styles.header}>
                <h1>L'Atelier</h1>
                <div className={styles.navigation}>
                    <Link href="/">Acceuil</Link>
                    <Link href="/">A Propos</Link>
                    <Link href="/Boutique">Boutique</Link>
                    <Link href="/">
                        <FontAwesomeIcon icon={faCat} />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
