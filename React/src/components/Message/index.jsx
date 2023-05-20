import styles from './Message.module.scss' 
const messages = [
    {
        senderName: 'Ira',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
    {
        senderName: 'Egor',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
    {
        senderName: 'Artur',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
    {
        senderName: 'Evgen',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
    {
        senderName: 'Ilia',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
    {
        senderName: 'Avgustin',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
    {
        senderName: 'Jotaro',
        massageText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque corporis illo rem facilis iure quae tenetur veniam',
    },
]

export const Message = ()=>{
    return(
        <div className={styles.messageWrapper}>
            <h2>Message</h2>
           { messages.map(mess =>(
            <div key={mess.senderName + Math.random} className={styles.messageWrapper__message}>
                <h4>{mess.senderName}</h4>
                <p>{mess.massageText}</p>
            </div>
           ))}
        </div>
    )
}