/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from "../css/info.module.css"

function Info() {
    return(
        <div className={styles.fundo}>
            <div className={styles.container}>

                <div className={styles.coluna}>
                    <div className={styles.titulo}>Quem Somos</div>
                    <div className={styles.linha}>Institucional</div>
                    <div className={styles.linha}>Franquias</div>
                    <div className={styles.linha}>Trabalhe Conosco</div>
                    <div className={styles.linha}>Privacidade</div>
                    <div className={styles.linha}>Desenvolvimento <br/> Sustentável e <br/> Compromisso Social</div>
                    <div className={styles.linha}>Portas Abertas</div>
                    <div className={styles.linha}>Publicidade Responsável</div>
                </div>

                <div className={styles.coluna}>
                    <div className={styles.titulo}>Família</div>
                    <div className={styles.linha}>Lançamentos</div>
                    <div className={styles.linha}>McLanche Feliz</div>
                    <div className={styles.linha}>Méqui Box</div>
                    <div className={styles.linha}>Privacidade</div>
                    <div className={styles.linha}>Compromissos com as <br/> Famílias</div>
                </div>

                <div className={styles.coluna}>
                    <div className={styles.titulo}>Méqui para Você</div>
                    <div className={styles.linha}>App do Méqui</div>
                    <div className={styles.linha}>McDelivery</div>
                    <div className={styles.linha}>Méqui no IFood</div>
                    <div className={styles.linha}>Peça e Retire</div>
                    <div className={styles.linha}>Gift Card</div>
                    <div className={styles.linha}>Méqui Zap</div>
                    <div className={styles.linha}>Drive-Thru</div>
                    <div className={styles.linha}>Use Méqui</div>
                </div>

                <div className={styles.coluna}>
                    <div className={styles.titulo}>Contato</div>
                    <div className={styles.linha}>Contato</div>
                </div>

                

            </div>

            <div className={styles.container2}>
                <div className={styles.icon_container}>
                    <a>
                        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                    </a>
                </div>

                <div className={styles.imagem} >
                    <a><img  className={styles.tag} src={`${process.env.PUBLIC_URL}/appStore.png`} alt="Logo" /></a>
                    <a><img className={styles.tag} src={`${process.env.PUBLIC_URL}/googlePlay.png`} alt="Logo" /></a>
                </div>
            </div>
        
        </div>
    )
}

export default Info;