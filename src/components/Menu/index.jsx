import styles from "./Menu.module.css";
import { Link, useLocation } from 'react-router-dom';
import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Start
                </MenuLink>
                <MenuLink to='/sobremim'>
                    About Me
                </MenuLink>
            </nav>
        </header>
    )
}