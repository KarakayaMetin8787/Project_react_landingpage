import ContentMain from "../ContentMain/ContentMain";
import SkillBoxes from "../SkillBoxes/SkillBoxes";
import "./Main.css"

const Main = () => {
    return (  
        <main className="Main">
            <h2 id="projects">Projects</h2>
            <article>
                <ContentMain
                    titleNumber={1}
                />
                <ContentMain
                    titleNumber={2}
                />
                <ContentMain
                    titleNumber={3}
                />
            </article>
            <h2 id="skills">Skills</h2>
            <section>
                <SkillBoxes
                    title={"HTML"}
                />
                <SkillBoxes
                    title={"CSS"}
                />
                <SkillBoxes
                    title={"Javascript"}
                />
                <SkillBoxes
                    title={"React"}
                />
                <SkillBoxes
                    title={"SASS"}
                />
                <SkillBoxes
                    title={"Tailwind CSS"}
                />
                <SkillBoxes
                    title={"Git"}
                />
                <SkillBoxes
                    title={"UI/UX"}
                />
            </section>
        </main>
    );
}
 
export default Main;