import "./Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Footer (){
    return(
        <div className="footer">
            <h4>Hagamos realidad tu idea!</h4>
            <p>Buenos Aires, Argentina</p>
            <div className="icon">
                <a href= "https://www.linkedin.com/in/martin-picasarri-b5010a2b6/" className="linkedin" target="_blank" rel= "noopener noreferrer"><FaLinkedin /> </a>
                <a href= "https://wa.me/5491165627315" className="wpp" target="_blank" rel= "noopener noreferrer" ><FaSquareWhatsapp /> </a>
            </div>
        </div>
    );
};

export default Footer;