import Links from "./Links";
import styles from '../styles/Navigation.module.css';

export default function Navigation(){
    return(
        <nav className={styles.nav}>
            <Links text={"Main page"} href={'/'}/>
            <Links text={"User links"} href={'/users'}/>
        </nav>
    )
}