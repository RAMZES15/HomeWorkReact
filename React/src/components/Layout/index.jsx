import {Header} from '../'
import { Routes } from "../../route";
import styles from './Main.module.scss' 
import {Outlet} from 'react-router-dom'

export const Layout = () => {
    return (
        <>
        
        <Header/>
        <main className={styles.main}>
            <Outlet/>
        </main>
        </>
    )
}