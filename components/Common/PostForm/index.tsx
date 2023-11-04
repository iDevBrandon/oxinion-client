// POST FORM
// 1. add location (lat/lng)
// 2. add images
// 3. add details

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Step,
  StepLabel,
} from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const PostForm = ({ open, handleClose }: any) => {
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log("submitted post");
  }, []);

  const label = ["Location", "Images", "Details"];

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Step>
          <StepLabel>{label}</StepLabel>
        </Step>

        <DialogTitle id="alert-dialog-title">Create a post</DialogTitle>
        <DialogContent>multi step form here</DialogContent>
      </Dialog>
    </div>
  );
};

export default PostForm;
