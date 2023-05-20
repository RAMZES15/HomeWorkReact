import { AuthContext } from "../";
import { useContext } from "react";
import styles from './Header.module.scss' 
import {path} from "../../route/path.js"
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const { handleLogout, userStatus } = useContext(AuthContext);
    const navigate = useNavigate();
    const logOut = (e) => {
        e.preventDefault();
        handleLogout()
        navigate('/');
    }
    return (
        <header className={userStatus? styles.header: styles.headerLogin + ' ' + styles.header }>
            <a href={path.home} className={styles.header__logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" alt="logo" />
            </a>
            {userStatus && (
            <nav className={styles.header__nav}>
                <ul className={styles.header__navList}>
                    <li className={styles.header__navItem}><a href={path.home}>Home</a></li>
                    <li className={styles.header__navItem}><a href={path.employeesTable}>Employees Table</a></li>
                </ul>
            </nav>
            )}
            {userStatus && (
                <button className={styles.header__button} onClick={logOut}>Log out</button>
            )}
            
        </header>
    )
}
