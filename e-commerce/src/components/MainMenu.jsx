import SubMenu from "./SubMenu";
import BigSubMenu from "./BigSubMenu";
import { Navbar } from "react-bootstrap"
import menus from "../data/menus"
import bigMenu from "../data/bigMenus"



export default function MainMenu(){

    const subMenus = menus.map(subMenu => {
        return(
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children}/>
        )
    })
    const biggyMenu = bigMenu.map(element => {
        return(
            <BigSubMenu title={element.title} position={element.position} children={element.children}/>
        )
    })
    return(
            <Navbar className="mainMenu" bg="light" expand="lg">
                {biggyMenu}
                {subMenus}
                <div className="days">30 Days Free Return</div>
            </Navbar>
    )
}