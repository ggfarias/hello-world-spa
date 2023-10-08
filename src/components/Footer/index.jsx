
import styles from './Footer.module.css';
import github from '../../assets/github-icon.svg'; 

export default function Footer () {
    return (
        <>
            <div className={styles.footer}>
                Developed by @ggfarias
                <img src={github} alt="Logo Github" />
            </div>
        </>
    )
}

