// POST FORM
// 1. add location (lat/lng)
// 2. add images
// 3. add details

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const PostForm = ({ open, handleClose }: any) => {
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log("submitted post");
  }, []);

  const steps = ["Location", "Images", "Details"];
  return (
    <div>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              padding: "1rem 0",
            },
          },
        }}
        onClose={handleClose}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <DialogTitle id="alert-dialog-title">Create a post</DialogTitle>
        <DialogContent>multi step form here</DialogContent>
      </Dialog>
    </div>
  );
};

export default PostForm;
