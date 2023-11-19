import { Paper } from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImagesForm = ({ formData, setFormData }: any) => {
  console.log(formData);
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setFormData({
      ...formData,
      imagePaths: acceptedFiles,
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Paper
        sx={{
          cursor: "pointer",
          background: "#fafafa",
          color: "#bdbdbd",
          border: "1px dashed #ccc",
          "&:hover": { border: "1px solid #ccc" },
        }}
      >
        <div style={{ padding: "16px" }} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p style={{ color: "black" }}>Drop the files here...</p>
          ) : (
            <p>Drag `n` Drop some files here, or click to select files</p>
          )}
          <em>(images with *.jpeg, *.png, *.jpg extension will be accepted)</em>
        </div>
      </Paper>
    </div>
  );
};

export default ImagesForm;
