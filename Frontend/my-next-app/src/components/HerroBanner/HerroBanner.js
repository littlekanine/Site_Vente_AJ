import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HerroBanner.module.scss";

const HerroBanner = () => {
    return (
        <div className={styles.herro}>
            {/* <Link> */}
            <div className={styles.image}>
                <Image
                    src="https://image.tmdb.org/t/p/w500/hYQs5RPHiWctoYqvI8baHiIqdd8.jpg"
                    alt="Image du film Creed III"
                    //permet que l'image prenne la totalité du bloc
                    fill
                />
                <h2 className={styles.text}>Exposant du moment : Texte de description</h2>
            </div>
            {/* </Link> */}
        </div>
    );
};

export default HerroBanner;
