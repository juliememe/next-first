import Link from "next/link";
import styles from '../styles/Links.module.css';

export default function ({text, href}){
    return(
        <Link className={styles.link} href={href}>{text}</Link>
    )
}