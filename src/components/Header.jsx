import { Greeting } from "./Greeting"
import { Nav } from "./Nav"



export const Header = () => {

    return (
        <header>
            <div className="header">
                <Nav />  
                <Greeting />  
            </div>          
        </header>
    )
}