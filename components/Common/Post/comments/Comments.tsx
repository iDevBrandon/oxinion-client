import React from "react";
import { CommentWrapper, PostCommentWrapper } from "./styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import CommentForm from "./CommentForm";

const Comments = ({ post }: any) => {
  const { comments } = post;
  console.log("==========");
  console.log(comments);

  return (
    <PostCommentWrapper>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {comments?.map((comment: any, _id: string) => {
          return (
            <ListItem
              key={_id}
              alignItems="flex-start"
              style={{ padding: "0 1rem" }}
            >
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @{comment.author?.username} - {comment.content}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
      <div style={{ padding: "0 1rem", width: "100%" }}>
        <CommentForm post={post} />
      </div>
    </PostCommentWrapper>
  );
};

export default Comments;
