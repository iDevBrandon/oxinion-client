import React from "react";
import { GoSignOut } from "react-icons/go";
import { RiUserSmileLine } from "react-icons/ri";
import { DropdownWrapper, MenuItem } from "./styles";

const Dropdown = () => {
  return (
    <DropdownWrapper>
      <MenuItem onClick={() => console.log("profile")}>
        <RiUserSmileLine />
        <span>&nbsp;Profile</span>
      </MenuItem>
      <MenuItem onClick={() => console.log("logout")}>
        <GoSignOut />
        <span>&nbsp;Sign out</span>
      </MenuItem>
    </DropdownWrapper>
  );
};

export default Dropdown;
