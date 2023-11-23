import Button from "../Button/Button";
import "./ContentHeader.css"

const ContentHeader = () => {
    return (  
        <div className="ContentHeader">
            <h1>Hi, I am <span>Metin Karakaya</span>.</h1>
            <h2>A Front End Developer.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at sit aliquid eveniet quae, molestiae quidem sed quibusdam debitis soluta nisi quas optio ipsum tempora odio in incidunt deleniti dicta!</p>
            <Button
            title={"resume"}
            />
        </div>
    );
}
 
export default ContentHeader;