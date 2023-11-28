import ContentHeader from "../ContentHeader/ContentHeader";
import Nav from "../Nav/Nav";
import "./Header.css"

const Header  = ({lightmodeChange, lightmodeCheck}) => {
    return (
        <header className="Header">
            <Nav lightmodeChange={lightmodeChange} lightmodeCheck={lightmodeCheck}/>
            <ContentHeader/>
        </header>
    );
}


export default Header ;