import { Nav, NavDropdown, NavLink } from "react-bootstrap"

const BigSubMenu = (props) => {

    const bigBarMenu = props.children.length > 0 ? (
        <NavDropdown title={props.title}>
                {props.children.map(child =>{
                    return(
                        <NavDropdown.Item>
                            {child.title}
                        </NavDropdown.Item>
                    )
                })}
        </NavDropdown>
        ) : (
        <NavLink>{props.title}</NavLink>
        );
    return (
        <div>
            <Nav className="bigSubMenu">{bigBarMenu}</Nav>
        </div>
    )
}

export default BigSubMenu;