import styles from "../css/footer.module.css"

function Footer() {
    return(
        <div>
            <hr/>
        
        <div className={styles.container}>
            <div className={styles.texto}>
                <p>Privacidade</p>
                <p>Termos e Condições</p>
            </div>
            <div className={styles.logo}>
            <img className={styles.foto} src={`${process.env.PUBLIC_URL}/logo.webp`} alt="Logo" />  
            © McDonald's 2024
            </div>
        </div>

        </div>
    ) 
}

export default Footer;