import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap"
import menus from "../data/menus"


export default function MainMenu(){

    const subMenus = menus.map(subMenu => {
        return(
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children}/>
        )
    })
    return(
        <div>
            <Navbar bg="light" expand="lg">
                {subMenus}
                <div className="days">30 Days Free Return</div>
            </Navbar>
            
        </div>
    )
}