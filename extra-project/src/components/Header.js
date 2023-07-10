import React from "react";
import Logo from "../assets/logo.png"
export const Header = () => {
  return(
    <header>
      <img src={Logo} alt = "" className="box" />
      <a href="/">Home</a>
    </header>
  )
}
