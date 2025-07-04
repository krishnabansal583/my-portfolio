"use client";

import React, { useState } from "react";
import Nav from "./Nav"; // You missed importing Nav component
import MobileNav from "./MobNav"; // You missed importing MobileNav component
const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
