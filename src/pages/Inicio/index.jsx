import Banner from '../../components/Banner'; 
import styles from './Inicio.module.css'; 
import posts from '../../json/posts.json'
import Footer from '../../components/Footer';

const Inicio = () => {
    return(
        <>
        <main>
            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        Post...
                    </li>
                ))}
            </ul>
        </main>
        <Footer />
        </>
    )
}

export default Inicio; 