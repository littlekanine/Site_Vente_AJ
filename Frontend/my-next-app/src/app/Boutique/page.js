import React from "react";
import styles from "./Boutique.module.scss";
import Image from "next/image";

const page = () => {
    return (
        <div className={styles.boutiqueBackground}>
            <div className={styles.boutique}>
                <h1>Boutique</h1>
                <section className={styles.articles}>
                    <div className={styles.article}>
                        <Image src={"/assets/images/articles/atelier_1.5.jpg"} className={styles.articleImg} width={100} height={100} />
                        <div className={styles.articleAbout}>
                            <p>Price</p>
                            <p>Description</p>
                            <p>Quantité</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default page;
