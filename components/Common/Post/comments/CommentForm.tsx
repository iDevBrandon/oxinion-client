import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import useInput from "../../../../hooks/useInput";
import Chip from "@mui/material/Chip";
import { CommentSubmitButtons } from "./styles";

const CommentForm = ({ post }: any) => {
  const [commentText, setCommentText] = useState("");

  const onChangeComment = useCallback((e: any) => {
    setCommentText(e.target.value);
  }, []);

  const onClearComment = () => {
    setCommentText("");
  };

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      console.log(commentText, post.id);
    },
    [commentText]
  );

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={commentText}
        onChange={onChangeComment}
        variant="standard"
        size="small"
        fullWidth
        label="Comment"
        placeholder="Add a comment..."
        multiline
      />
      <CommentSubmitButtons>
        <Chip label="Cancel" onClick={onClearComment} />
        <Chip label="Comment" variant="outlined" onClick={onSubmit} />
      </CommentSubmitButtons>
    </form>
  );
};

export default CommentForm;
