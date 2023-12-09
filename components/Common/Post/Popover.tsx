import React from "react";
import Dialog from "@mui/material/Dialog";
import { Divider, ListItemText, MenuItem, MenuList } from "@mui/material";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removePostAPI } from "@/apis/posts";

const Popover = ({ open, post }: any) => {
  const { data: me, error } = useMyInfoQuery();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => removePostAPI(post._id), {
    onSuccess: () => {
      queryClient.refetchQueries(["posts"]);
    },
  });

  console.log(post);
  console.log(open);

  const handleDelete = () => {
    mutate();
    console.log("delete");
  };

  return (
    <div>
      <Dialog open={open}>
        <MenuList>
          {post?.author?.username === me?.username && (
            <div>
              <MenuItem>
                <ListItemText>Edit</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText onClick={handleDelete}>Delete</ListItemText>
              </MenuItem>
              <Divider />
            </div>
          )}
          <MenuItem>
            <ListItemText>Report</ListItemText>
          </MenuItem>
        </MenuList>
      </Dialog>
    </div>
  );
};

export default Popover;
