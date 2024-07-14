import styles from "./login.module.scss";
import Buttons from "@/components/button/buttons";

const page = () => {
    return (
        <div className={styles.login}>
            <div className={styles.modale}>
                <form className={styles.formulaire}>
                    <div className={styles.input}>
                        <input placeholder="Nom d'utilisateur"></input>
                    </div>
                    <div className={styles.input}>
                        <input placeholder="Mot de passe" type="password"></input>
                    </div>
                    <Buttons message={"Login"} />
                </form>
            </div>
        </div>
    );
};

export default page;
