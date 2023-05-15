import styles from './Header.module.scss' 

export const Header = () => {
    return (
        <header className={styles.header}>
            <a href='#' className={styles.header__logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" alt="logo" />
            </a>
        </header>
    )
}
