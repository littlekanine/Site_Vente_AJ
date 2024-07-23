"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./About.module.scss";
import Image from "next/image";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log(window.innerWidth);

            const elements = [
                { className: ".creatrice", delay: 200 },
                { className: ".atelier1", delay: 800 },
                { className: ".atelier2", delay: 1500 },
                { className: ".atelier3", delay: 2200 },
            ];

            elements.forEach(({ className, delay }) => {
                ScrollReveal().reveal(className, {
                    delay,
                    distance: "200px",
                    origin: "right",
                    duration: 1000,
                    easing: "ease-in-out",
                    reset: false,
                });
            });
        }
    }, []);
    return (
        <div>
            <section className={styles.about}>
                <div className={styles.block}>
                    <div className={styles.left}>
                        <div className={styles.aboutTitle}>
                            <h2>L'Atelier de la luciole qu'est ce que c'est ? </h2>
                        </div>
                        <p>
                            Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes,
                            qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti. Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad
                            quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine
                            colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes. Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere. Non enim neque tu
                            possis, quamvis excellas, omnes tuos ad honores amplissimos perducere, ut Scipio P. Rupilium potuit consulem efficere, fratrem eius L. non potuit. Quod si etiam possis quidvis deferre ad alterum, videndum est tamen, quid ille possit sustinere.
                        </p>
                        <p>
                            Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis permutatione iumentorum emensis venit Petobionem oppidum Noricorum, ubi reseratae sunt insidiarum latebrae omnes, et Barbatio repente apparuit comes,
                            qui sub eo domesticis praefuit, cum Apodemio agente in rebus milites ducens, quos beneficiis suis oppigneratos elegerat imperator certus nec praemiis nec miseratione ulla posse deflecti. Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad
                            quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine
                            colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes. Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere. Non enim neque tu
                            possis, quamvis excellas, omnes tuos ad honores amplissimos perducere, ut Scipio P. Rupilium potuit consulem efficere, fratrem eius L. non potuit. Quod si etiam possis quidvis deferre ad alterum, videndum est tamen, quid ille possit sustinere.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <div className="creatrice">
                            <Image className={styles.creatrice} src="/assets/images/18788287960_043_lr95.jpg" alt="Anne Jonas Auteur et créatrice" width={500} height={500} />
                        </div>
                        <div className="atelier1">
                            <Image className={styles.atelier} src="/assets/images/atelier_1.jpg" alt="Le magasin" width={300} height={300} />
                        </div>
                        <div className="atelier3">
                            <Image className={styles.atelier3} src="/assets/images/atelier_2.jpg" alt="Le magasin" width={250} height={250} />
                        </div>
                        <div className="atelier2">
                            <Image className={styles.atelier2} src="/assets/images/atelier_1.5.jpg" alt="Le magasin" width={250} height={250} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.instagramFeed}>
                <h2>Mon actualité sur Instagram</h2>
                <Link href="https://www.instagram.com/latelierauch/" target="_blank" alt="Lien vers la page instagram de L'atelier à Auch">
                    <FontAwesomeIcon icon={faInstagram} className={styles.insta} />
                </Link>
            </section>
            <section>
                <div className={styles.formulaire}>
                <form className={styles.formulaire}>
                    <div className={styles.input}>
                        <input placeholder="Nom d'utilisateur"></input>
                    </div>
                    <div className={styles.input}>
                        <input placeholder="Mot de passe" type="password"></input>
                    </div>
                    {/* <Buttons message={"Login"} /> */}
                </form>
                </div>
            </section>
        </div>
    );
};

export default About;
