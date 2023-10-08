import styles from './Banner.module.css';
import circuloColorido from '../../../src/assets/circulo_colorido.png';
import minhaFoto from '../../../src/assets/img-portfolio.jpeg';

export default function Banner () {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, world! 
                </h1>

                <p className={styles.paragrafo}>
                    I'm Gustavo Farias, a Software Development student. Welcome to this small project that I made to study about Single Page Applications (SPA's), I hope you enjoy it :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto Gustavo Farias Capa"
                />
            </div>
        </div>
    )
}; 
