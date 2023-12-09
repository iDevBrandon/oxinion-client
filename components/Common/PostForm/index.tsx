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
import { storage } from "@/firebase/config";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";

const PostForm = ({ open, handleClose }: any) => {
  const queryClient = useQueryClient();

  interface FormData {
    lat: number;
    lng: number;
    images: any;
    description: string;
  }

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    // userId: me._id,
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
    images: [],
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

  // useEffect(() => {
  //   console.log(formData); // Log the updated state when it changes
  // }, [formData]);

  const handleSubmit = useCallback(() => {
    const transformedFormData = {
      location: {
        type: "Point",
        coordinates: [formData?.lng, formData?.lat], // Use lng and lat
      },
      images: formData.images,
      description: formData.description,
    };

    console.log(transformedFormData);

    mutate(transformedFormData);
  }, [formData, mutate]);

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
            {/* Location form page */}

            {page === 0 && (
              <div style={{ outline: "none", display: "flex" }}>
                {/* <span>Back</span> */}
                <StyledButton onClick={() => setPage(page + 1)} color="primary">
                  <span>Next</span>
                </StyledButton>
              </div>
            )}

            {/* Images form page */}

            {page === 1 && (
              <div>
                {formData.images?.length > 0 ? (
                  <StyledButton
                    onClick={async () => {
                      try {
                        const updatedUrls = await Promise.all(
                          formData.images.map(async (image: any) => {
                            const imageRef = ref(
                              storage,
                              `/images/${image.name + v4()}`
                            );

                            const metadata = {
                              contentType: "image/jpeg",
                            };

                            // Upload the image
                            await uploadBytes(imageRef, image, metadata);

                            // Get the download URL for the image
                            const url = await getDownloadURL(imageRef);
                            console.log("Image URL:", url); // Log the URL

                            return url;
                          })
                        );

                        // Filter out null or undefined URLs
                        const filteredUrls = updatedUrls.filter((url) => url);

                        // Update form data with the URLs
                        setFormData((prevData) => ({
                          ...prevData,
                          images: filteredUrls,
                        }));

                        // Move to the next page
                        setPage(page + 1);
                      } catch (error) {
                        console.error("Error during image upload:", error);
                      }
                    }}
                  >
                    <span>Next</span>
                  </StyledButton>
                ) : (
                  <p>Please upload your images</p>
                )}
              </div>
            )}

            {page === 2 && (
              <div>
                {formData?.description === "" ? (
                  <div>Say something!</div>
                ) : (
                  <StyledButton
                    onClick={() => {
                      if (page === steps.length - 1) {
                        handleSubmit();
                      }

                      handleClose();
                    }}
                  >
                    <span>Submit</span>
                  </StyledButton>
                )}
              </div>
            )}
          </FormFooter>
        </div>
      </Dialog>
    </div>
  );
};

export default PostForm;
