import styles from "./login.module.scss";

const page = () => {
    return (
        <div className={styles.login}>
            <div className={styles.modale}>
                <div className={styles.formulaire}>
                    <div className={styles.input}>
                        <h2>Nom d'utilisateur</h2>
                        <input></input>
                    </div>
                    <div className={styles.input}>
                        <h2>Mot de passe</h2>
                        <input></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
