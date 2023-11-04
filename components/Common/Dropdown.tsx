import React from "react";
import { GoSignOut } from "react-icons/go";
import { RiUserSmileLine } from "react-icons/ri";
import { DropdownWrapper, MenuItem } from "./styles";

// const DropdownItem = (props) => {
//   return (
//     <MenuItem>
//       <span className="icon-button">{props.icon}</span>
//       {props.children}
//     </MenuItem>
//   );
// };

const Dropdown = () => {
  return (
    <DropdownWrapper>
      <MenuItem onClick={() => console.log("profile")}>
        <RiUserSmileLine />
        <span>&nbsp;Profile</span>
      </MenuItem>
      <MenuItem onClick={() => console.log("sign")}>
        <GoSignOut />
        <span style={{ fontSize: "0.7rem" }}>&nbsp;Sign out</span>
      </MenuItem>
    </DropdownWrapper>
  );
};

export default Dropdown;
