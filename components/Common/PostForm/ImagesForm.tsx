import { Paper } from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

const ImagesForm = ({ formData, setFormData }: any) => {
  console.log(formData);
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setFormData({
      ...formData,
      images: acceptedFiles,
    });
  }, []);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  const acceptedFileItems = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e: any) => (
          <li key={e.code}>{e.message} Not Supported.</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div>
      {formData.images?.length > 0 && <div>File uploaded successfully!</div>}

      <Paper
        sx={{
          cursor: "pointer",
          background: "#fafafa",
          color: "#bdbdbd",
          border: "1px dashed #ccc",
          "&:hover": { border: "1px solid #ccc" },
        }}
      >
        <div>{fileRejectionItems}</div>

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
