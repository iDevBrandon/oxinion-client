import React from "react";
import Dialog from "@mui/material/Dialog";
import { Divider, ListItemText, MenuItem, MenuList } from "@mui/material";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";


const Popover = ({ open }: any) => {
  const { data: me, error } = useMyInfoQuery();

  return (
    <div>
      <Dialog open={open}>
      <MenuList>
        {me &&
        <div>
          <MenuItem>
            <ListItemText >Edit</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
          <Divider />
        </div>
        }
        <MenuItem>
          <ListItemText>Report</ListItemText>
        </MenuItem>
      </MenuList>
      </Dialog>
    </div>
  );
};

export default Popover;
