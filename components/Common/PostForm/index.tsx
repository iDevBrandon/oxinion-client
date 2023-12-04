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
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LocationForm from "./LocationForm";
import ImagesForm from "./ImagesForm";
import DetailsForm from "./DetailsForm";
import { FormFooter, StyledButton, TransparentButton } from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPostAPI } from "@/apis/posts";
import { AxiosError } from "axios";
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "@/constants/location";

const PostForm = ({ open, handleClose }: any) => {
  const queryClient = useQueryClient();

  interface FormData {
    latitude: number;
    longitude: number;
    imagePaths: string[];
    description: string;
  }

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    // userId: me._id,
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
    imagePaths: [],
    description: "",
  });

  const { mutate, isLoading } = useMutation(addPostAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["posts"]);
    },
    onError: (e: AxiosError) => {
      alert(e.response?.data);
    },
  });

  const handleSubmit = useCallback(() => {
    const transformedFormData = {
      location: {
        type: "Point",
        coordinates: [formData?.longitude, formData?.latitude],
      },
      images: formData.imagePaths,
      description: formData.description,
    };

    console.log(transformedFormData);

    mutate(transformedFormData);
  }, [formData, mutate]);

  console.log(formData);

  const steps = ["Location", "Images", "Details"];
  const PageDisplay = () => {
    if (page === 0) {
      return <LocationForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ImagesForm formData={formData} setFormData={setFormData} />;
    } else {
      return <DetailsForm formData={formData} setFormData={setFormData} />;
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
        <div>
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
          <FormFooter>
            <TransparentButton
              style={{ outline: "none" }}
              disabled={page == 0}
              onClick={() => setPage(page - 1)}
            >
              <span>Back</span>
            </TransparentButton>

            {page === steps.length - 1 ? (
              <div>
                {formData.description === "" ? (
                  <div>Disabled</div>
                ) : (
                  <StyledButton
                    onClick={() => {
                      if (page === steps.length - 1) {
                        console.log(formData);
                        handleSubmit();
                      }

                      handleClose();
                    }}
                  >
                    <span>Submit</span>
                  </StyledButton>
                )}
              </div>
            ) : (
              <>
                {formData.latitude === 0 ? (
                  "Click Map"
                ) : (
                  <>
                    <StyledButton
                      onClick={() => setPage(page + 1)}
                      color="primary"
                    >
                      <span>Next</span>
                    </StyledButton>
                  </>
                )}
              </>
            )}
          </FormFooter>
        </div>
      </Dialog>
    </div>
  );
};

export default PostForm;
