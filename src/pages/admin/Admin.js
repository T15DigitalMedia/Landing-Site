import React from 'react'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Projects from './Projects'

export default function Admin() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Admin Home</h2>
            <ul>
                <li>
                    <Link to={`${url}`}>Admin Home</Link>
                </li>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`${url}/projects`}>Projects</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}`} component={Projects} />
            </Switch>
        </div>
    )
}
