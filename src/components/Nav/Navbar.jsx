import React from 'react';
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper} from '../../elements'
import Burger from './Burger.jsx';

const Navbar = () => { 
    const data = useStaticQuery(graphql`
        query {
          logo: file(relativePath: { eq: "logo.svg" }) {
            publicURL
          }
        }
      `)

    return (
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="My Logo" />
            </Link>
        <Burger />
        </NavWrapper>
    )
}

export default Navbar