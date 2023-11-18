import React from "react";
import { PostCommentWrapper } from "./styles";
import { List, ListItem, ListItemText, TextField, Typography } from "@mui/material";

const Comments = () => {
  return (
    <PostCommentWrapper>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start" style={{ padding: "0 1rem" }}>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  @Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" style={{ padding: "0 1rem" }}>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  @Eren
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" style={{ padding: "0 1rem" }}>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  @Laren
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <div style={{ padding: "0 1rem", width: "100%" }}>
        <TextField
          id="standard-basic"
          label="Add a comment..."
          variant="standard"
        />
      </div>
    </PostCommentWrapper>
  );
};

export default Comments;
