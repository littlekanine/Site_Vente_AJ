import HerroBanner from "@/components/HerroBanner/HerroBanner";
import About from "@/components/About/About";
import styles from "./page.module.css";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";

export default function Home() {
    return (
        <div className={styles.main}>
            <HerroBanner />
            <About />
            <InstagramFeed />
        </div>
    );
}
