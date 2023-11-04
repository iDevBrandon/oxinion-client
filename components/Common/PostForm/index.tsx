// POST FORM
// 1. add location (lat/lng)
// 2. add images
// 3. add details

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import LocationForm from "./LocationForm";
import ImagesForm from "./ImagesForm";
import DetailsForm from "./DetailsForm";

const PostForm = ({ open, handleClose }: any) => {
  const [page, setPage] = useState(0);
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log("submitted post");
  }, []);

  const steps = ["Location", "Images", "Details"];
  const PageDisplay = () => {
    if (page === 0) {
      return <LocationForm />;
    } else if (page === 1) {
      return <ImagesForm />;
    } else {
      return <DetailsForm />;
    }
  };
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
          <Stepper activeStep={page} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div className="body" style={{ padding: "1rem" }}>
          {PageDisplay()}
        </div>
        <div className="footer">
          <Button
            onClick={() => setPage(page - 1)}
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            color="primary"
          >
            Back
          </Button>
          <Button
            onClick={() => setPage(page + 1)}
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            color="primary"
          >
            Next
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default PostForm;
