import NavLinks from "./NavLinks";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscClose } from "react-icons/vsc";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu className="HamBrgrIcon" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <VscClose className="HamBrgrIcon" onClick={() => setOpen(!open)} />
  );

  return (
    <nav className="MobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
