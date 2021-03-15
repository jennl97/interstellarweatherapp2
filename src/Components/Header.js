import React from "react";
import styled from "styled-components";

//router
import { withRouter } from 'react-router-dom';

import Dropdown from './Dropdown';

//Styled Components
const Nav = styled("div")`
background-color: #fff;
`;

const NavHeader = styled("div")`
display: flex;
max-width: 1200px;
padding: 30px 20px;
`;

const NavLeft = styled("div")`
width: 33.333%;
text-align: left;
`;

const NavCenter = styled("div")`
width: 33.333%;
text-align: center;
`;

const NavRight = styled("div")`
width: 33.333%;
text-align: left;
`; 

function Header(props){
    const pushToRoute = route => {
        props.history.push(route)
    }

    return(
        <div>
            <Nav>
                <NavHeader>
                    <NavLeft  onClick={() => pushToRoute("/")}><p className="NavText"><strong>Interstellar Weather App</strong></p></NavLeft>
                    <NavCenter></NavCenter>
                    <NavRight><Dropdown /></NavRight>
                </NavHeader>
            </Nav>
        </div>
    )
}

export default withRouter(Header);