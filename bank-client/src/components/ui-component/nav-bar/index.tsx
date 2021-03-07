import React from "react"
import { Nav } from "react-bootstrap"

import { Link } from "react-router-dom"
import css from "./style.module.css"

export const routes = [
    { to: "/", title: "Accounts" },
    { to: "/CreateAccount", title: "Create Account" },
    { to: "/change-password", title: "Change Password" },
    { to: "/login", title: "Login" },

]

export default function NavBarApp() {
    return (<Nav
        variant="pills" className={css.mainNavBar}>
        <NavItmesList links={routes} />
    </Nav>)
}

function NavItmesList(props: any): any {

    const { links } = props
    if (!Array.isArray(links)) return null
    return links.map(link => {
        return <Nav.Item>  <Link className={css.customLink} to={link.to} >{link.title}</Link> </Nav.Item>
    })
}