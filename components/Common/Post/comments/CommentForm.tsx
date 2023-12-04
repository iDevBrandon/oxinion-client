import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import useInput from "../../../../hooks/useInput";
import Chip from "@mui/material/Chip";
import { CommentSubmitButtons } from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCommentAPI } from "@/apis/posts";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

const CommentForm = ({ post }: any) => {
  const [commentText, setCommentText] = useState("");
  const queryClient = useQueryClient();
  const { data: me } = useMyInfoQuery();

  const onChangeComment = useCallback((e: any) => {
    setCommentText(e.target.value);
  }, []);

  const onClearComment = () => {
    setCommentText("");
  };

  const { mutate, isLoading } = useMutation(addCommentAPI, {
    onSuccess: () => {
      setCommentText("");
      queryClient.refetchQueries(["posts"]);
    },
  });

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (!commentText.trim()) {
        return alert("Please write a comment");
      }

      me && mutate({ content: commentText, postId: post._id, author: me._id });

      if (!me) {
        alert("Please log in first!");
        return;
      }

      console.log(commentText, post.id);
    },
    [commentText]
  );

  // if a user NOT logged in, alert

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
        {isLoading ? (
          <Chip label="Loading..." />
        ) : (
          <Chip label="Comment" variant="outlined" onClick={onSubmit} />
        )}
      </CommentSubmitButtons>
    </form>
  );
};

export default CommentForm;
