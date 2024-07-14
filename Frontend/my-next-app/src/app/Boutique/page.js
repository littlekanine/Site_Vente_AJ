import React from "react";
import styles from "./Boutique.module.scss";
import Image from "next/image";

const page = () => {
    return (
        <div className={styles.boutiqueBackground}>
            <div className={styles.boutique}>
                <h1>Boutique</h1>
                <section className={styles.articles}>
                    <div className={styles.artcile}>
                        <Image src={"/assets/images/articles/atelier_1.5.jpg"} width={100} height={100} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default page;
