import img1 from "../assets/N.png"
import svg1 from "../assets/Progress Bar1.svg"
import svg2 from "../assets/Progress Bar2.svg"
import svg3 from "../assets/Progress Bar3.svg"



export const Profile = () => {

    return (
        <div class="profile">
          <img src={img1}/>
            <div class="stats">
            <div class="stat-start">
                <b>Profile</b>
                UI / UX Engineer, Front-end Developer
            </div>
            <div class="stat-name">
                <b>UX Research</b>
                <img src={svg1}/>
             </div>
            <div class="stat-name">
                <b>Tools</b>
                 Paper, Pen, Balsamiq
            </div>
            <div class="stat-name">
                <b>UI Design</b>
                <img src={svg2}/>
            </div>
             <div class="stat-name">
                <b>Tools</b>
                Adobe PS, AI, XD, Figma, InVision
            </div>
            <div class="stat-name">
                <b>Front-end Dev</b>
                 <img src={svg3}/>
            </div>
            <div class="stat-name">
                <b>Tools</b>
                HTML, CSS, JS, Bootstrap, React
             </div>
        </div>
        </div>
    )
}