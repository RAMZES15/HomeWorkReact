import styles from './Main.module.scss' 
import {Message,Employees,ExchangeRate} from '../'

export const Main = () =>{
    return (
        <main className={styles.main}>
            <Employees/>
            <ExchangeRate/>
            <Message/>
        </main>
    )
}