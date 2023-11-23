import ContentHeader from "../ContentHeader/ContentHeader";
import Nav from "../Nav/Nav";
import "./Header.css"

const Header  = () => {
    return (
        <header className="Header">
            <Nav/>
            <ContentHeader/>
        </header>
    );
}


export default Header ;