import React from "react"
import { ContainerWrapper } from "../elements"
import {Footer} from "../components"
import Navbar from '../components/Nav/Navbar'

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {/* <Nav /> */}
      <Navbar/>
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
