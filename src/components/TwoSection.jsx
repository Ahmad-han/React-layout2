import rect1 from "../assets/Rectangle.png"
import rect2 from "../assets/Rectangle2.png"
import msk3 from "../assets/Mask Group.png"
import rect3 from "../assets/Rectangle3.png"




export const TwoSection = () => {

    return (
        <div className="two-sections">
            <div className="text">
                <h4>UX Research</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ac dictum nibh nam odio cursus id. 
                    Diam massa semper a tincidunt cursus ultricies lectus eget urna.</p>
            </div>
            <div className="slides">
                <div className="img-1">
                    <img src={rect1}/>
                    <img src={rect2}/>
                </div>
                <div className="img-2">
                    <img src={msk3}/>
                    <img src={rect3}/>
                </div>
            </div>
        </div>
    )
}