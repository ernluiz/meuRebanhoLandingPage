import "../styles/footer.css";
import Imagem11 from "../assets/logo-techgold.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <img src={Imagem11} alt="Imagem de exemplo" className="gallery-image" />
                <p>&copy; {new Date().getFullYear()} Techgold. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
