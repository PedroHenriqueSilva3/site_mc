/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import styles from "../css/navbar.module.css"; 

function Navbar() {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}> 
                <div className={styles.logo}>
                    <img className={styles.foto} src={`${process.env.PUBLIC_URL}/logo.webp`} alt="Logo" />  
                </div>

                <div className={styles.informacoes}>
                    <div className={styles.esquerda}>
                        <a href="#">Trabalhe Conosco</a>
                        <a href="#">FALE COM O MÉQUI</a>
                        <a href="#">Méqui mais Próximo</a>
                    </div>

                    <div className={styles.direita}>
                        <a href="#" className={styles.link}>
                            <img className={styles.celular} src={`${process.env.PUBLIC_URL}/celular.png`} alt="icon" /> 
                            Baixe o App
                        </a>

                        <button className={styles.botao}>
                                  
                            Peça seu Méqui
                        </button>
                    </div>
                </div>

                <div className={styles.menu}>
                    <a href="#">Cardápio</a>
                    <a href="#">Lançamento</a>
                    <a href="#">Quem somos</a>
                    <a href="#">Família</a>
                    <a href="#">Promoções</a>
                    <a href="#">Méqui para você</a>
                    <a href="#">McDia Feliz</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
