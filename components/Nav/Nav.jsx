import Sun from "../svg/Sun";
import "./Nav.css"
import Moon from "./icons8-halbmond-50.png"


const Nav = ({lightmodeChange, lightmodeCheck}) => {

const modeChange = () => {
    lightmodeChange((toggle) => !toggle);
};

const element = (lightmodeCheck ? <img src={Moon}/> : <Sun/> )

    return ( 
        <nav className="Nav" >
            <p>JS.</p>
            <ul>
                <li><a href="#projects">projects</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#contact">contact</a></li>
                <a href="#" onClick={modeChange}>{element}</a>
            </ul>
        </nav> 
    );
}

export default Nav;