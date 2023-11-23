import Button from "../Button/Button";
import "./Footer.css"

const Footer = () => {
    return (  
        <footer className="Footer">
            <h2 id="contact">Contact</h2>
            <Button
            title={"email me"}
            />
            <br></br>
            <p>created by Metin Karakaya</p>
        </footer>
    );
}
 
export default Footer;