import "./ContentMain.css"

const ContentMain = (props) => {
    return (  
        <div className="ContentMain">
            <h3>Project {props.titleNumber}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa minima cumque deserunt blanditiis iste vitae vel, magnam voluptates, maxime, non error? Hic aliquid sunt laborum inventore vel ab eos!</p>
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>SASS</li>
            </ul>
        </div>
    );
}
 
export default ContentMain;